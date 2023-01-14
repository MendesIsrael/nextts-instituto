import { TitleVigor, VigorContainer, DivBoxGreen, Modalidades, Atividades, Pacotes, Planos, ItensPlanos, PrecoPlanos, TitlePlanos, Adicionais, BodyAdicionais, ItensAdicionais, PreçoAdicionais, TextMotivacional, ImgAcademia, BodyAcademia, MoreInformation } from "../../styles/pages/vigor";

import { YinYang, Barbell, ForkKnife, Check, X } from "phosphor-react"
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { AlertDialogPilates } from "../../components/alertDialog";

import Image from 'next/legacy/image'
import logoVigor from '../../assets/logos/logo-vigor.png'
import pilates from '../../assets/modalidades/pilates.jpg'
import hidroGinastica from '../../assets/modalidades/hidroGinastica.jpg'
import funcional from '../../assets/modalidades/funcional.jpg'
import lutas from '../../assets/modalidades/lutas.jpg'
import academia1 from '../../assets/academia/academia01.jpg'
import academia2 from '../../assets/academia/academia02.jpg'
import academia3 from '../../assets/academia/academia03.jpg'


export default function Vigor() {
  return (
    <>
      <TitleVigor>
        <Image src={logoVigor} width={670} height={500} />
        <video src={require('../../assets/videos/vigor.mp4')} autoPlay loop muted />
      </TitleVigor>

      <VigorContainer>
        <TextMotivacional>
          <p>A sua melhor opção na hora de levar uma vida mais saudável</p>
        </TextMotivacional>

        <DivBoxGreen>
          <h1>CONHEÇA NOSSAS MODALIDADES</h1>
          <Modalidades>
            <Atividades>
              <Image src={pilates}/>
              <h3>PILATES</h3>
              <p>Buscamos sempre desenvolver o seu potencial máximo - melhorando o condicionamento físico geral, a consciência corporal e a coordenação motora, prevenindo e reduzindo os ricos de lesões e o alívio de dores crônicas.</p>
              <MoreInformation>
                <AlertDialogPilates />
              </MoreInformation>
            </Atividades>
            <Atividades>
            <Image src={hidroGinastica}/>
              <h3>HIDROGINÁSTICA</h3>
              <p>Buscamos sempre desenvolver o seu potencial máximo - melhorando o condicionamento físico geral, a consciência corporal e a coordenação motora, prevenindo e reduzindo os ricos de lesões e o alívio de dores crônicas.</p>
            </Atividades>
            <Atividades>
            <Image src={funcional}/>
              <h3>FUNCIONAL</h3>
              <p>Buscamos sempre desenvolver o seu potencial máximo - melhorando o condicionamento físico geral, a consciência corporal e a coordenação motora, prevenindo e reduzindo os ricos de lesões e o alívio de dores crônicas.</p>
            </Atividades>
            <Atividades>
            <Image src={lutas}/>
              <h3>LUTAS</h3>
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
              <p><Check/></p>
              <p><X color="red"/></p>
              <p><X color="red"/></p>
              <p><X color="red"/></p>
              <p><X color="red"/></p>
              <p><X color="red"/></p>
              <TitlePlanos>R$ 100,00/mês</TitlePlanos>
            </PrecoPlanos>
            <PrecoPlanos>
              <TitlePlanos><p>Pacote<br/>Prata</p></TitlePlanos>
              <p><Check/></p>
              <p><Check/></p>
              <p><Check/></p>
              <p><X color="red"/></p>
              <p><X color="red"/></p>
              <p><X color="red"/></p>
              <TitlePlanos>R$ 100,00/mês</TitlePlanos>
            </PrecoPlanos>
            <PrecoPlanos>
              <TitlePlanos><p>Pacote<br/>Ouro</p></TitlePlanos>
              <p><Check/></p>
              <p><Check/></p>
              <p><Check/></p>
              <p><Check/></p>
              <p><Check/></p>
              <p><Check/></p>
              <TitlePlanos>R$ 100,00/mês</TitlePlanos>
            </PrecoPlanos>
          </Planos>

          <Adicionais>
            <h1>SERVIÇOS ADICIONAIS</h1>
            <BodyAdicionais>
              <ItensAdicionais>
                <ForkKnife size={50} color="white"/>
                <h2>Nutricionista</h2>
                <p>Estudamos os alimentos e seus efeitos no seu organismo. Atuamos com nutrição clínica (voltada para o emagrecimento saudável, tratamento de patologias e condições clínicas), nutrição funcional (especialidade da nutrição que leva em conta a individualidade de cada paciente) e nutrição esportiva (voltada para pacientes que buscam otimizar a performance esportiva).</p><hr />
                <PreçoAdicionais>
                  <p>R$ 49,90/mês</p>  
                </PreçoAdicionais>
              </ItensAdicionais>
              <ItensAdicionais>
                <YinYang size={50} color="white"/>
                <h2>Massagista</h2>
                <p>A Liberação Miofascial é uma técnica de massagem que ajuda a relaxar os músculos. É uma técnica de massagem que aplica pressão em alguns pontos do corpo e ajuda a relaxar, maior mobilidade das articulações e alívio de dores crônicas, tensionais e pós treinos para que haja maior liberdade entre o músculo e a fáscia.</p><hr />
                <PreçoAdicionais>
                  <p>R$ 49,90/mês</p>  
                </PreçoAdicionais>
              </ItensAdicionais>
              <ItensAdicionais>
                <Barbell size={50} color="white"/>
                <h2>Personal</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa autem rerum architecto exercitationem laudantium aperiam quod similique? Dolorem quis magnam voluptates maxime saepe deleniti consequatur illum maiores, voluptatem, harum nihil!</p><hr />
                <PreçoAdicionais>
                  <p>R$ 49,90/mês</p>  
                </PreçoAdicionais>
              </ItensAdicionais>
            </BodyAdicionais>
          </Adicionais>
        </Pacotes>

          <ImgAcademia>
          <h1>NOTÍCIAS</h1>
            <BodyAcademia>
              <Carousel
              pause="hover" 
              fade 
              variant='dark'>
                <Carousel.Item interval={5000}>
                  <Image src={academia1} width={500} height={357} />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <Image src={academia2} width={500} height={357} />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <Image src={academia3} width={500} height={357} />
                </Carousel.Item>
              </Carousel>
            </BodyAcademia>
          </ImgAcademia>

      </VigorContainer>
    </>
  )
}

