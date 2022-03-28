module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "jsx-a11y",
  "prettier",
  "babel"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "react/boolean-prop-naming": [
      "warn",
      {
        rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+",
      },
    ],
    "react/display-name": "off",
    "react-hooks/rules-of-hooks": "warn",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": 1,
    "react-hooks/exhaustive-deps": "warn",
    "no-console": "off",
    "prettier/prettier": ["warn"],
  },
  globals: {
    window: true,
    document: true,
    localStorage: true,
    FormData: true,
    FileReader: true,
    require: true,
    Blob: true,
    navigator: true,
    process: true,
    module: true,
  },
};
