import { styled } from "..";

export const VigorContainer = styled('main', {
  backgroundColor : '$black',
  color           : '$white',
  textAlign       : 'center',
    
  p: {
    textAlign     : 'justify',
    textIndent    : '2.5rem',
  }
});

export const TitleVigor = styled('div', {
  backgroundColor : '$transparent',
  display         : 'flex',
  justifyContent  : 'center',
});

export const DivBoxGreen = styled('div', {
  backgroundColor  : '$green500',
});

export const Modalidades = styled('div', {
  display          : 'flex',
  gap              : '1rem',
  justifyContent  : 'center',
});

export const Atividades = styled('div', {
  width            : '18rem',
  height           : '30rem',
  boxShadow        : '2px 2px 8px black',
  backgroundColor  : '$white',
  color            : '$black',
  borderRadius     : '8px',
  overflow         : 'hidden',

  h1: {
    backgroundColor: '$black',
    color          : '$green200',
    marginTop: '-4px',
  },
  p:{
    padding        : '10px'
  }
});
