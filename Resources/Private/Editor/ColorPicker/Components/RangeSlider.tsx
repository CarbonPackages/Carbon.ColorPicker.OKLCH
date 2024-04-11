// @ts-ignore
import React, { useEffect, useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { colors, sizes, fonts, transitions } from "../Tokens.stylex";

const styles = stylex.create({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%",
        gap: sizes.spacingHalf,
    },
    disabled: {
        cursor: "not-allowed",
        opacity: 0.65,
        ":where(*) *": {
            pointerEvents: "none !important",
        },
    },
    labelWrapper: {
        display: "flex",
        justifyContent: "space-between",
        gap: sizes.spacingHalf,
    },
    label: {
        userSelect: "none",
        cursor: "pointer",
        fontSize: fonts.size,
    },
    numberInput: {
        padding: `${sizes.spacingQuarter} ${sizes.spacingHalf}`,
        margin: `calc(${sizes.spacingQuarter} * -1) calc(${sizes.spacingHalf} * -1)`,
        borderRadius: sizes.borderRadius,
        textAlign: "right",
        color: "white",
        fontFamily: fonts.mono,
        border: 0,
        background: "none",
        outline: "none",
        "::-webkit-outer-spin-button": {
            display: "none",
        },
        "::-webkit-inner-spin-button": {
            display: "none",
        },
        appearance: "textfield",
        "-moz-appearance": "textfield",
        "-webkit-appearance": "textfield",
        ":focus": {
            background: "white",
            color: "black",
        },
    },
    rangeSlider: {
        width: "100%",
        height: sizes.input,
        appearance: "none",
        borderRadius: sizes.borderRadius,
        border: 0,
        outline: "none",
        backgroundColor: colors.contrastNeutral,

        "::-webkit-slider-thumb": {
            appearance: "none",
            backgroundColor: colors.primaryBlue,
            boxShadow: "0 0 0 #000, 0 0 0 #0d0d0d",
            cursor: "grab",
            height: 20,
            width: 20,
            borderWidth: 0,
            borderRadius: sizes.borderRadius,
            transitionProperty: "transform, background-color",
            transitionTimingFunction: transitions.timing,
            transitionDuration: transitions.default,

            ":hover": {
                backgroundColor: colors.primaryBlueHover,
            },
            ":focus": {
                backgroundColor: colors.primaryBlueHover,
            },
            ":active": {
                cursor: "grabbing",
                transform: "scale(1.2)",
            },
        },
        "::-moz-range-thumb": {
            appearance: "none",
            backgroundColor: colors.primaryBlue,
            boxShadow: "0 0 0 #000, 0 0 0 #0d0d0d",
            cursor: "grab",
            height: 20,
            width: 20,
            borderWidth: 0,
            borderRadius: sizes.borderRadius,
            transitionProperty: "transform, background-color",
            transitionTimingFunction: transitions.timing,
            transitionDuration: transitions.default,

            ":hover": {
                backgroundColor: colors.primaryBlueHover,
            },
            ":focus": {
                backgroundColor: colors.primaryBlueHover,
            },
            ":active": {
                cursor: "grabbing",
                transform: "scale(1.2)",
            },
        },
    },
});

export default function RangeSlider({
    value,
    onChange,
    label,
    disabled,
    id,
}: {
    value: number;
    onChange: Function;
    label: string;
    input?: Boolean;
    disabled?: Boolean;
    id: string;
}) {
    const [number, setNumber] = useState(value || 0);
    const min = 0;
    const max = 100;

    useEffect(() => {
        setNumber(value);
    }, [value]);

    function handleChange(event: React.FormEvent<HTMLInputElement>) {
        onChange(event?.currentTarget?.valueAsNumber);
    }

    const numLength = (value: number) => value.toString().length;
    const minWidth = Math.max(numLength(min), numLength(max)) + "ch";
    const minWidthInput = `calc(${minWidth} + 2rem)`; // 2rem for the input padding

    return (
        <div {...stylex.props(styles.wrapper, disabled && styles.disabled)}>
            <div {...stylex.props(styles.labelWrapper)}>
                <label htmlFor={id} {...stylex.props(styles.label)}>
                    {label}
                </label>
                <input
                    {...stylex.props(styles.numberInput)}
                    style={{ minWidth: minWidthInput }}
                    min={min}
                    max={max}
                    type="number"
                    value={Math.round(number)}
                    onChange={handleChange}
                    id={id}
                    inputMode="numeric"
                />
            </div>
            <input
                {...stylex.props(styles.rangeSlider)}
                type="range"
                min={min}
                max={max}
                step="1"
                value={Math.round(number)}
                onChange={handleChange}
            />
        </div>
    );
}
