import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  media: {
    bp1: '(max-width: 400px)',
    bp2: '(max-width: 700px)',
  },
  theme: {
    colors: {
      white       : '#fff',
      black       : '#000',
      transparent : 'rgba(0, 0, 0, 0.452)',
      gray300     : 'rgb(53, 51, 51)',
      green100    : '#5bdf64',
      green200    : '#19da25',
      green300    : '#12a61c',
      green400    : '#0a590f',
      green500    : '#255928',
      blue100     : '#42cdd5',
      blue200     : '#03c4cd',
      blue300     : '#029199',
      blue400     : '#01494d',
      blue500     : '#184a4d',
    }
  }
})