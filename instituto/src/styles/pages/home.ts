import { styled } from "..";

export const HomeContainer = styled('main', {
  h1: {
    textAlign: 'center',
    fontSize: '2rem',
    paddingTop: '2rem',

    '@bp1': {
      fontSize: '1.3rem',
      paddingTop: '1rem',
    }
  },

  h2: {
    textAlign: 'center',
    padding: '2rem',
    fontSize: '1.3rem',
    textDecoration: 'underline',

    '@bp1': {
      fontSize: '1rem',
      padding: '1rem',
    }
  },

  p: {
    textAlign: 'justify',
    padding: '2rem',
    textIndent: '2.5rem',

    '@bp1': {
      fontSize: '.8rem',
    }
  },
});
/*--------------------------------------------------------------------- */
export const Title = styled('div', {
  height: '35rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '@bp1': {
    height: '25rem',
  },

  img: {
    zIndex: '10',
  },

  video: {
    position: 'absolute',
    objectFit: 'cover',
    width: '100%',
    height: '35rem',

    '@bp1': {
      height: '25rem',
    },
  },
});

export const ImagemBox = styled('div', {
  width: '25rem',
  height: '25rem',

  '@bp1': {
    height: '20rem',
    width: '20rem',
  },
});
/*--------------------------------------------------------------------- */
export const Noticias = styled('div', {
  justifyContent: 'center',
  display: 'grid',
  height: '28rem',

  '@bp2': {
    height: '20rem',
  },
});

export const BodyNoticias = styled('div', {
  width: '30rem',

  '@bp2': {
    height: '15rem',
    width: '20rem',
  },
});
/*--------------------------------------------------------------------- */
export const QuemSomos = styled('div', {
  backgroundColor: '$gray300',
  color: '$white',

  '@bp2': {

    p: {
      padding: '1rem',
      margin: '0rem',
    }
  }
});

export const ContainerMissaoVisao = styled('div', {
  display: 'flex',
  margin: '0px, 8px',
});

export const MissaoVisao = styled('div', {
  boxShadow: '0px 0px 2px black',
  width: '50%',

  '@bp2': {
    width: '100%',

    p: {
      padding: '0.5rem',
    }
  }
});
/*--------------------------------------------------------------------- */
export const Servicos = styled('div', {
});

export const Acesso = styled('div', {
  display: 'flex',
  gap: '5rem',
  justifyContent: 'center',

  '@bp2': {
    display: 'grid',
    gap: '1rem',

    p: {
      padding: '.3rem 1rem',
    }
  },
});

export const AcessoEmpresas = styled('a', {
  width: '30rem',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  display: 'flex',
  cursor: 'pointer',
  textDecoration: 'none',
  color: '$black',

  '&:hover': {
    color: '$black',
  },

  '@bp2': {
    width: '100%',
  },
});

export const ImagemBox2 = styled('div', {
  height: '10rem',
  width: '10rem',

  '@bp1': {
    height: '5rem',
    width: '5rem',
  },
})
/*--------------------------------------------------------------------- */
export const Idealizadores = styled('div', {
  backgroundColor: '$gray300',
  color: '$white',
});

export const ContainerBio = styled('div', {
  padding: '1rem',

  '@bp2': {
    padding: '0',
  },
});

export const Bio = styled('div', {
  display: 'flex',
  alignItems: 'center',

  '@bp2': {
    display: 'grid',
    justifyContent: 'center',
  },

  p: {
    width: '450%',

    '@bp2': {
      width: '100%',
      padding: '1rem',
    },
  },
});

export const ImagemBox3 = styled('div', {

});


/*--------------------------------------------------------------------- */
export const Local = styled('div', {
  p: {
    textAlign: 'center',
    textIndent: '0',
  },

  iframe: {
    width: '100%',
  }
});
/*--------------------------------------------------------------------- */
export const Parceiros = styled('div', {
  height: '20rem',
  backgroundColor: '$gray300',
  color: '$white',
  textAlign: 'center',
});
/*--------------------------------------------------------------------- */