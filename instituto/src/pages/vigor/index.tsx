import { TitleVigor, VigorContainer, DivBoxGreen, Modalidades, Atividades, Pacotes, Planos, ItensPlanos, PrecoPlanos, TitlePlanos } from "../../styles/pages/vigor";

import Image from 'next/legacy/image'
import logoVigor from '../../assets/logos/logo-vigor.png'
import pilates from '../../assets/modalidades/pilates.jpg'
import hidroGinastica from '../../assets/modalidades/hidroGinastica.jpg'
import funcional from '../../assets/modalidades/funcional.jpg'
import lutas from '../../assets/modalidades/lutas.jpg'



export default function Vigor() {
  return (
    <>
      <TitleVigor>
      
        <Image src={logoVigor} width={750} height={560} />
      </TitleVigor>
      <VigorContainer>
        <p>A sua melhor opção na hora de levar uma vida mais saudável</p>
        <DivBoxGreen>
          <h1>CONHEÇA NOSSAS MODALIDADES</h1>
          <Modalidades>
            <Atividades>
              <Image src={pilates}/>
              <h1>PILATES</h1>
              <p>Buscamos sempre desenvolver o seu potencial máximo - melhorando o condicionamento físico geral, a consciência corporal e a coordenação motora, prevenindo e reduzindo os ricos de lesões e o alívio de dores crônicas.</p>
            </Atividades>
            <Atividades>
            <Image src={hidroGinastica}/>
              <h1>HIDROGINÁSTICA</h1>
              <p>Buscamos sempre desenvolver o seu potencial máximo - melhorando o condicionamento físico geral, a consciência corporal e a coordenação motora, prevenindo e reduzindo os ricos de lesões e o alívio de dores crônicas.</p>
            </Atividades>
            <Atividades>
            <Image src={funcional}/>
              <h1>FUNCIONAL</h1>
              <p>Buscamos sempre desenvolver o seu potencial máximo - melhorando o condicionamento físico geral, a consciência corporal e a coordenação motora, prevenindo e reduzindo os ricos de lesões e o alívio de dores crônicas.</p>
            </Atividades>
            <Atividades>
            <Image src={lutas}/>
              <h1>LUTAS</h1>
              <p>Buscamos sempre desenvolver o seu potencial máximo - melhorando o condicionamento físico geral, a consciência corporal e a coordenação motora, prevenindo e reduzindo os ricos de lesões e o alívio de dores crônicas.</p>
            </Atividades>
          </Modalidades>
        </DivBoxGreen>

        <Pacotes>
          <h1>PLANOS</h1>
          <Planos>
            <ItensPlanos>
              <TitlePlanos></TitlePlanos>
              <p>Sem taxas de matrículas</p>
              <p>Acesso a todas as aulas coletivas</p>
              <p>Sem restrição de horários</p>
              <p>Aula experimental</p>
              <p>Acompanhamento nutricional</p>
              <p>Massagem de liberação mio fascial</p>
              <TitlePlanos></TitlePlanos>
            </ItensPlanos>
            <PrecoPlanos>
              <TitlePlanos><p>Pacote<br/>Bronze</p></TitlePlanos>
              <p>x</p>
              <p>x</p>
              <p>x</p>
              <p>x</p>
              <p>x</p>
              <p>x</p>
              <TitlePlanos>R$ 100,00/mês</TitlePlanos>
            </PrecoPlanos>
            <PrecoPlanos>
              <TitlePlanos><p>Pacote<br/>Prata</p></TitlePlanos>
              <p>x</p>
              <p>x</p>
              <p>x</p>
              <p>x</p>
              <p>x</p>
              <p>x</p>
              <TitlePlanos>R$ 100,00/mês</TitlePlanos>
            </PrecoPlanos>
            <PrecoPlanos>
              <TitlePlanos><p>Pacote<br/>Ouro</p></TitlePlanos>
              <p>x</p>
              <p>x</p>
              <p>x</p>
              <p>x</p>
              <p>x</p>
              <p>x</p>
              <TitlePlanos>R$ 100,00/mês</TitlePlanos>
            </PrecoPlanos>
          </Planos>
        </Pacotes>
      </VigorContainer>
    </>
  )
}

