// @ts-ignore
import React, { useState, useEffect, MouseEvent, lazy, Suspense } from "react";
import { neos } from "@neos-project/neos-ui-decorators";
import { connect } from "react-redux";
import Panel, { setStateFromValue } from "./Components";
import { Icon, IconButton, Label } from "@neos-project/react-ui-components";
import { selectors } from "@neos-project/neos-ui-redux-store";
import * as stylex from "@stylexjs/stylex";
import { colors, sizes, transitions } from "./Tokens.stylex";
import HexOutput from "./Components/HexOutput";

const getDataLoaderOptionsForProps = (props: any) => ({
    contextNodePath: props.focusedNodePath,
    dataSourceIdentifier: props.options.dataSourceIdentifier,
    dataSourceUri: props.options.dataSourceUri,
    dataSourceAdditionalData: props.options.dataSourceAdditionalData,
    dataSourceDisableCaching: Boolean(props.options.dataSourceDisableCaching),
});

const ColorName = lazy(() => import("./ColorName.js"));

const defaultOptions = {
    mode: "all",
    customPropertyName: "color",
    // This option makes it possible hide the whole editor based on data source
    hidden: false,
    disabled: false,
    allowEmpty: true,
    showPresets: true,
    showPicker: true,
    showHexInput: true,
    showLightness: false,
    showLuminance: false,
    hasOwnLabel: false,
    contrastThreshold: 0.6,
    precision: 5,
    presets: {},
};

const styles = stylex.create({
    disabled: {
        cursor: "not-allowed",
        opacity: 0.65,
        ":where(*) *": {
            pointerEvents: "none",
        },
    },
    error: {
        borderRadius: sizes.borderRadius,
        background: colors.error,
        padding: sizes.spacingQuarter,
    },
    highlight: {
        borderRadius: sizes.borderRadius,
        boxShadow: `0 0 0 2px ${colors.warn}`,
    },
    wrapper: {
        display: "flex",
        flexDirection: "column",
        gap: sizes.spacingHalf,
    },
    loading: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: sizes.goldenUnit,
    },
    popoverButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "stretch",
        borderWidth: 0,
        padding: 0,
        minHeight: sizes.goldenUnit,
        borderRadius: sizes.borderRadius,
        cursor: "pointer",
        background: "none",
        backgroundColor: colors.contrastNeutral,
    },
    popoverButtonPreview: (color, luminance, contrastThreshold) => ({
        flex: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "left",
        minHeight: sizes.goldenUnit,
        borderTopLeftRadius: sizes.borderRadius,
        borderBottomLeftRadius: sizes.borderRadius,
        color: luminance > contrastThreshold ? "black" : "white",
        backgroundColor: color || null,
        backgroundSize: color ? null : "16px 16px",
        backgroundImage: color ? null : colors.checkerboard,
        paddingInline: sizes.spacingFull,
        overflow: "hidden",
        textOverflow: "ellipsis",
    }),
    popoverButtonIcon: (open) => ({
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        transition: `transform ${transitions.default} ${transitions.timing}`,
        minWidth: sizes.goldenUnit,
    }),
    popoverPanel: (open) => ({
        display: "grid",
        gridTemplateRows: open ? "1fr" : "0fr",
        opacity: open ? 1 : 0,
        transition: `grid-template-rows ${transitions.default} ${transitions.timing}, opacity ${transitions.fast} ${transitions.timing} ${open ? transitions.fast : "0s"}`,
    }),
    popoverContent: {
        overflow: "hidden",
        marginInline: -16,
        paddingInline: 16,
    },
    noGap: {
        gap: 0,
    },
});

// @ts-ignore
function Editor(props) {
    const mergedOptions = { ...defaultOptions, ...props.config, ...props.options };
    const { value, commit, highlight, i18nRegistry, id, dataSourcesDataLoader, renderHelpIcon } = props;
    const label = i18nRegistry.translate(props.label);
    const { mode, precision, dataSourceIdentifier, dataSourceUri, dataSourceAdditionalData } = mergedOptions;
    if (mode !== "coords" && mode !== "hex" && mode !== "all" && mode !== "oklch") {
        return (
            <div {...stylex.props(styles.error)}>
                {i18nRegistry.translate("Carbon.ColorPicker.OKLCH:Main:invalidMode", "", [mode])}
            </div>
        );
    }

    const hasDataSource = !!(dataSourceIdentifier || dataSourceUri);
    const [options, setOptions] = useState(hasDataSource ? [] : mergedOptions);
    const [isLoading, setIsLoading] = useState(hasDataSource);
    const [open, setOpen] = useState(false);
    const [state, setState] = useState(setStateFromValue(value, mode, precision));

    // We use this hack to prevent the editor from re-rendering all the time, even if the options are the same.
    const [dataSourceOptionsAsJSON, setDataSourceOptionsAsJSON] = useState(null);

    useEffect(() => {
        const dataAsJSON = JSON.stringify({ dataSourceIdentifier, dataSourceUri, dataSourceAdditionalData });
        if (!hasDataSource || dataSourceOptionsAsJSON === dataAsJSON) {
            return;
        }

        setDataSourceOptionsAsJSON(dataAsJSON);

        // Load options from data source
        dataSourcesDataLoader.resolveValue(getDataLoaderOptionsForProps(props), value).then((values: any) => {
            setIsLoading(false);
            setOptions({ ...mergedOptions, ...values });
        });
    }, [dataSourceIdentifier, dataSourceUri, dataSourceAdditionalData]);

    useEffect(() => {
        if (!state?.hex) {
            if (value == "") {
                return;
            }

            // Make no commit if the color is empty
            if (
                (mode === "all" || mode === "coords") &&
                (JSON.stringify(value) == "{}" || JSON.stringify(value) == "[]")
            ) {
                return;
            }

            commit("");
            return;
        }

        if (mode === "all") {
            if (value.oklch != state.oklch) {
                // create custom properties
                const customProperty = {
                    coords: `--${options.customPropertyName}-l:${state.coords.l};--${options.customPropertyName}-c:${state.coords.c};--${options.customPropertyName}-h:${state.coords.h};`,
                    oklch: `--${options.customPropertyName}:${state.oklch};`,
                    hex: `--${options.customPropertyName}:${state.hex};`,
                };

                commit({ hex: state.hex, oklch: state.oklch, coords: state.coords, customProperty });
            }
            return;
        }

        if (mode === "coords") {
            if (JSON.stringify(value) != JSON.stringify(state.coords)) {
                commit(state.coords);
            }
            return;
        }

        if (value != state[mode]) {
            commit(state[mode]);
        }
    }, [state]);

    const enableCollapsed = options.collapsed && options.showPicker;

    if (isLoading) {
        return (
            <>
                <Label htmlFor={id}>
                    {label} {renderHelpIcon()}
                </Label>
                <div
                    {...stylex.props(styles.loading)}
                    id={id}
                    title={i18nRegistry.translate("Carbon.ColorPicker.OKLCH:Main:loading")}
                >
                    <Icon icon="spinner" size="lg" spin />
                </div>
            </>
        );
    }

    if (options.hidden) {
        return null;
    }

    return (
        <>
            <Label htmlFor={id}>
                {label} {renderHelpIcon()}
            </Label>
            <div
                {...stylex.props(styles.wrapper, options.disabled && styles.disabled, enableCollapsed && styles.noGap)}
            >
                {enableCollapsed ? (
                    <>
                        <button
                            {...stylex.props(styles.popoverButton, highlight && styles.highlight)}
                            type="button"
                            title={i18nRegistry.translate(
                                `Carbon.ColorPicker.OKLCH:Main:${open ? "close" : "open"}Panel`,
                            )}
                            onClick={() => setOpen(!open)}
                            aria-expanded={open}
                            aria-controls={`${id}-panel`}
                        >
                            <output
                                {...stylex.props(
                                    styles.popoverButtonPreview(
                                        state?.oklch,
                                        state?.coords?.l || 0,
                                        options.contrastThreshold,
                                    ),
                                )}
                            >
                                <Suspense fallback={<HexOutput hex={state?.hex} />}>
                                    <ColorName hex={state?.hex} />
                                </Suspense>
                            </output>
                            {Boolean(options.allowEmpty) && Boolean(state?.oklch) && (
                                <IconButton
                                    style="light"
                                    icon="times"
                                    title={i18nRegistry.translate("Carbon.ColorPicker.OKLCH:Main:resetColor")}
                                    onClick={(event: MouseEvent<HTMLButtonElement>) => {
                                        event.stopPropagation();
                                        setState(null);
                                    }}
                                />
                            )}
                            <Icon icon="chevron-down" {...stylex.props(styles.popoverButtonIcon(open))} />
                        </button>
                        <div {...stylex.props(styles.popoverPanel(open))} aria-hidden={!open} id={`${id}-panel`}>
                            <div {...stylex.props(styles.wrapper, styles.popoverContent)}>
                                <Panel
                                    {...options}
                                    state={state}
                                    setState={setState}
                                    i18nRegistry={i18nRegistry}
                                    id={id}
                                    onFocus={() => setOpen(true)}
                                    collapsed={true}
                                />
                            </div>
                        </div>
                    </>
                ) : (
                    <Panel
                        {...options}
                        state={state}
                        setState={setState}
                        highlight={highlight}
                        i18nRegistry={i18nRegistry}
                        id={id}
                        collapsed={false}
                    />
                )}
            </div>
        </>
    );
}

const neosifier = neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
    config: globalRegistry.get("frontendConfiguration").get("Carbon.ColorPicker.OKLCH"),
    // @ts-ignore
    dataSourcesDataLoader: globalRegistry.get("dataLoaders").get("DataSources"),
}));
const connector = connect((state: any) => ({
    // @ts-ignore
    focusedNodePath: selectors.CR.Nodes.focusedNodePathSelector(state),
}));

export default neosifier(connector(Editor));
