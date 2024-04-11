// @ts-ignore
import React from "react";
import * as stylex from "@stylexjs/stylex";
import { fonts } from "../Tokens.stylex";

const styles = stylex.create({
    fontMono: {
        fontFamily: fonts.mono,
    },
});

export default function HexOutput({ hex }: { hex: string | null | undefined }) {
    if (!hex) {
        return "";
    }
    return <span {...stylex.props(styles.fontMono)}>{hex}</span>;
}
