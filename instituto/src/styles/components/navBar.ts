import { styled } from "..";

export const Menu = styled('div', {
  position            : 'absolute',
  width               : '100%',
  height              : '3rem',
  display             : 'flex',
  alignItems          : 'center',
  backgroundColor     : '$transparent',
  zIndex              : '1',
  justifyContent      : 'space-between',
});

export const NavPages = styled('div', {
  justifyContent      : 'center',
  display             : 'flex',
  position            : 'relative',
  left                : '42%',
  

  li: {
    display           : 'flex',
  },

  a: {
    textDecoration    : 'none',
    textTransform     : 'uppercase',
    color             : '$white',
    margin            : '0 7px',
    padding           : '5px',
    borderRadius      : '5px',

    '&:hover': {
      backgroundColor : '$white',
      color           : '$black',
      fontWeight      : '600',
    },
  }
});

export const Contato = styled('div', {
  position            : 'relative',
  marginRight         : '1rem',
  
  a: {
    margin            : '0 0.5px',
    padding           : '8px',
  },

  'a:hover': {
    backgroundColor   : '$black',
    transition        : '1s',
  }
});

