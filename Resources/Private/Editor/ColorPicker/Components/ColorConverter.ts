import {
    to as convert,
    parse as parseColor,
    ColorSpace,
    serialize,
    sRGB,
    OKLCH,
    HSL,
    ColorConstructor,
    PlainColorObject,
} from "colorjs.io/fn";

ColorSpace.register(sRGB);
ColorSpace.register(OKLCH);
ColorSpace.register(HSL);

export function setLightness(hex: string, lightness: number) {
    const color = parseColor(hex);
    const hsl = convert(color, HSL);
    hsl.coords[2] = lightness;
    return serialize(convert(hsl, sRGB), { format: "hex" });
}

export function setLuminance(oklch: string, luminance: number) {
    const color = parseColor(oklch);
    color.coords[0] = luminance / 100;
    const rgb = convert(color, sRGB);
    return serialize(rgb, { format: "hex" });
}

export function onHexChange(hex: string, precision: number) {
    const color = parseColor(hex);
    const lightness = getLightness(color);
    const oklch = convert(color, OKLCH);

    return {
        hex,
        oklch: serialize(oklch, { precision }),
        coords: convertToOkLchCoords(oklch, precision),
        lightness,
    };
}

function getLightness(color: ColorConstructor) {
    const { coords } = convert(color, HSL);
    return Math.round(coords[2]);
}

function convertToOkLchCoords(oklch: PlainColorObject, precision = 5) {
    const { coords } = oklch;
    return {
        l: round(coords[0], precision),
        c: round(coords[1], precision),
        h: round(coords[2], precision),
    };
}

function round(value: number, precision: number | undefined = undefined) {
    value = value || 0;
    if (!precision) {
        return value;
    }
    const factor = Math.pow(10, precision);
    return Math.round(value * factor) / factor;
}
