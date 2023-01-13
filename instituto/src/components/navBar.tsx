import Link from "next/link"
import { Contato, Menu } from "../styles/components/navBar"

import Image from 'next/legacy/image'
import whatsapp from '../assets/contatos/whatsapp.png'
import instagram from '../assets/contatos/instagram.png'
import facebook from '../assets/contatos/facebook.png'
import email from '../assets/contatos/email.png'
import youtube from '../assets/contatos/youtube.png'

export default function NavBar() {
  return (
    <Menu>
      
      <input type="checkbox" id="check" />
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/vigor">Vigor</Link>
        </li>
        <li>
          <Link href="/seaside">Seaside</Link>
        </li>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-android" viewBox="0 0 16 16">
  <path d="M2.76 3.061a.5.5 0 0 1 .679.2l1.283 2.352A8.94 8.94 0 0 1 8 5a8.94 8.94 0 0 1 3.278.613l1.283-2.352a.5.5 0 1 1 .878.478l-1.252 2.295C14.475 7.266 16 9.477 16 12H0c0-2.523 1.525-4.734 3.813-5.966L2.56 3.74a.5.5 0 0 1 .2-.678ZM5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
</svg>
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
    </Menu>   
  )
}