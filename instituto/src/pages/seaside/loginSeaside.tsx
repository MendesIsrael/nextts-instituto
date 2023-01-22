import { styled } from '../../styles'; 

import Image from 'next/legacy/image'
import logoVigor from '../../assets/logos/logo-branca-seaside.png' 


const BodyLoginSeaside = styled('div', {
  height          : '100vh',
  width           : '100vw',
  backgroundImage : 'linear-gradient($blue100, $black)',
  display         : 'flex',
  justifyContent  : 'center',
  boxSizing       : 'border-box',
  border          : 'none',
});

const LoginContainerSeaside = styled('div', {
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
    backgroundColor:'$blue400',
    border        : 'none',    
    
    '&:hover': {
      color       : '$black',
      backgroundColor:'$blue300',
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


export default function LoginSeaside() {
  return (
    <BodyLoginSeaside>
      <LoginContainerSeaside>
        <Image src={logoVigor} height={128} width={128}/>
        <form action="">
          <Label htmlFor="email">E-mail</Label>
          <Input type="email" name='email' placeholder='Digite o seu email' autoComplete='on'/>
          <Label htmlFor="password">Senha</Label>
          <Input type="password" name='password' placeholder='Digite a sua senha'/>
          <A href="#">Esqueceu a senha?</A>
          <Input type="submit" value="LOGIN" className='logar' />
        </form>
      </LoginContainerSeaside>
    </BodyLoginSeaside>
  )
}