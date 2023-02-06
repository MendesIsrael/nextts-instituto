import { BoxCursos, CorpoCursos, Cursos, ItemCurso, PrecoPresencialEad, PresencialEad, TitlePresencialEad, TextoPresencialEad } from '../../styles/pages/seaside/cursoPresencial'

import { CaretDoubleRight } from "phosphor-react"

import Image from 'next/legacy/image'
import instagram from '../../assets/contatos/instagram.png'
import mergulhadora2 from '../../assets/fotos/mergulhadora2.jpg'
import cursoPoluicao from '../../assets/cursos/ead1.jpg'
import cursoCorais from '../../assets/cursos/ead2.jpg'
import cursoAguaViva from '../../assets/cursos/ead3.jpg'
import cursoLeaoMarinho from '../../assets/cursos/ead4.jpg'
import cursoPraias from '../../assets/cursos/ead5.jpg'
import cursoPinguins from '../../assets/cursos/ead6.jpg'
import { Insta } from '../../styles/components/navBar'


/*import { Insta } from "../../styles/components/navBar";
import instagram from '../../assets/contatos/instagram.png'
        <Insta>
          <a href="https://www.instagram.com/institutomendesa/" target="_blank">
            <Image src={instagram} width={17} height={17} />
          </a>
        </Insta>*/

export default function CursoEad() {
  return (
    <PresencialEad>

      <TitlePresencialEad>
        <h1>CURSOS EAD</h1>
        <Image src={mergulhadora2} height={425} width={1345} />
        <Insta>
          <a href="https://www.instagram.com/institutomendesa/" target="_blank">
            <Image src={instagram} width={17} height={17} />
          </a>
        </Insta>
      </TitlePresencialEad>

      <TextoPresencialEad>
        <h2><CaretDoubleRight size={20}/>Aprenda de forma remota</h2>
        <h2><CaretDoubleRight size={20}/>Qualifique-se profissionalmente</h2>
      </TextoPresencialEad>
      
      <Cursos>
        <h1>NOSSOS CURSOS ONLINE</h1>
        <CorpoCursos>
          <BoxCursos>
            <ItemCurso>
              <Image src={cursoPinguins}/>
              <h2>CURSO EAD</h2>
              <h1>PINGUINS</h1>
              <p>Prof. Rafaela Coelho</p>
              <p>Coordenação Prof. Rafaela Coelho</p>
              <PrecoPresencialEad><p>R$ 50,00</p></PrecoPresencialEad>
            </ItemCurso>
            <ItemCurso>
              <Image src={cursoPraias}/>
              <h2>CURSO EAD</h2>
              <h1>PRAIAS ARENOSAS</h1>
              <p>Prof. Rafaela Coelho</p>
              <p>Coordenação Prof. Rafaela Coelho</p>
              <PrecoPresencialEad><p>R$ 45,00</p></PrecoPresencialEad>
            </ItemCurso>
            <ItemCurso>
              <Image src={cursoLeaoMarinho} width={304} height={202} />
              <h2>CURSO EAD</h2>
              <h1>LEÃO MARINHO</h1>
              <p>Prof. Rafaela Coelho</p>
              <p>Coordenação Prof. Rafaela Coelho</p>
              <PrecoPresencialEad><p>R$ 100,00</p></PrecoPresencialEad>
            </ItemCurso>
          </BoxCursos>
          <BoxCursos>
            <ItemCurso>
              <Image src={cursoPoluicao}/>
              <h2>CURSO EAD</h2>
              <h1>POLUIÇÃO MARINHA</h1>
              <p>Prof. Rafaela Coelho</p>
              <p>Coordenação Prof. Rafaela Coelho</p>
              <PrecoPresencialEad><p>R$ 50,00</p></PrecoPresencialEad>
            </ItemCurso>
            <ItemCurso>
              <Image src={cursoCorais} width={304} height={202} />
              <h2>CURSO EAD</h2>
              <h1>CORAIS</h1>
              <p>Prof. Rafaela Coelho</p>
              <p>Coordenação Prof. Rafaela Coelho</p>
              <PrecoPresencialEad><p>R$ 70,00</p></PrecoPresencialEad>
            </ItemCurso>
            <ItemCurso>
              <Image src={cursoAguaViva}/>
              <h2>CURSO EAD</h2>
              <h1>ÁGUAS-VIVAS</h1>
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