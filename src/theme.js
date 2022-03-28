import React from "react";
const common = {
  margin: 8,
  mainFont: "'Cabin', sans-serif",
  secondaryFont: "'Raleway', sans-serif",
};

const colors = {
  black: "#111111",
  darkGrey: "#212121",
  grey: "#535353",
  white: "#FFFFFF",
  teal: "#66EEAA",
  lightGrey: "#EAEAEA",
  red: "#FF4477",
};

const gradients = {
  whiteGradient: (text, accent) =>
    `linear-gradient(180deg, ${text}aa 0%, ${accent}aa 100%)`,
  darkGradient: (text, accent) =>
    `linear-gradient(180deg, ${text}00 0%, ${accent}aa 100%)`,
};

const dark = {
  ...common,
  ...colors,
  background: colors.black,
  secondaryBackground: colors.darkGrey,
  neutral: colors.grey,
  text: colors.white,
  accent: {
    main: colors.teal,
    secondary: colors.lightGrey,
  },
  gradients: {
    main: gradients.darkGradient(colors.teal, colors.black),
  },
};

const white = {
  ...common,
  ...colors,
  background: colors.lightGrey,
  secondaryBackground: colors.white,
  neutral: colors.grey,
  text: colors.black,
  accent: {
    main: colors.teal,
    secondary: colors.darkGrey,
  },
  gradients: {
    main: gradients.whiteGradient(colors.white, colors.teal),
  },
};

export const ThemeContext = React.createContext("dark");

export default { dark, white };
