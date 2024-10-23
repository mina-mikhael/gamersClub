import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  {
    languageOptions: { globals: globals.node },
    rules: {
      // Disable ESLint rule that suggests using ES module syntax
      "import/no-commonjs": "off",
    },
  },
  pluginJs.configs.recommended,
];
