import Link from "next/link"
import { Contato, Menu, NavPages } from "../styles/components/navBar"

import Image from 'next/legacy/image'
import whatsapp from '../assets/contatos/whatsapp.png'

import facebook from '../assets/contatos/facebook.png'
import email from '../assets/contatos/email.png'

   
export default function NavBar() {
  
  return (
    <Menu>   
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
        
        <a href="https://www.facebook.com/profile.php?id=100089147117778" target="_blank">
          <Image src={facebook} width={16} height={16} />
        </a>
        <a href="mailto:institutomendesa@outlook.com" target="_blank">
        <Image src={email} width={18} height={16} />
        </a>
      </Contato>
    </Menu>
  )
}






