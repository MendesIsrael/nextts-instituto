import Link from "next/link"
import { Button, Menu } from "../styles/components/navBar"

export default function NavBar() {
  return (
    <Menu>
      <Link href={'/'}><Button>HOME</Button></Link>
      <Link href={'/vigor'}><Button>VIGOR</Button></Link>
      <Link href={'/seaside'}><Button>SEASIDE</Button></Link>
    </Menu>   
  )
}