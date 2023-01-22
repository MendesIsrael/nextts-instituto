import { styled } from ".."

export const SeasideContainer = styled('div',{
  h1: {
    textAlign     : 'center',
    fontSize      : '2rem',
    paddingTop    : '2rem',
    
    '@bp1': {
      fontSize    : '1.3rem',
      paddingTop  : '1rem',
    }
  },

  h2: {
    textAlign     : 'center',
    padding       : '2rem',
    fontSize      : '1.3rem',
    textDecoration: 'underline',

    '@bp1': {
      fontSize    : '1rem',
      padding     : '1rem',
    }
  },

  p: {
    textAlign     : 'justify',
    padding       : '2rem',
    textIndent    : '2.5rem',

    '@bp1': {
      fontSize    : '.8rem',
    }
  },
});

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

export const Noticias = styled('div', {
  
});

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
});

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
    textDecoration    : 'none',
    color             : '$white',
  },
});

export const BoxModalidade2 = styled('div', {
  display           : 'flex',
  gap               : '1rem',

  a:{
    textDecoration    : 'none',
    color             : '$white',
  },
});

export const Mod = styled('div', {
  width             : '18rem',
  height            : '15rem',
  borderRadius      : '.5rem',
  alignItems        : 'center',
  justifyContent    : 'center',
  textAlign         : 'center',

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
});

export const Apoio = styled('div', {

});

export const Loja = styled('div', {

});