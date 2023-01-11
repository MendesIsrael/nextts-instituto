import Link from "next/link"
import { Menu } from "../styles/components/navBar"

export default function NavBar() {
  return (
    <Menu>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/vigor">Vigor</Link>
        </li>
        <li>
          <Link href="/seaside">Seaside</Link>
        </li>
    </Menu>   
  )
}