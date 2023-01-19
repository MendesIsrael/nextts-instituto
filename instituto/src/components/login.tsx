import { styled } from "../styles";

export const Login = styled('div', {
  position       : 'absolute',
  margin         : '-25rem 1rem auto 90%',
  height         : '2rem',
  width          : '7rem',
  textDecoration : 'none',
  fontWeight     : 'bolder',
  borderRadius   : '.5rem',
  textAlign      : 'center',
  fontSize       : '1rem',
  paddingTop     : '.2rem',
  boxShadow      : '2px 2px 5px rgba(0, 0, 0, 0.301)',
  color          : '$white',

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