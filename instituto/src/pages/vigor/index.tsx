import { TitleVigor, VigorContainer, DivBoxGreen, Modalidades, Atividades, Pacotes, Planos, ItensPlanos, PrecoPlanos, TitlePlanos, Adicionais, BodyAdicionais, ItensAdicionais, PreçoAdicionais } from "../../styles/pages/vigor";

import Image from 'next/legacy/image'
import logoVigor from '../../assets/logos/logo-vigor.png'
import pilates from '../../assets/modalidades/pilates.jpg'
import hidroGinastica from '../../assets/modalidades/hidroGinastica.jpg'
import funcional from '../../assets/modalidades/funcional.jpg'
import lutas from '../../assets/modalidades/lutas.jpg'

const videoVigor = '../../assets/videos/vigor.mp4'

export default function Vigor() {
  return (
    <>
      <TitleVigor>
        <Image src={logoVigor} width={670} height={500} />
        <video src={require('../../assets/videos/vigor.mp4')} autoPlay loop muted />
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

          <Adicionais>
            <h1>SERVIÇOS ADICIONAIS</h1>
            <BodyAdicionais>
              <ItensAdicionais>
                <h2>Nutricionista</h2>
                <p>Estudamos os alimentos e seus efeitos no seu organismo. Atuamos com nutrição clínica (voltada para o emagrecimento saudável, tratamento de patologias e condições clínicas), nutrição funcional (especialidade da nutrição que leva em conta a individualidade de cada paciente) e nutrição esportiva (voltada para pacientes que buscam otimizar a performance esportiva).</p><hr />
                <PreçoAdicionais>
                  <p>R$ 49,90/mês</p>  
                </PreçoAdicionais>
              </ItensAdicionais>
              <ItensAdicionais>
                <h2>Massagista</h2>
                <p>A Liberação Miofascial é uma técnica de massagem que ajuda a relaxar os músculos. É uma técnica de massagem que aplica pressão em alguns pontos do corpo e ajuda a relaxar, maior mobilidade das articulações e alívio de dores crônicas, tensionais e pós treinos para que haja maior liberdade entre o músculo e a fáscia.</p><hr />
                <PreçoAdicionais>
                  <p>R$ 49,90/mês</p>  
                </PreçoAdicionais>
              </ItensAdicionais>
              <ItensAdicionais>
                <h2>Personal</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa autem rerum architecto exercitationem laudantium aperiam quod similique? Dolorem quis magnam voluptates maxime saepe deleniti consequatur illum maiores, voluptatem, harum nihil!</p><hr />
                <PreçoAdicionais>
                  <p>R$ 49,90/mês</p>  
                </PreçoAdicionais>
              </ItensAdicionais>
            </BodyAdicionais>
          </Adicionais>
        </Pacotes>

        
      </VigorContainer>
    </>
  )
}

