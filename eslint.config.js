import { FlatCompat } from "@eslint/eslintrc";
import reactPlugin from "eslint-plugin-react";
import nextPlugin from "@next/eslint-plugin-next";

const compat = new FlatCompat();

export default [
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      "@next/next": nextPlugin,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
];
