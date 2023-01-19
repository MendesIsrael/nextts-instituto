import { BodyLoginVigor, LoginContainerVigor } from "../../styles/pages/loginVigor";

import Image from 'next/legacy/image'
import logoVigor from '../../assets/logos/logo-vigor.png' 

export default function LoginVigor() {
  return (
    <BodyLoginVigor>
      <LoginContainerVigor>
        <Image src={logoVigor}/>
      </LoginContainerVigor>
    </BodyLoginVigor>
  )
}