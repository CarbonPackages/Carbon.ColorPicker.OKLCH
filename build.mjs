import esbuild from "esbuild";
import extensibilityMap from "@neos-project/neos-ui-extensibility/extensibilityMap.json" with { type: "json" };
import stylexPlugin from "@stylexjs/esbuild-plugin";
import path from "path";
import { fileURLToPath } from "url";

// eslint-disable-next-line no-undef
const argv = process.argv;
const watch = argv.includes("--watch");
const dev = argv.includes("--dev");
const minify = !dev && !watch;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
    plugins: [
        stylexPlugin({
            classNamePrefix: "colorpicker-",
            useCSSLayers: false,
            dev: false,
            generatedCSSFileName: path.resolve(__dirname, "Resources/Public/Plugin.css"),
            stylexImports: ["@stylexjs/stylex"],
            treeshakeCompensation: true,
            unstable_moduleResolution: {
                type: "commonJS",
                rootDir: __dirname,
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
