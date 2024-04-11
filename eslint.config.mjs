import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ignores: ["Resources/Public/*"],
    },
    {
        files: ["**/*.{js,jsx,ts,tsx,mjs,mts}"],
        rules: {
            "@typescript-eslint/ban-ts-comment": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/ban-types": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    varsIgnorePattern: "React",
                },
            ],
        },
    },
);
