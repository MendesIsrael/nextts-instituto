import Link from "next/link"
//import { Contato, Menu, NavPages } from "../styles/components/navBar"

import Image from 'next/legacy/image'
import whatsapp from '../assets/contatos/whatsapp.png'
import instagram from '../assets/contatos/instagram.png'
import facebook from '../assets/contatos/facebook.png'
import email from '../assets/contatos/email.png'
import youtube from '../assets/contatos/youtube.png'

import { List } from "phosphor-react"
import { styled } from "../styles"

/*<Menu>   
      <NavPages>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/vigor">Vigor</Link>
        </li>
        <li>
          <Link href="/seaside">Seaside</Link>
        </li>
      </NavPages>
      <Contato>
        <a href="#" target="_blank">
          <Image src={whatsapp} width={16} height={16} />
        </a>
        <a href="https://www.instagram.com/institutomendesa/" target="_blank">
          <Image src={instagram} width={16} height={16} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100089147117778" target="_blank">
          <Image src={facebook} width={16} height={16} />
        </a>
        <a href="mailto:institutomendesa@outlook.com" target="_blank">
        <Image src={email} width={18} height={16} />
        </a>
        <a href="#" target="_blank">
          <Image src={youtube} width={18} height={16} />
        </a>
      </Contato>
    </Menu>*/   

    const MenuBtn = styled('div', {
      display:'flex',
      justifyContent:'flex-end',
    });
    
    const Menu = styled('div', {
      height:'60px',
      borderBottom:'.5px solid black',
      display:'flex',
      alignItems:'center',
      cursor:'pointer',
    });
    
    const Container = styled('div', {
      width:'250px',
      height:'300px',
      backgroundColor:'$blue100',
    
      '&.ContainerOculto': {
        width:'60px',
    
        [`& ${Menu}`]: {
          display: 'none',
        },
      },
    });

export default function NavBar() {
  
  return (
    <>
    <Container className="Container">
      <MenuBtn>
        <List className="list"/>
      </MenuBtn>
      <Menu>
        <Link href="/">Home</Link>
      </Menu>
      <Menu>
        <Link href="/vigor">Vigor</Link>
      </Menu>
      <Menu>
        <Link href="/seaside">Seaside</Link>
      </Menu>
    </Container>
    </>
  )
}








