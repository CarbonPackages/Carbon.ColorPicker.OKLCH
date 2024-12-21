//@ts-ignore
import React from "react";
import nearestColor from "nearest-color";
import { colornames } from "color-name-list";

// nearestColor need objects {name => hex} as input
const colors = colornames.reduce(
    (o: object, { name, hex }: { name: string; hex: string }) => Object.assign(o, { [name]: hex }),
    {},
);

const nearest = nearestColor.from(colors);

export default function ColorName({ hex }: { hex: string | null | undefined }) {
    if (!hex) {
        return "";
    }

    const value = nearest(hex);

    // @ts-ignore
    return value?.name || "";
}
