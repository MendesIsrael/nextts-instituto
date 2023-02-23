import { styled } from ".."

export const SeasideContainer = styled('div',{
  h1: {
    textAlign       : 'center',
    fontSize        : '2rem',
    paddingTop      : '2rem',
    
    '@bp1': {
      fontSize      : '1.3rem',
      paddingTop    : '1rem',
    }
  },

  h2: {
    textAlign       : 'center',
    padding         : '2rem',
    fontSize        : '1.3rem',
    textDecoration  : 'underline',

    '@bp1': {
      fontSize      : '1rem',
      padding       : '1rem',
    }
  },

  p: {
    textAlign       : 'justify',
    padding         : '2rem',
    textIndent      : '2.5rem',

    '@bp1': {
      fontSize      : '.8rem',
    }
  },
});

/*-------------------------------------------------------------------------------------------------------------------*/
export const TitleSeaside = styled('div', {
  height            : '35rem',
  display           : 'flex',
  justifyContent    : 'center',
  alignItems        : 'center',
  
  img: {
    zIndex          : '-10',
  },

  video: {
    position        : 'absolute',
    objectFit       : 'cover',
    width           : '100%',
    height          : '35rem',
    zIndex          : '-100',
  },
});

/*-------------------------------------------------------------------------------------------------------------------*/
export const TextExplicativo = styled('div', {
  height            : '26.5625rem',
  display           : 'flex',
  justifyContent    : 'center',
  backgroundColor   : '$black',
  color             : '$white',

  h1: {
    position        : 'absolute',
    zIndex          : '10',
    margin          : '8rem auto auto -55rem',
  },
  p: {
    position        : 'absolute',
    zIndex          : '10',
    margin          : '11rem auto auto -55rem',
    textIndent      : '0',
    textAlign       : 'center',
  },

  '@bp2': {
    height          : 'auto',

    h1: {
      margin          : '2rem auto auto -22rem',
      fontSize        : '1rem',
    },

    p: {
      margin          : '4rem auto auto -22rem',
      fontSize        : '.6rem',
    },
  }
});

/*-------------------------------------------------------------------------------------------------------------------*/
export const Modalidades = styled('div', {
  backgroundColor   : '$black',
  color             : '$white',
});

export const BodyModalidade = styled('div', {
  display           : 'grid',
  gap               : '1rem',
  justifyContent    : 'center',
  alignItems        : 'center',
  padding           : '1rem',
});

export const BoxModalidade = styled('div', {
  display           : 'flex',
  gap               : '1rem',

  a:{
    textDecoration  : 'none',
    color           : '$white',
  },
});

export const BoxModalidade2 = styled('div', {
  display           : 'flex',
  gap               : '1rem',

  a:{
    textDecoration  : 'none',
    color           : '$white',
  },
});

export const Mod = styled('a', {
  width             : '18rem',
  height            : '15rem',
  borderRadius      : '.5rem',
  alignItems        : 'center',
  justifyContent    : 'center',
  textAlign         : 'center',
  cursor            : 'pointer',

  svg: {
    margin          : '2rem 0 3.5rem 0',
  },

  '&:hover' : {
    color           : '$black',
    backgroundColor : '$white',
    transition      : '.6s',
  },

  variants: {
    color: {
      blue1: {
        backgroundColor: '$blue100',
      },
      blue2: {
        backgroundColor: '$blue200',
      },
      blue3: {
        backgroundColor: '$blue300',
      },
      blue4: {
        backgroundColor: '$blue400',
      },
      blue5: {
        backgroundColor: '$blue500',
      },
    },
  },

  '@bp2': {
    width           : '11rem',
    height          : '11rem',

    svg: {
      margin          : '.9rem 0 2rem 0',
    },
  },
});

/*-------------------------------------------------------------------------------------------------------------------*/
export const Certificado = styled('div', {
  display           : 'grid',
  justifyContent    : 'center',
  gap               : '2rem',
  color             : '$white',
  backgroundColor   : '$blue400',
  objectFit         : 'cover',
});

/*-------------------------------------------------------------------------------------------------------------------*/
export const Loja = styled('div', {

});

/*-------------------------------------------------------------------------------------------------------------------*/
export const Apoio = styled('div', {

});