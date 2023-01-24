import { BoxCursos, CorpoCursos, Cursos, ItemCurso, PrecoPresencialEad, PresencialEad, TitlePresencialEad, TextoPresencialEad } from '../../styles/pages/seaside/cursoPresencial'

import { CaretDoubleRight } from "phosphor-react"

import Image from 'next/legacy/image'
import mergulhadora2 from '../../assets/fotos/mergulhadora2.jpg'
import cursoCaranguejo from '../../assets/cursos/presencial2.jpg'
import cursoMangue from '../../assets/cursos/presencial1.jpg'
import cursoCavaMari from '../../assets/cursos/presencial3.jpg'
import cursoOrca from '../../assets/cursos/presencial4.jpg'
import cursoBioDiversidade from '../../assets/cursos/presencial5.jpg'
import cursoTartaruga from '../../assets/cursos/presencial6.jpg'


export default function CursoPresencial() {
  return (
    <PresencialEad>
      <TitlePresencialEad>
        <h1>CURSOS PRESENCIAIS</h1>
        <Image src={mergulhadora2} height={425} width={1345} />
      </TitlePresencialEad>

      <TextoPresencialEad>
        <h2><CaretDoubleRight size={20}/>Capacite-se profissionalmente</h2>
        <h2><CaretDoubleRight size={20}/>Aprenda em imersão</h2>
        <h2><CaretDoubleRight size={20}/>Tenha vivências marcantes</h2>
      </TextoPresencialEad>
      
      <Cursos>
        <h1>CURSOS COM VAGAS ABERTAS</h1>
        <CorpoCursos>
          <BoxCursos>
            <ItemCurso>
              <Image src={cursoCaranguejo}/>
              <h2>CURSO PRESENCIAL</h2>
              <h1>CARANGUEJO</h1>
              <p>Prof. Rafaela Coelho</p>
              <p>Coordenação Prof. Rafaela Coelho</p>
              <PrecoPresencialEad><p>R$ 50,00</p></PrecoPresencialEad>
            </ItemCurso>
            <ItemCurso>
              <Image src={cursoMangue}/>
              <h2>CURSO PRESENCIAL</h2>
              <h1>MANGUE</h1>
              <p>Prof. Rafaela Coelho</p>
              <p>Coordenação Prof. Rafaela Coelho</p>
              <PrecoPresencialEad><p>R$ 45,00</p></PrecoPresencialEad>
            </ItemCurso>
            <ItemCurso>
              <Image src={cursoCavaMari} width={304} height={202} />
              <h2>CURSO PRESENCIAL</h2>
              <h1>CAVALO MARINHO</h1>
              <p>Prof. Rafaela Coelho</p>
              <p>Coordenação Prof. Rafaela Coelho</p>
              <PrecoPresencialEad><p>R$ 100,00</p></PrecoPresencialEad>
            </ItemCurso>
          </BoxCursos>
          <BoxCursos>
            <ItemCurso>
              <Image src={cursoOrca}/>
              <h2>CURSO PRESENCIAL</h2>
              <h1>ORCAS</h1>
              <p>Prof. Rafaela Coelho</p>
              <p>Coordenação Prof. Rafaela Coelho</p>
              <PrecoPresencialEad><p>R$ 50,00</p></PrecoPresencialEad>
            </ItemCurso>
            <ItemCurso>
              <Image src={cursoBioDiversidade} width={304} height={202} />
              <h2>CURSO PRESENCIAL</h2>
              <h1>BIODIVERSIDADE</h1>
              <p>Prof. Rafaela Coelho</p>
              <p>Coordenação Prof. Rafaela Coelho</p>
              <PrecoPresencialEad><p>R$ 70,00</p></PrecoPresencialEad>
            </ItemCurso>
            <ItemCurso>
              <Image src={cursoTartaruga}/>
              <h2>CURSO PRESENCIAL</h2>
              <h1>TARTARUGAS</h1>
              <p>Prof. Rafaela Coelho</p>
              <p>Coordenação Prof. Rafaela Coelho</p>
              <PrecoPresencialEad><p>R$ 60,00</p></PrecoPresencialEad>
            </ItemCurso>
          </BoxCursos>
        </CorpoCursos>
      </Cursos>
    </PresencialEad>
  )
}