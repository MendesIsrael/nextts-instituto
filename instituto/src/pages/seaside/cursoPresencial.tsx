import { styled } from "../../styles"

import Image from 'next/legacy/image'
import mergulhadora2 from '../../assets/fotos/mergulhadora2.jpg'
import cursoCaranguejo from '../../assets/cursos/presencial2.jpg'
import cursoMangue from '../../assets/cursos/presencial1.jpg'
import cursoCavaloMarinho from '../../assets/cursos/presencial3.jpg'
import cursoOrca from '../../assets/cursos/presencial4.jpg'
import cursoBioDiversidade from '../../assets/cursos/presencial5.jpg'
import cursoTartaruga from '../../assets/cursos/presencial6.jpg'
/*--------------------------------------------------------------------------------------------*/


const Body = styled('div', {
  backgroundColor     : '$blue100',
  height              : '100%',
});

const Title = styled('div', {
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
});

const Txt = styled('div', {
  padding             : '1rem 2rem',
  font                : '1rem',
  textDecoration      : 'underline',
  color               : '$blue100',
  backgroundColor     : '$blue400',
});

const Cursos = styled('div', {
  height              : '100%',
  display             : 'flex',
  justifyContent      : 'center',
  padding             : '2rem',
});

const BodyCursos = styled('div', {
  height              : '100%',
  display             : 'flex',
  justifyContent      : 'center',
});

const ItemCurso = styled('div', {

});
/*--------------------------------------------------------------------------------------------*/


export default function CursoPresencial() {
  return (
    <Body>

      <Title>
        <h1>CURSOS PRESENCIAIS</h1>
        <Image src={mergulhadora2} height={425} width={1345} />
      </Title>

      <Txt>
        <h2>Capacite-se profissionalmente</h2>
        <h2>Aprenda em imersão</h2>
        <h2>Tenha vivências marcantes</h2>
      </Txt>
      
      <Cursos>
        <h1>CURSOS COM VAGAS ABERTAS</h1>
        <BodyCursos>
          <ItemCurso>
            <Image src={cursoCaranguejo}/>
            <h2>CURSO PRESENCIAL</h2>
            <h1>CARANGUEJO</h1>
            <p>Prof. Rafaela Coelho</p>
            <p>Coordenação Prof. Rafaela Coelho</p>
          </ItemCurso>
        </BodyCursos>
      </Cursos>
    </Body>
  )
}