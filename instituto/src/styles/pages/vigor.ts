import { styled } from "..";

/*--------------------------------------------------------------------- */

export const VigorContainer = styled('main', {
  backgroundColor  : '$black',
  color            : '$white',
  textAlign        : 'center',
  
  h1: {
    fontSize       : '2rem',
    padding        : '2rem',

    '@bp1': {
      fontSize     : '1.3rem',
      padding      : '1rem',
    }
  },

  h2: {
    fontSize       : '1.8rem',

    '@bp1': {
      fontSize     : '1rem',
    }
  },

  p: {
    textAlign      : 'justify',
    textIndent     : '2.5rem',

    '@bp1': {
      fontSize     : '0.8rem',
    }
  }
});

export const DivBoxGreen = styled('div', {
  backgroundColor  : '$green500',
  paddingBottom    : '3rem',
});

/*--------------------------------------------------------------------- */

export const TitleVigor = styled('div', {
  height           : '35rem',
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
export const TextMotivacional = styled('div', {
  height           : '22rem',
  display          : 'flex',
  justifyContent   : 'center',
  alignItems       : 'center',

  p: {
    fontSize       : '2.5rem',
    color          :'$green100'
  }
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
  borderRadius     : '.5rem',
  overflow         : 'hidden',

  h3: {
    backgroundColor: '$black',
    color          : '$green200',
    marginTop      : '-.42rem',
    fontSize       : '1rem',
    padding        : '.68rem',
  },

  p:{
    fontSize       : '.9rem',
    padding        : '.7rem'
  }
});

/*--------------------------------------------------------------------- */

export const Pacotes = styled('div', {
  height           : '100%',
  color            : '$green100',
});

export const Planos = styled('div', {
  display          : 'flex',
  justifyContent   : 'center',
  
  p: {
    textIndent     : '0',
    textAlign      : 'initial',
    fontSize       : '.9rem',
    borderBottom   : '1px solid green',
    margin         : '0',
  }
});

export const ItensPlanos = styled('div', {
  width            : '35rem',
});

export const PrecoPlanos = styled('div', {
  width            : '8rem',
  boxShadow        : '0px 0px 3px white',
  borderRadius     : '10px',
  margin           : '0 0.2rem',
  
  p: {
    textAlign      : 'center',
    padding        : '0rem',
  }
});

export const TitlePlanos = styled('div', {
  fontSize         : '1rem',
  height           : '3.3rem',
  display          : 'flex',
  alignItems       : 'center',
  justifyContent   : 'center',
  color            : '$white',

  p: {
    borderBottom   : '3px solid gray',
  }
});

/*--------------------------------------------------------------------- */

export const Adicionais = styled('div', {
 margin         : '3rem 0 3rem 0',
});

export const BodyAdicionais = styled('div', {
  display          : 'flex',
  gap              : '3rem',
  justifyContent   : 'center',

  h2: {
    fontSize       : '1.8rem',
  },

});

export const ItensAdicionais = styled('div', {
  height           : '24rem',
  width            : '14rem',
  borderRadius     : '30px',
  padding          : '1rem',
  boxSizing        : 'content-box',
  boxShadow      : '0px 0px 2px white',

  p: {
    fontSize       : '.8rem',
    color          : '$white',
    marginBottom   : '1.5rem',
  },

  '&:hover': {
    boxShadow      : '0px 0px 10px green',
    transition     : '.3s',
  }
});
export const PreçoAdicionais = styled('div', {
  p: {
    fontSize       : '1.5rem',
    textIndent     : '0',
    textAlign      : 'end',
    marginTop      : '.8rem',
  }
});
/*--------------------------------------------------------------------- */

export const ImgAcademia = styled('div', {
  backgroundColor  : '$green500',
});
export const BodyAcademia = styled('div', {
  
});