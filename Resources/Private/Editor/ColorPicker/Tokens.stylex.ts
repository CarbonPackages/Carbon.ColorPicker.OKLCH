import * as stylex from "@stylexjs/stylex";

export const colors = stylex.defineVars({
    primaryBlue: "var(--colors-PrimaryBlue)",
    primaryBlueHover: "var(--colors-PrimaryBlueHover)",
    contrastNeutral: "var(--colors-ContrastNeutral)",
    warn: "var(--colors-Warn)",
    error: "var(--colors-Error)",
    checkerboard: `url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" fill-opacity=".25"><rect x="1" width="1" height="1" /><rect y="1" width="1" height="1" /></svg>')`,
});

export const sizes = stylex.defineVars({
    input: "calc(var(--spacing-Full) + var(--spacing-Half))",
    spacingFull: "var(--spacing-Full)",
    spacingHalf: "var(--spacing-Half)",
    spacingQuarter: "var(--spacing-Quarter)",
    borderRadius: "2px",
    goldenUnit: "var(--spacing-GoldenUnit)",
});

export const fonts = stylex.defineVars({
    mono: "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
    size: "var(--fontSize-Base)",
});

export const transitions = stylex.defineVars({
    fast: "var(--transition-Fast)",
    default: "var(--transition-Default)",
    slow: "var(--transition-Slow)",
    timing: "cubic-bezier(0.4, 0, 0.2, 1)",
});
