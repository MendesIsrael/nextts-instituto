import { styled } from "../styles";

export const Login = styled('div', {
  display        : 'flex',
  position       : 'absolute',
  margin         : '-27rem 1rem auto 90%',
  height         : '2rem',
  width          : '7rem',
  textDecoration : 'none',
  fontWeight     : 'bolder',
  borderRadius   : '.5rem',
  justifyContent : 'center',
  alignItems     : 'center',
  fontSize       : '1rem',
  paddingTop     : '.1rem',
  gap            : '.3rem',
  boxShadow      : '2px 2px 5px rgba(0, 0, 0, 0.301)',
  color          : '$white',
  cursor         : 'pointer',

  '@bp2': {
    margin       : '-27rem 5rem auto 90%',
  },

  variants: {
    color: {
      green: {
        backgroundColor: '$green500',
        '&:hover' : {
          backgroundColor: '$green200',
        },
      },
      blue: {
        backgroundColor: '$blue500',
        '&:hover' : {
          backgroundColor: '$blue200',
        },
      },
    },
  },

  '&:hover' : {
    color          : '$black',
  }
})