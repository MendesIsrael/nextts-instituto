import { SeasideContainer, TitleSeaside } from "../../styles/pages/seaside";

import Image from 'next/legacy/image'
import logoSeaside from '../../assets/logos/logo-preta-seaside.png'
import { Login } from "../../components/login";
import Link from "next/link";

export default function Seaside() {
  return (
    <SeasideContainer>

      <TitleSeaside>
        <Image src={logoSeaside} width={406} height={400} />
        <video src={require('../../assets/videos/seaside.mp4')} autoPlay loop muted />
        <Login color="blue"><Link href="/vigor/loginVigor">LOGIN</Link></Login>
      </TitleSeaside>
    </SeasideContainer>
  )
}