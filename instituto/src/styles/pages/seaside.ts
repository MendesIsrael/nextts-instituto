import { styled } from ".."

export const SeasideContainer = styled('div',{
  h1: {
    fontSize      : '1rem',
  },
});

export const TitleSeaside = styled('div', {
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
})