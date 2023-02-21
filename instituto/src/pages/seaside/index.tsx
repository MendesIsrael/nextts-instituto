import { Apoio, BodyModalidade, BoxModalidade, BoxModalidade2, Certificado, Loja, Mod, Modalidades, SeasideContainer, TextExplicativo, TitleSeaside } from "../../styles/pages/seaside";
import { BodyNoticias, Noticias } from "../../styles/pages/home";
import { Login } from "../../components/buttonlogin";
import { Insta } from "../../styles/components/navBar";

import Link from "next/link";
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { Books, ChalkboardTeacher, MonitorPlay, Rss, Student, UserCircle, UsersThree } from "phosphor-react";

import Image from 'next/legacy/image'
import instagram from '../../assets/contatos/instagram.png'
import logoSeaside from '../../assets/logos/logo-preta-seaside.png'
import momento1 from '../../assets/fotos/momentos1.jpg'
import momento2 from '../../assets/fotos/momentos2.jpg'
import momento3 from '../../assets/fotos/momentos3.jpg'
import momento4 from '../../assets/fotos/momentos4.jpg'
import mergulhadora2 from '../../assets/fotos/mergulhadora2.jpg'
import cetificado from '../../assets/fotos/modelo-certificado.jpg'


export default function Seaside() {
  return (
    <SeasideContainer>

      <TitleSeaside>
        <Image src={logoSeaside} width={406} height={400} />
        <video src={require('../../assets/videos/seaside.mp4')} autoPlay loop muted />
        <Link href={'/seaside/loginSeaside'} legacyBehavior>
          <Login color="blue">LOGIN<UserCircle size={30}/></Login>
        </Link>
        <Insta>
          <a href="https://www.instagram.com/institutomendesa/">
            <Image src={instagram} width={17} height={17} />
          </a>
        </Insta>
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
            <Link href={'/seaside/cursoPresencial'}  legacyBehavior>
              <Mod color={'blue5'}>
                <Student size={50}/>
                <h3>Cursos presenciais</h3>
              </Mod>
            </Link>
            <Link href={'/seaside/cursoPresencial'}  legacyBehavior>
              <Mod color={'blue3'}>
                <ChalkboardTeacher size={50}/>
                <h3>Palestras</h3>
              </Mod>
            </Link>
            <Link href={'/seaside/cursoEad'}  legacyBehavior>
              <Mod color={'blue1'}>
                <Rss size={50}/>
                <h3>Cursos EaD</h3>
              </Mod>
            </Link>
          </BoxModalidade>
          <BoxModalidade2>
            <Link href={'/seaside/ebooks'}  legacyBehavior>
              <Mod color={'blue2'}>
                <Books size={50} />
                <h3>Livros digitais</h3>
              </Mod>
            </Link>
            <Link href={'/seaside/cursoPresencial'}  legacyBehavior>
              <Mod color={'blue4'}>
                <UsersThree size={50}/>
                <h3>Eventos</h3>
              </Mod>
            </Link>
            <Link href={'https://www.youtube.com/@seasideservicosea'}  passHref legacyBehavior >
              <Mod color={'blue3'} target='_blank' >
                <MonitorPlay size={50}/>
                <h3>Canal no YouTube</h3>
              </Mod>
            </Link>
          </BoxModalidade2>
        </BodyModalidade>
      </Modalidades>
      
      <Certificado>
        <h1>MODELO DE CETIFICADO</h1>
        <Image src={cetificado} width={708} height={500}/>
      </Certificado>

      <Loja>
        <h1>LOJA</h1>
      </Loja>
      
      <Apoio>
        <h1>APOIO</h1>
      </Apoio>
    </SeasideContainer>
  )
}