const common = {
  margin: 8,
  mainFont: "'Cabin', sans-serif",
  secondaryFont: "'Raleway', sans-serif"
}

const colors = {
  black: '#111111',
  darkGrey: '#212121',
  grey: '#535353',
  white: '#FFFFFF',
  teal: '#66EFAD',
  lightGrey: '#EAEAEA',
}

const gradients = {
  whiteGradient: (text, accent) =>
    `linear-gradient(180deg, ${text}aa 0%, ${accent}aa 100%)`,
  darkGradient: (text, accent) =>
    `linear-gradient(180deg, ${text}00 0%, ${accent}aa 100%)`,
};

const dark = {
  ...common,
  background: colors.black,
  secondaryBackground: colors.darkGrey,
  neutral: colors.grey,
  text: colors.white,
  accent: {
    main: colors.teal,
    secondary: colors.lightGrey
  },
  gradients: {
    main: gradients.darkGradient(colors.teal, colors.black)
  }
}

const white = {
  ...common,
  background: colors.lightGrey,
  secondaryBackground: colors.white,
  neutral: colors.grey,
  text: colors.black,
  accent: {
    main: colors.teal,
    secondary: colors.darkGrey,
  },
  gradients: {
    main: gradients.whiteGradient(colors.white, colors.teal)
  }
};

export default {dark, white}
