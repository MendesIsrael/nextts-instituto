import { url } from "inspector";
import { styled } from ".."
import mergulhadora from '../../assets/fotos/mergulhadora.jpg'
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
  
})

export const BoxModalidade = styled('div', {
  display           : 'flex',
  justifyContent    : 'center',
  alignItems        : 'center',
  gap               : '1rem',
})

export const Mod1 = styled('div', {
  backgroundColor   : '$green100',
  height            : '8rem',
  width             : '13rem',
});

export const Mod2 = styled('div', {
  backgroundColor   : '$green400',
  height            : '8rem',
  width             : '13rem',
});