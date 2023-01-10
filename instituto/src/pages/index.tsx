import { HomeContainer } from '../styles/pages/home'

import Image from 'next/legacy/image'
import logoInstituto from '../assets/logos/logo-3.png'
import logoVigor from '../assets/logos/logo-vigor-preto.png'
import logoSeaside from '../assets/logos/logo-branca-seaside.png'
import fotoIsrael from '../assets/fotos/israel.png'
import fotoRafaela from '../assets/fotos/rafaela.png'
import parceiroArkhi from '../assets/parceiros/arkhi-design.png'


export default function Home() {
  return (
    <HomeContainer>
      <h1>oi</h1>
      <Image src={logoInstituto} width={300} height={300} />
    </HomeContainer>
  )
}
