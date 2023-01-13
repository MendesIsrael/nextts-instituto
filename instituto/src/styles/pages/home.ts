import { styled } from "..";

export const HomeContainer = styled('main', {
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
/*--------------------------------------------------------------------- */
export const Title = styled('div', {
    height        : '35rem',
    display       : 'flex',
    justifyContent: 'center',
    alignItems    : 'center',

    '@bp1': {
      height      : '25rem',
    },

  img: {
    zIndex        : '10',
  },

  video: {
    position      : 'absolute',
    objectFit     : 'cover',
    width         : '100%',
    height        : '35rem',

    '@bp1': {
      height      : '25rem',
    },
  },
});
/*--------------------------------------------------------------------- */
export const Noticias = styled('div', {
  justifyContent  :'center',
  display         :'grid',
});

export const BodyNoticias = styled('div', {
  width           :'30rem',
});
/*--------------------------------------------------------------------- */
export const QuemSomos = styled('div', {
  backgroundColor : '$gray300',
  color           : '$white',
});

export const ContainerMissaoVisao = styled('div', {
  display         : 'flex',
  margin          : '0px, 8px',

  '@bp1': {
    display       : 'block',
    margin        : '0px',
  }
});

export const MissaoVisao = styled('div', {
  boxShadow       : '0px 0px 2px black',
  width           : '50%',

  '@bp1': {
    width         : '100%',
  }
});
/*--------------------------------------------------------------------- */
export const Servicos = styled('div', {
});

export const Acesso = styled('div', {
  display         : 'flex',
  gap             : '5rem',
  justifyContent  : 'center',

  '@bp1': {
    display       : 'block',
  },
});

export const AcessoEmpresas = styled('a', {
  width           : '30rem',
  justifyContent  : 'center',
  alignItems      : 'center',
  flexDirection   : 'column',
  display         : 'flex',
  cursor          : 'pointer',
  textDecoration  :'none',
  color           :'$black',

  '&:hover': {
    color         :'$black',
  },

  '@bp1': {
    width         : '100%',
  },
});
/*--------------------------------------------------------------------- */
export const Idealizadores = styled('div', {
  backgroundColor : '$gray300',
  color           : '$white',
});

export const ContainerBio = styled('div', {
  padding         : '1rem',

  '@bp1': {
    padding       : '0',
  },
});

export const Bio = styled('div', {
  display         : 'flex',
  alignItems      : 'center',

  p: {
    width         : '450%',
  },

  a: {
    '@bp1': {
      display     : 'none',
    },
  },

});
/*--------------------------------------------------------------------- */
export const Local = styled('div', {
  p: {
    textAlign     :'center',
    textIndent    : '0',
  },
  
  iframe: {
    width         : '100%',
  }
});
/*--------------------------------------------------------------------- */
export const Parceiros = styled('div', {
  height          : '20rem',
  backgroundColor : '$gray300',
  color           : '$white',
  textAlign       : 'center',
});
/*--------------------------------------------------------------------- */