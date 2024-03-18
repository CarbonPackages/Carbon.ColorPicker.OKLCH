// @ts-ignore
import React, { useEffect, useState } from "react";
import { neos } from "@neos-project/neos-ui-decorators";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { onHexChange, setLuminance, setLightness, setStateFromValue, OptionPreview, RangeSlider } from "./Components";
import { IconButton, SelectBox } from "@neos-project/react-ui-components";
import * as stylex from "@stylexjs/stylex";
import { colors, sizes, fonts, transitions } from "./Tokens.stylex";

const neosifier = neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
    config: globalRegistry.get("frontendConfiguration").get("Carbon.ColorPicker.OKLCH"),
}));

const defaultProps = {
    options: {
        mode: "all",
        disabled: false,
        allowEmpty: true,
        showPresets: true,
        showPicker: true,
        showHexInput: true,
        showLightness: false,
        showLuminance: false,
        precision: 5,
        presets: {},
    },
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
    fontMono: {
        fontFamily: fonts.mono,
    },
    elementRow: {
        display: "flex",
        gap: sizes.spacingHalf,
    },
    colorPreview: {
        borderRadius: sizes.borderRadius,
        height: sizes.goldenUnit,
        minWidth: sizes.goldenUnit,
        flexBasis: sizes.goldenUnit,
        flex: 1,
    },
    colorPreviewTransparent: {
        backgroundSize: "16px 16px",
        backgroundColor: colors.contrastNeutral,
        backgroundImage: `url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" fill-opacity=".25"><rect x="1" width="1" height="1" /><rect y="1" width="1" height="1" /></svg>')`,
    },
    colorInput: {
        flexGrow: 1,
        height: sizes.goldenUnit,
        width: "100%",
        borderRadius: sizes.borderRadius,
        border: 0,
        backgroundColor: colors.contrastNeutral,
        paddingInline: sizes.spacingFull,
        color: "white",
        outline: "none",
        ":focus": {
            color: "black",
            backgroundColor: "white",
        },
    },
    colorPicker: {
        width: "100%",
        height: "auto",
        aspectRatio: 1,
        marginTop: sizes.spacingHalf,
        // :where(*) is a hack to select classes inside the component
        ":where(*) > :first-child": {
            borderTopLeftRadius: sizes.borderRadius,
            borderTopRightRadius: sizes.borderRadius,
        },
        ":where(*) > :last-child": {
            borderBottomLeftRadius: sizes.borderRadius,
            borderBottomRightRadius: sizes.borderRadius,
        },
        ":where(*) .react-colorful__pointer": {
            height: 20,
            width: 20,
            backgroundColor: colors.primaryBlue,
            borderColor: colors.primaryBlue,
            transitionProperty: "transform, background-color, border-color",
            transitionTimingFunction: transitions.timing,
            transitionDuration: transitions.default,
            transition: `transform ${transitions.default} ${transitions.timing}`,
        },
        ":where(*) .react-colorful__pointer:hover": {
            backgroundColor: colors.primaryBlueHover,
            borderColor: colors.primaryBlueHover,
            cursor: "grab",
        },
        ":where(*) .react-colorful__pointer:active": {
            transform: "translate(-50%,-50%) scale(1.5)",
            cursor: "grabbing",
        },
    },
});

// @ts-ignore
function Editor(props) {
    const options = { ...defaultProps.options, ...props.config, ...props.options };
    const { value, commit, highlight, i18nRegistry } = props;
    const {
        allowEmpty,
        disabled,
        mode,
        precision,
        presets,
        showHexInput,
        showLightness,
        showLuminance,
        showPicker,
        showPresets,
    } = options;
    if (mode !== "coords" && mode !== "hex" && mode !== "all" && mode !== "oklch") {
        return (
            <div {...stylex.props(styles.error)}>
                {i18nRegistry.translate("Carbon.ColorPicker.OKLCH:Main:invalidMode", "", [mode])}
            </div>
        );
    }

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
                commit({ hex: state.hex, oklch: state.oklch, coords: state.coords });
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

    function handleHexChange(hex: string) {
        setState(onHexChange(hex, precision));
    }

    function handleLightnessChange(lightness: number) {
        handleHexChange(setLightness(state?.hex, lightness));
    }

    function handleLuminanceChange(luminance: number) {
        handleHexChange(setLuminance(state?.oklch, luminance));
    }

    const presetOptions =
        showPresets &&
        presets &&
        Object.entries(presets)
            .map(([key, color]) => ({ value: color, label: key }))
            .filter((preset) => !!preset.value);

    const lightness = state?.lightness || 0;
    const luminance = state?.coords?.l || 0;

    return (
        <div {...stylex.props(styles.wrapper, disabled && styles.disabled)}>
            {Boolean(showPicker) && (
                <HexColorPicker {...stylex.props(styles.colorPicker)} color={state?.hex} onChange={handleHexChange} />
            )}

            {Boolean(showLightness) && (
                <RangeSlider
                    disabled={state?.hex ? false : true}
                    value={lightness}
                    onChange={handleLightnessChange}
                    label={i18nRegistry.translate("Carbon.ColorPicker.OKLCH:Main:lightness")}
                />
            )}
            {Boolean(showLuminance) && (
                <RangeSlider
                    disabled={state?.coords?.l ? false : true}
                    value={luminance * 100}
                    onChange={handleLuminanceChange}
                    label={i18nRegistry.translate("Carbon.ColorPicker.OKLCH:Main:luminance")}
                />
            )}

            <div {...stylex.props(styles.elementRow)}>
                <div
                    {...stylex.props(
                        styles.colorPreview,
                        state?.oklch || styles.colorPreviewTransparent,
                        highlight && styles.highlight,
                    )}
                    style={{ backgroundColor: state?.oklch }}
                />
                {Boolean(showHexInput) && (
                    <HexColorInput
                        {...stylex.props(styles.colorInput, styles.fontMono)}
                        title={i18nRegistry.translate("Carbon.ColorPicker.OKLCH:Main:setHexColor")}
                        color={state?.hex}
                        onChange={handleHexChange}
                        prefixed={false}
                    />
                )}
                {Boolean(allowEmpty) && (
                    <IconButton
                        style="lighter"
                        icon="times"
                        title={i18nRegistry.translate("Carbon.ColorPicker.OKLCH:Main:resetColor")}
                        onClick={() => {
                            setState(null);
                        }}
                    />
                )}
            </div>
            {Boolean(!!presetOptions) && (
                <SelectBox
                    options={presetOptions}
                    value={state?.hex}
                    placeholder={i18nRegistry.translate("Carbon.ColorPicker.OKLCH:Main:preset")}
                    allowEmpty={false}
                    onValueChange={handleHexChange}
                    ListPreviewElement={OptionPreview}
                />
            )}
        </div>
    );
}

export default neosifier(Editor);
