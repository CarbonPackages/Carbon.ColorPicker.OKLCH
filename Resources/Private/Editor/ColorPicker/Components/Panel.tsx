// @ts-ignore
import React from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { onHexChange, setLuminance, setLightness, OptionPreview, RangeSlider } from "./index";
import { IconButton, SelectBox } from "@neos-project/react-ui-components";
import * as stylex from "@stylexjs/stylex";
import { colors, sizes, fonts, transitions } from "../Tokens.stylex";

const styles = stylex.create({
    highlight: {
        borderRadius: sizes.borderRadius,
        boxShadow: `0 0 0 2px ${colors.warn}`,
    },
    fontMono: {
        fontFamily: fonts.mono,
    },
    elementRow: {
        display: "flex",
        gap: sizes.spacingHalf,
    },
    colorPreview: (color) => ({
        borderRadius: sizes.borderRadius,
        height: sizes.goldenUnit,
        minWidth: sizes.goldenUnit,
        flexBasis: sizes.goldenUnit,
        flex: 1,
        backgroundColor: color || colors.contrastNeutral,
        backgroundSize: color ? null : "16px 16px",
        backgroundImage: color ? null : colors.checkerboard,
    }),
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
    colorPickerCollapsed: {
        marginTop: sizes.spacingFull,
    },
});

// @ts-ignore
export default function Panel({
    allowEmpty,
    precision,
    presets,
    showHexInput,
    showLightness,
    showLuminance,
    showPicker,
    showPresets,
    i18nRegistry,
    highlight,
    state,
    setState,
    id,
    onFocus = () => {},
    collapsed,
}: {
    allowEmpty: boolean;
    precision: number;
    presets: object;
    showHexInput: boolean;
    showLightness: boolean;
    showLuminance: boolean;
    showPicker: boolean;
    showPresets: boolean;
    i18nRegistry: any;
    highlight?: boolean;
    state: any;
    setState: Function;
    id: string;
    onFocus?: Function;
    collapsed: boolean;
}) {
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

    return (
        <>
            {Boolean(showPicker) && (
                <HexColorPicker
                    {...stylex.props(styles.colorPicker, collapsed && styles.colorPickerCollapsed)}
                    color={state?.hex}
                    onChange={handleHexChange}
                />
            )}

            {Boolean(showLightness) && (
                <RangeSlider
                    disabled={state?.hex ? false : true}
                    value={state?.lightness || 0}
                    onChange={handleLightnessChange}
                    label={i18nRegistry.translate("Carbon.ColorPicker.OKLCH:Main:lightness")}
                    id={`${id}-lightness`}
                />
            )}

            {Boolean(showLuminance) && (
                <RangeSlider
                    disabled={state?.coords?.l ? false : true}
                    value={state?.coords?.l * 100 || 0}
                    onChange={handleLuminanceChange}
                    label={i18nRegistry.translate("Carbon.ColorPicker.OKLCH:Main:luminance")}
                    id={`${id}-luminance`}
                />
            )}

            {(collapsed ? Boolean(showHexInput) : true) && (
                <div {...stylex.props(styles.elementRow)}>
                    {Boolean(collapsed) || (
                        <div {...stylex.props(styles.colorPreview(state?.oklch), highlight && styles.highlight)} />
                    )}

                    {Boolean(showHexInput) && (
                        <HexColorInput
                            {...stylex.props(styles.colorInput, styles.fontMono)}
                            title={i18nRegistry.translate("Carbon.ColorPicker.OKLCH:Main:setHexColor")}
                            color={state?.hex}
                            onChange={handleHexChange}
                            prefixed={false}
                            id={id}
                            onFocus={() => onFocus()}
                        />
                    )}

                    {!collapsed && Boolean(allowEmpty) && (
                        <IconButton
                            style="light"
                            icon="times"
                            title={i18nRegistry.translate("Carbon.ColorPicker.OKLCH:Main:resetColor")}
                            onClick={() => {
                                setState(null);
                            }}
                        />
                    )}
                </div>
            )}

            {Boolean(presetOptions) && (
                <SelectBox
                    options={presetOptions}
                    value={state?.hex}
                    placeholder={i18nRegistry.translate("Carbon.ColorPicker.OKLCH:Main:preset")}
                    allowEmpty={false}
                    onValueChange={handleHexChange}
                    ListPreviewElement={OptionPreview}
                />
            )}
        </>
    );
}
