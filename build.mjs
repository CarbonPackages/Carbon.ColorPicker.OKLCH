import esbuild from "esbuild";
import extensibilityMap from "@neos-project/neos-ui-extensibility/extensibilityMap.json" with { type: "json" };
import stylex from "@stylexjs/unplugin";

const watch = process.argv.includes("--watch");
const dev = process.argv.includes("--dev");
const minify = !dev && !watch;

/** @type {import("esbuild").BuildOptions} */
const options = {
    logLevel: "info",
    bundle: true,
    minify,
    sourcemap: watch,
    target: "es2020",
    format: "esm",
    splitting: true,
    legalComments: "none",
    entryPoints: {
        Plugin: "Resources/Private/Editor/manifest.ts",
        ColorName: "Resources/Private/Editor/ColorPicker/ColorName.tsx",
    },
    loader: {
        ".js": "tsx",
    },
    outdir: "Resources/Public",
    alias: extensibilityMap,
    metafile: true,
    plugins: [
        stylex.esbuild({
            useCSSLayers: false,
            classNamePrefix: "colorpicker-",
            dev,
            lightningcssOptions: {
                minify,
            },
        }),
    ],
};

if (minify) {
    options.drop = ["debugger"];
    options.pure = ["console.log"];
    options.dropLabels = ["DEV"];
}

if (watch) {
    esbuild.context(options).then((ctx) => ctx.watch());
} else {
    esbuild.build(options);
}
