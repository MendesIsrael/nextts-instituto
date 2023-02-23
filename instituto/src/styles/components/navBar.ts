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

  '@bp2': {
    left              : '1%',
  },
  

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

  '@bp2': {
    marginRight       : '0',
  },
  
  a: {
    margin            : '0 0.5px',
    padding           : '8px',
    borderRadius      : '1rem',
  },

  'a:hover': {
    backgroundColor   : '$black',
    transition        : '1s',
  }
});

export const Insta = styled('div', {
  position            : 'absolute',
  margin              : '-31.9rem -67.3rem auto auto',
  zIndex              : '1',
  display             : 'flex',
  justifyContent      : 'center',
  alignItems          : 'center',
  borderRadius        : '1rem',
  height              : '2rem',
  width               : '2rem',
  
  '&:hover': {
    backgroundColor   : '$black',
    transition        : '1s',
  },

  '@bp2': {
    margin            : '-31.9rem -22.2rem auto auto',
  }
}); 
