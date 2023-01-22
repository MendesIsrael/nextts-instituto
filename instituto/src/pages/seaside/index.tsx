import { BodyModalidade, BoxModalidade, Mod1, Mod2, Modalidades, SeasideContainer, TextExplicativo, TitleSeaside } from "../../styles/pages/seaside";
import { BodyNoticias, Noticias } from "../../styles/pages/home";
import { Login } from "../../components/buttonlogin";
import Link from "next/link";
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { UserCircle } from "phosphor-react";

import Image from 'next/legacy/image'
import logoSeaside from '../../assets/logos/logo-preta-seaside.png'
import momento1 from '../../assets/fotos/momento1.jpg'
import momento2 from '../../assets/fotos/momento2.jpg'
import momento3 from '../../assets/fotos/momento3.jpg'
import momento4 from '../../assets/fotos/momento4.jpg'
import momento5 from '../../assets/fotos/momento5.jpg'
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
            <Carousel.Item interval={5000}>
              <Image src={momento1} width={500} height={357} layout='responsive' />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <Image src={momento2} width={500} height={357} layout='responsive' />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <Image src={momento3} width={500} height={357} layout='responsive' />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <Image src={momento4} width={500} height={357} layout='responsive' />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <Image src={momento5} width={500} height={357} layout='responsive' />
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
            <Mod1>
              Curso presenciais
              Palestras
            </Mod1>
            <Mod1 className="mod1">
              Cursos EaD
              Livros digitais
            </Mod1>
            <Mod2>
              Eventos
            </Mod2>
            <Mod2>
              Canal no YouTube
            </Mod2>
          </BoxModalidade>
        </BodyModalidade>
      </Modalidades>
    </SeasideContainer>
  )
}