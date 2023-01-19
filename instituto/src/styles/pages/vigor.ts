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

  '@bp2': {
    height         : '15rem',
  },

  p: {
    fontSize       : '2.5rem',
    color          :'$green100',

    '@bp2': {
      fontSize     : '1.3rem',
      textAlign    : 'center',
      textIndent   : '0',
    }
  }
});
/*--------------------------------------------------------------------- */
export const Modalidades = styled('div', {
  display          : 'flex',
  gap              : '1rem',
  justifyContent   : 'center',

  '@bp2': {
    display        :'grid',
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

  '@bp1': {
    width          : '90%',
    height         : '26rem',
    margin         : '0 1.3rem',
  },

  h3: {
    backgroundColor: '$black',
    color          : '$green200',
    marginTop      : '-.43rem',
    fontSize       : '1rem',
    padding        : '.68rem',

    '@bp1': {
      fontSize     : '.9rem',
      padding      : '.3rem',
    },
  },

  p:{
    fontSize       : '.9rem',
    padding        : '.7rem',

    '@bp1': {
      fontSize     : '.8rem',
      padding      : '.3rem',
    },
  }
});
/*--------------------------------------------------------------------- */
export const MoreInformation = styled('div', {

});


/*--------------------------------------------------------------------- */

export const Pacotes = styled('div', {
  height           : '100%',
  color            : '$green100',

  '@bp2': {
    margin         : '0 .5rem',
  },
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

  p: {
    '@bp2': {
      fontSize     : '.75rem',
    },
  }
});

export const PrecoPlanos = styled('div', {
  width            : '6rem',
  boxShadow        : '0px 0px 3px white',
  borderRadius     : '10px',
  margin           : '0 0.2rem',

  '@bp1': {
    width          : '9rem',
  },
  
  '@bp2': {
    width          : '10rem',
  },

  p: {
    textAlign      : 'center',
    padding        : '0rem',

    '@bp2': {
      fontSize     : '.75rem',
    },
  }
});

export const TitlePlanos = styled('div', {
  fontSize         : '1rem',
  height           : '4rem',
  display          : 'flex',
  alignItems       : 'center',
  justifyContent   : 'center',
  color            : '$white',

  '@bp2': {
    fontSize       : '.6rem',
  },

  p: {
    borderBottom   : '3px solid gray',

    '@bp1': {
      fontSize     : '.8rem',
    },
  }
});

/*--------------------------------------------------------------------- */

export const Adicionais = styled('div', {
 margin            : '3rem 0 3rem 0',
});

export const BodyAdicionais = styled('div', {
  display          : 'flex',
  gap              : '3rem',
  justifyContent   : 'center',

  '@bp2': {
    display        : 'grid',
    gap            : '1rem',
  },

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
  boxShadow        : '0px 0px 2px white',

  '@bp1': {
    height         : '17rem',
    width          : '20rem',
  },

  p: {
    fontSize       : '.8rem',
    color          : '$white',
    marginBottom   : '1.5rem',

    '@bp1': {
      fontSize     : '.75rem',
      marginBottom : '1rem',
    },
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
  backgroundColor : '$green500',
  justifyContent  : 'center',
  display         : 'grid',
  height          : '28rem',
  padding         : '2rem',

  '@bp2': {
    height        : '20rem',
  },
});