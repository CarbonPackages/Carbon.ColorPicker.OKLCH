// @ts-ignore
import React, { PureComponent } from "react";
import * as stylex from "@stylexjs/stylex";
import { colors, sizes, fonts } from "./Tokens.stylex";

const styles = stylex.create({
    preview: {
        display: "block",
        width: sizes.input,
        height: sizes.input,
        borderRadius: "100%",
        marginBlock: `calc(${sizes.spacingQuarter} * -1)`,
        marginLeft: `calc(${sizes.spacingHalf} * -1)`,
    },
    button: {
        cursor: "pointer",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        fontSize: fonts.size,
        lineHeight: `calc(${sizes.goldenUnit} - 10px)`,
        padding: `5px ${sizes.spacingFull}`,
        overflow: "hidden",
        display: "flex",
        gap: sizes.spacingHalf,
        alignItems: "center",
        border: 0,
        background: "none",
        borderRadius: 0,
        color: "white",
        width: "100%",
    },
    buttonHighlighted: {
        backgroundColor: colors.primaryBlue,
    },
});

export default function OptionWithPreview({
    option,
    onClick,
    isHighlighted,
    onMouseEnter,
}: {
    option: { label: string; value: string };
    onClick: () => void;
    isHighlighted: boolean;
    onMouseEnter: () => void;
}) {
    const label = capitalizeFirstLetter(option.label);
    return (
        <button
            {...stylex.props(styles.button, isHighlighted && styles.buttonHighlighted)}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            type="button"
        >
            <span {...stylex.props(styles.preview)} style={{ backgroundColor: option.value }}></span>
            <span title={label}>{label}</span>
        </button>
    );
}

function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
