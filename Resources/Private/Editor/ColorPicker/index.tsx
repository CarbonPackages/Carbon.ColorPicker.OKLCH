// @ts-ignore
import React, { useState, useEffect, MouseEvent, lazy, Suspense } from "react";
import { neos } from "@neos-project/neos-ui-decorators";
import Panel, { setStateFromValue } from "./Components";
import { Icon, IconButton } from "@neos-project/react-ui-components";
import * as stylex from "@stylexjs/stylex";
import { colors, sizes, transitions } from "./Tokens.stylex";
import HexOutput from "./Components/HexOutput";

const neosifier = neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
    config: globalRegistry.get("frontendConfiguration").get("Carbon.ColorPicker.OKLCH"),
}));

const ColorName = lazy(() => import("./ColorName.js"));

const defaultOptions = {
    mode: "all",
    customPropertyName: "color",
    disabled: false,
    allowEmpty: true,
    showPresets: true,
    showPicker: true,
    showHexInput: true,
    showLightness: false,
    showLuminance: false,
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
    const options = { ...defaultOptions, ...props.config, ...props.options };
    const { value, commit, highlight, i18nRegistry, id } = props;
    const { disabled, mode, collapsed, allowEmpty, precision, contrastThreshold } = options;
    if (mode !== "coords" && mode !== "hex" && mode !== "all" && mode !== "oklch") {
        return (
            <div {...stylex.props(styles.error)}>
                {i18nRegistry.translate("Carbon.ColorPicker.OKLCH:Main:invalidMode", "", [mode])}
            </div>
        );
    }

    const [open, setOpen] = useState(false);
    const [state, setState] = useState(setStateFromValue(value, mode, precision));

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

    const enableCollapsed = collapsed && options.showPicker;

    return (
        <div {...stylex.props(styles.wrapper, disabled && styles.disabled, enableCollapsed && styles.noGap)}>
            {enableCollapsed ? (
                <>
                    <button
                        {...stylex.props(styles.popoverButton, highlight && styles.highlight)}
                        type="button"
                        title={i18nRegistry.translate(`Carbon.ColorPicker.OKLCH:Main:${open ? "close" : "open"}Panel`)}
                        onClick={() => setOpen(!open)}
                        aria-expanded={open}
                        aria-controls={`${id}-panel`}
                    >
                        <output
                            {...stylex.props(
                                styles.popoverButtonPreview(state?.oklch, state?.coords?.l || 0, contrastThreshold),
                            )}
                        >
                            <Suspense fallback={<HexOutput hex={state?.hex} />}>
                                <ColorName hex={state?.hex} />
                            </Suspense>
                        </output>
                        {Boolean(allowEmpty) && Boolean(state?.oklch) && (
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
    );
}

export default neosifier(Editor);
