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

type CoordsValueType = {
    l: number;
    c: number;
    h: number;
};

type ColorValueType = {
    hex: string;
    oklch: string;
    coords: CoordsValueType;
    lightness: number;
};

export function setStateFromValue(
    value: null | undefined | string | ColorValueType | CoordsValueType,
    mode: "all" | "hex" | "oklch" | "coords",
    precision: number,
) {
    // Handle wrong initial values
    if ((mode === "hex" || mode === "oklch") && typeof value === "object" && value !== null) {
        value = value.toString();

        if (value === "[object Object]") {
            return {};
        }
    }

    if (
        !value ||
        (Array.isArray(value) && value.length === 0) ||
        (typeof value === "object" && Object.keys(value).length === 0)
    ) {
        return {};
    }

    if (mode === "all") {
        // @ts-ignore
        return value?.hex ? value : {};
    }

    if (mode === "coords") {
        // @ts-ignore
        if (value?.l === undefined || value?.c === undefined || value?.h === undefined) {
            return {};
        }
        // @ts-ignore
        return convertOKLCHFromValue(`oklch(${value.l} ${value.c} ${value.h})`, precision);
    }

    if (mode === "hex") {
        return onHexChange(value as string, precision);
    }

    if (mode === "oklch") {
        return convertOKLCHFromValue(value as string, precision);
    }

    return {};
}

function convertOKLCHFromValue(value: string, precision: number) {
    const color = parseColor(value);
    const lightness = getLightness(color);
    const rgb = convert(color, sRGB);
    return {
        hex: serialize(rgb, { format: "hex" }),
        oklch: serialize(color, { precision }),
        coords: convertToOkLchCoords(color, precision),
        lightness,
    };
}

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

export function onHexChange(hex: string, precision: number): ColorValueType {
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

function convertToOkLchCoords(oklch: PlainColorObject | ColorConstructor, precision = 5) {
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
