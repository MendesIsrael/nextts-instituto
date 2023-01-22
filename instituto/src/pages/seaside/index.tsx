import { BodyModalidade, BoxModalidade, BoxModalidade2, Mod, Modalidades, SeasideContainer, TextExplicativo, TitleSeaside } from "../../styles/pages/seaside";
import { BodyNoticias, Noticias } from "../../styles/pages/home";
import { Login } from "../../components/buttonlogin";
import Link from "next/link";
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { UserCircle } from "phosphor-react";

import Image from 'next/legacy/image'
import logoSeaside from '../../assets/logos/logo-preta-seaside.png'
import momento1 from '../../assets/fotos/momentos1.jpg'
import momento2 from '../../assets/fotos/momentos2.jpg'
import momento3 from '../../assets/fotos/momentos3.jpg'
import momento4 from '../../assets/fotos/momentos4.jpg'
import mergulhadora2 from '../../assets/fotos/mergulhadora2.jpg'


export default function Seaside() {
  return (
    <SeasideContainer>

      <TitleSeaside>
        <Image src={logoSeaside} width={406} height={400} />
        <video src={require('../../assets/videos/seaside.mp4')} autoPlay loop muted />
        <Link href={'/seaside/loginSeaside'} legacyBehavior>
          <Login color="blue">LOGIN<UserCircle size={30}/></Login>
        </Link>
      </TitleSeaside>

      <Noticias>
      <h1>NOTÍCIAS</h1>
      <BodyNoticias>
          <Carousel
          pause="hover" 
          fade>
            <Carousel.Item interval={1000}>
              <Image src={momento1} width={500} height={357} layout='responsive' />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <Image src={momento2} width={500} height={357} layout='responsive' />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <Image src={momento3} width={500} height={357} layout='responsive' />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <Image src={momento4} width={500} height={357} layout='responsive' />
            </Carousel.Item>
          </Carousel>
        </BodyNoticias>
      </Noticias>

      <TextExplicativo>
        <h1>Seaside</h1>
        <p>A sua plataforma de cursos livres e livros das ciências <br/> biológicas e capacitação pessoal </p>
        <Image src={mergulhadora2} height={425} width={1345} />       
      </TextExplicativo>

      <Modalidades>
        <h1>MODALIDADE</h1>
        <BodyModalidade>
          <BoxModalidade>
            <Mod color={'blue5'}>
              Curso presenciais
              Palestras
            </Mod>
            <Mod color={'blue3'}>
              Cursos EaD
              Livros digitais
            </Mod>
          </BoxModalidade>
          <BoxModalidade2>
            <Mod color={'blue4'}>
              Eventos
            </Mod>
            <Mod color={'blue1'}>
              Canal no YouTube
            </Mod>
          </BoxModalidade2>
        </BodyModalidade>
      </Modalidades>

      <div>oi</div>
    </SeasideContainer>
  )
}