import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js"
import { fixupConfigRules } from "@eslint/compat"

export default [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...fixupConfigRules(pluginReactConfig),
    {
        rules: {
            "react/react-in-jsx-scope": "off",
            "react/no-unescaped-entities": "off",
            "react/display-name": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "no-case-declarations": "off",
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    vars: "all",
                    args: "after-used",
                    ignoreRestSiblings: true,
                    destructuredArrayIgnorePattern: "[_]",
                },
            ],
            "@typescript-eslint/ban-types": "off",
            "no-constant-binary-expression": "off",
            "@typescript-eslint/ban-ts-comment": "off",
            "no-useless-escape": "off",
            "no-irregular-whitespace": "off",
            "react/jsx-no-target-blank": "warn",
        },
    },
]
