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

const dark = {
  ...common,
  background: colors.black,
  secondaryBackground: colors.darkGrey,
  neutral: colors.grey,
  text: colors.white,
  accent: {
    main: colors.teal,
    secondary: colors.lightGrey
  }
}

export {dark}