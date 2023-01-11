import { styled } from "..";

export const Menu = styled('div', {
  position        : 'absolute',
  width           : '100%',
  height          : '3rem',
  display         : 'flex',
  alignItems      : 'center',
  backgroundColor : '$transparent',
  justifyContent  : 'center',
  zIndex          : '1',

  li: {
    display       : 'flex',
  },

  a: {
    textDecoration: 'none',
    textTransform : 'uppercase',
    color         : '$white',
    margin        : '0 7px',
    padding       : '5px',
    borderRadius  : '5px',

    '&:hover': {
      backgroundColor : '$white',
      color           : '$black',
      fontWeight      : '600',
    },
  }
});