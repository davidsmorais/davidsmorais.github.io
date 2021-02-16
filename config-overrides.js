/* eslint-disable */
const { override, addWebpackAlias, useEslintRc } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    Assets: path.resolve(__dirname, "./src/assets"),
    Common: path.resolve(__dirname, "src/common"),
    Components: path.resolve(__dirname, "src/components"),
    Config: path.resolve(__dirname, "./src/config"),
    Content: path.resolve(__dirname, "./src/content"),
    Hooks: path.resolve(__dirname, "./src/hooks"),
    Pages: path.resolve(__dirname, "./src/pages"),
    Theme: path.resolve(__dirname, "./src/theme"),
    Utils: path.resolve(__dirname, "./src/utils"),
  })
);
