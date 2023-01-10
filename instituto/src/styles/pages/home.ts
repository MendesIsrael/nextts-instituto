import { styled } from "..";

export const HomeContainer = styled('main', {
  h1: {
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
