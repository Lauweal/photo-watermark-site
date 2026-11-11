import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import vue from "eslint-plugin-vue";
import globals from "globals";
import ts from "typescript-eslint";

export default defineConfig(
  { ignores: ["dist/**", "node_modules/**"] },
  {
    files: ["**/*.{ts,vue}"],
    extends: [
      js.configs.recommended,
      ...ts.configs.recommended,
      ...vue.configs["flat/essential"],
    ],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: { parser: ts.parser, extraFileExtensions: [".vue"] },
    },
  },
  {
    files: ["**/*.js"],
    extends: [js.configs.recommended],
    languageOptions: { globals: globals.node },
  },
);
