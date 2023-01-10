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
  backgroundColor : '$black',
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
});

export const Idealizadores = styled('div', {
  backgroundColor: '$gray300',
});

export const Bio = styled('div', {
  backgroundColor: '$gray300',
})