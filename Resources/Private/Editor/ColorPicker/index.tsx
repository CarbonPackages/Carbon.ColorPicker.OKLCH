// @ts-ignore
import React from "react";
import { neos } from "@neos-project/neos-ui-decorators";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { onHexChange, setLightness, OptionWithPreview, LightnessSlider } from "./Utils";
import { IconButton, SelectBox } from "@neos-project/react-ui-components";
import * as stylex from "@stylexjs/stylex";
import { colors, sizes, fonts, transitions } from "./Utils/Tokens.stylex";

const neosifier = neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
    config: globalRegistry.get("frontendConfiguration").get("Carbon.ColorPicker.OKLCH"),
}));

const defaultProps = {
    options: {
        disabled: false,
        allowEmpty: true,
        showPresets: true,
        showPicker: true,
        showHexInput: true,
        showLightnessSlider: true,
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
    const { disabled, allowEmpty, presets, precision, showPresets, showPicker, showHexInput, showLightnessSlider } =
        options;

    function onReset() {
        commit({});
    }

    function handleHexChange(hex: string) {
        commit(onHexChange(hex, precision));
    }

    function handleLightnessChange(lightness: number) {
        handleHexChange(setLightness(value?.hex, lightness));
    }

    const presetOptions =
        showPresets &&
        presets &&
        Object.entries(presets)
            .map(([key, color]) => ({ value: color, label: key }))
            .filter((preset) => !!preset.value);

    return (
        <div {...stylex.props(styles.wrapper, disabled && styles.disabled)}>
            {Boolean(showPicker) && (
                <HexColorPicker {...stylex.props(styles.colorPicker)} color={value?.hex} onChange={handleHexChange} />
            )}

            {Boolean(showLightnessSlider) && (
                <LightnessSlider
                    disabled={value?.hex ? false : true}
                    value={value?.lightness || 0}
                    onChange={handleLightnessChange}
                    label={i18nRegistry.translate("Carbon.ColorPicker.OKLCH:Main:lightness")}
                />
            )}

            <div {...stylex.props(styles.elementRow)}>
                <div
                    {...stylex.props(
                        styles.colorPreview,
                        value?.oklch || styles.colorPreviewTransparent,
                        highlight && styles.highlight,
                    )}
                    style={{ backgroundColor: value?.oklch }}
                />
                {Boolean(showHexInput) && (
                    <HexColorInput
                        {...stylex.props(styles.colorInput, styles.fontMono)}
                        title={i18nRegistry.translate("Carbon.ColorPicker.OKLCH:Main:setHexColor")}
                        color={value?.hex}
                        onChange={handleHexChange}
                        prefixed={false}
                    />
                )}
                {Boolean(allowEmpty) && (
                    <IconButton
                        style="lighter"
                        icon="times"
                        title={i18nRegistry.translate("Carbon.ColorPicker.OKLCH:Main:resetColor")}
                        onClick={onReset}
                    />
                )}
            </div>
            {Boolean(!!presetOptions) && (
                <SelectBox
                    options={presetOptions}
                    value={value?.hex}
                    placeholder={i18nRegistry.translate("Carbon.ColorPicker.OKLCH:Main:preset")}
                    allowEmpty={false}
                    onValueChange={handleHexChange}
                    ListPreviewElement={OptionWithPreview}
                />
            )}
        </div>
    );
}

export default neosifier(Editor);
