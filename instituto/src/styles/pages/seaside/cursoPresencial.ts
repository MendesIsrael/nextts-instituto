import { styled } from "../..";


export const PresencialEad = styled('div', {
  backgroundColor     : '$blue100',
  height              : '100%',
});

export const TitlePresencialEad = styled('div', {
  height              : '26.5625rem',
  display             : 'flex',
  justifyContent      : 'center',
  backgroundColor     : '$black',
  color               : '$white',

  h1: {
    position          : 'absolute',
    zIndex            : '10',
    margin            : '10rem auto auto -55rem',
    fontSize          : '2rem',
  },
  h2: {
    marginBottom      : '0',
    fontWeight        : '600',
  },
});

export const TextoPresencialEad = styled('div', {
  padding             : '1rem 2rem',
  color               : '$white',
  backgroundColor     : '$blue400',

  h2: {
    fontSize          : '1.6rem',
    marginBottom      : '0',
    fontWeight        : '600',
  },
});

export const Cursos = styled('div', {
  height              : '100%',
  padding             : '2rem',
  textAlign           : 'center',
});

export const CorpoCursos = styled('div', {
  height              : '100%',
  display             : 'grid',
  marginTop           : '2rem',
  justifyContent      : 'center',
  gap                 : '3rem',
});

export const BoxCursos = styled('div', {
  display             : 'flex',
  gap                 : '2rem',
});

export const ItemCurso = styled('div', {
  width               : '18rem',
  height              : '22rem',
  borderRadius        : '.5rem',
  textAlign           : 'center',
  cursor              : 'pointer',
  backgroundColor     : '$white',
  overflow            : 'hidden',
  boxShadow           : '1px 2px 8px black',
  lineHeight          : '',

  h1: {
    fontSize          : '1.8rem',
    margin            : '.5rem',
    color             : '$blue300',
    fontWeight        : 'bold',
  },
  h2: {
    fontSize          : '1.1rem',
    color             : '$blue400',
    fontWeight        : 'bold',    
  },
  p: {
    margin            : '0',
  },

  '&:hover': {
    boxShadow         : '0px 0px 20px black',
    transition        : '.3s',
  },
});

export const PrecoPresencialEad = styled('div', {
  display             : 'flex',
  alignItems          : 'center',
  justifyContent      : 'center',
  height              : '1.4rem',
  width               : '5rem',
  borderRadius        : '.4rem',
  margin              : '1rem auto 1rem 12rem',
  color               : '$white',
  backgroundColor     : '$blue400'
});