import { styled } from '../styles'; 

import Image from 'next/legacy/image'
import logoVigor from '../../assets/logos/logo-vigor-preto.png' 


const BodyLoginVigor = styled('div', {
  height          : '100vh',
  width           : '100vw',
  backgroundImage : 'linear-gradient(green, black)',
  display         : 'flex',
  justifyContent  : 'center',
  boxSizing       : 'border-box',
  border          : 'none',
});

const LoginContainerVigor = styled('div', {
  height          : '28rem',
  width           : '21.875rem',
  padding         : '1.25rem 1.875rem',
  marginTop       : '15vh',
  borderRadius    : '.625rem',
  textAlign       : 'center',
  backgroundColor : '$white',
  boxSizing       : 'border-box',
  border          : 'none',
});

const Label = styled('label', {
  fontWeight      : 'bold',
  display         : 'block',
  width           : '100%',
  textAlign       : 'left',
});

const Input = styled('input', {
  display         : 'block',
  width           : '100%',
  textAlign       : 'left',
  border          : 'none',
  borderBottom    : '.125rem solid black',
  padding         : '.625rem',
  fontSize        : '1rem',
  marginBottom    : '1.25rem',
  outline         : 'none',

  '&.logar': {
    height        : '2.5rem',
    textAlign     : 'center',
    fontWeight    : 'bold',
    cursor        : 'pointer',
    borderRadius  : '1.25rem',
    marginTop     : '1.875rem',
    color         : '$white',
    backgroundColor:'$green400',
    border        : 'none',    
    
    '&:hover': {
      color       : '$black',
      backgroundColor:'$green300',
      transition  : '.4s',
    }
  },

  '&:focus': {
    borderBottom  : '.125rem solid blueviolet'
  }
})

const A = styled('a', {
  textAlign       : 'right',
  display         : 'block',
  fontSize        : '.8rem',
})


export default function LoginVigor() {
  return (
    <BodyLoginVigor>
      <LoginContainerVigor>
        <Image src={logoVigor} height={128} width={152}/>
        <form action="">
          <Label htmlFor="email">E-mail</Label>
          <Input type="email" name='email' placeholder='Digite o seu email' autoComplete='on'/>
          <Label htmlFor="password">Senha</Label>
          <Input type="password" name='password' placeholder='Digite a sua senha'/>
          <A href="#">Esqueceu a senha?</A>
          <Input type="submit" value="LOGIN" className='logar' />
        </form>
      </LoginContainerVigor>
    </BodyLoginVigor>
  )
}