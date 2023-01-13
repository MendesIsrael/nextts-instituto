import { styled } from "..";

/*--------------------------------------------------------------------- */

export const VigorContainer = styled('main', {
  backgroundColor  : '$black',
  color            : '$white',
  textAlign        : 'center',
    
  p: {
    textAlign      : 'justify',
    textIndent     : '2.5rem',
  }
});

export const DivBoxGreen = styled('div', {
  backgroundColor  : '$green500',
});

/*--------------------------------------------------------------------- */

export const TitleVigor = styled('div', {
  height           :'35rem',
  display          : 'flex',
  justifyContent   : 'center',
  alignItems       : 'center',
  

  img: {
    zIndex         : '-10',
  },

  video: {
    position       : 'absolute',
    objectFit      : 'cover',
    width          : '100%',
    height         : '35rem',
    zIndex         : '-100',
  },
});

/*--------------------------------------------------------------------- */

export const Modalidades = styled('div', {
  display          : 'flex',
  gap              : '1rem',
  justifyContent   : 'center',

  '@bp1': {
    display        :'block',
  }
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
    marginTop      : '-4px',
  },
  p:{
    padding        : '10px'
  }
});

/*--------------------------------------------------------------------- */

export const Pacotes = styled('div', {
  height           : '55rem',
  color            : '$green100',
  margin           : '2rem 15%',
});

export const Planos = styled('div', {
  display          : 'flex',
  marginTop        : '2rem',
  
  p: {
    textIndent     : '0',
    fontSize       : '.9rem',
    padding        : '0.5rem',
    borderBottom   : '1px solid green',
  }

});

export const ItensPlanos = styled('div', {
  width            : '60rem',
});

export const PrecoPlanos = styled('div', {
  width            : '10rem',
  boxShadow        : '0px 0px 3px white',
  borderRadius     : '10px',
  margin           : '0 0.2rem',
  

  p: {
    textAlign      : 'center',
  }
});

export const TitlePlanos = styled('div', {
  fontSize         : '1rem',
  height           : '3.8rem',
  display          : 'flex',
  alignItems       : 'center',
  justifyContent   : 'center',
  color            : '$white',
  fontWeight       : '600',

  p: {
    borderBottom   : '3px solid gray',
  }
});

/*--------------------------------------------------------------------- */

export const Adicionais = styled('div', {
 marginTop         : '5rem',
});

export const BodyAdicionais = styled('div', {
  display          : 'flex',
  gap              : '2rem',
  marginTop        : '3rem',
});

export const ItensAdicionais = styled('div', {
  height           : '23rem',
  width            : '15rem',
  borderRadius     : '30px',
  padding          : '1rem',

  p: {
    fontSize       : '.8rem',
    color          : '$white',
    
  },

  '&:hover': {
    boxShadow      : '0px 0px 10px green',
  }
});
export const PreçoAdicionais = styled('div', {
  p: {
    fontSize       : '1.3rem',
    textIndent     : '0',
    textAlign      : 'center',
  }
});