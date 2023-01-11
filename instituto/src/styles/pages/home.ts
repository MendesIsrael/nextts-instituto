import { styled } from "..";

export const HomeContainer = styled('main', {
  h1: {
    textAlign: 'center',
  },

  h2: {
    textAlign: 'center',
  },

  p: {
    textAlign : 'justify',
    padding   : '2rem',
    textIndent: '2.5rem',
  }
});

export const Title = styled('main', {
  backgroundColor : '$green400',
  display         : 'flex',
  justifyContent  : 'center',

  img: {
    objectFit: 'cover',
  }
});

export const QuemSomos = styled('div', {
  backgroundColor : '$gray300',
  color           : '$white',
  paddingTop      : '2rem',
});

export const ContainerMissaoVisao = styled('div', {
  display : 'flex',
  margin  : '0px, 8px',
});

export const MissaoVisao = styled('div', {
  boxShadow : '0px 0px 2px black',
  width     : '50%',
});

export const Servicos = styled('div', {
  
});

export const Acesso = styled('div', {
  display       : 'flex',
  gap           : '5rem',
  justifyContent: 'center',
});

export const AcessoEmpresas = styled('a', {
  width           : '30rem',
  justifyContent  : 'center',
  alignItems      : 'center',
  flexDirection   : 'column',
  display         : 'flex',
  cursor          : 'pointer',
});

export const Idealizadores = styled('div', {
  backgroundColor : '$gray300',
  color           : '$white',
});

export const ContainerBio = styled('div', {
  padding: '1rem',
});

export const Bio = styled('div', {
  display     : 'flex',
  alignItems  : 'center',

  p: {
    width: '450%',
  },

});

export const Local = styled('div', {
  iframe: {
    width: '100%',
  }
});

export const Parceiros = styled('div', {
  height          : '20rem',
  backgroundColor : '$gray300',
  color           : '$white',
  textAlign       : 'center',
});