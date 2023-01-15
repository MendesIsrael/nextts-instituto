import { SeasideContainer, TitleSeaside } from "../../styles/pages/seaside";

import Image from 'next/legacy/image'
import logoSeaside from '../../assets/logos/logo-preta-seaside.png'

export default function Seaside() {
  return (
    <SeasideContainer>

      <TitleSeaside>
        <Image src={logoSeaside} width={406} height={400} />
        <video src={require('../../assets/videos/seaside.mp4')} autoPlay loop muted />
      </TitleSeaside>
    </SeasideContainer>
  )
}