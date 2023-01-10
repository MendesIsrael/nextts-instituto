import { ContainerMissaoVisao, HomeContainer, MissaoVisao, QuemSomos, Title } from '../styles/pages/home'

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
      <Title>
        <Image src={logoInstituto} width={560} height={560} />
      </Title>

      <QuemSomos>
        <h1>QUEM SOMOS</h1>
        <p>O Instituto Mendes de Sá é uma entidade brasileira privada criada com o propósito de levantar a bandeira do esporte e da educação como ferramenta de transformação, trabalhando o desenvolvimento humano, físico e cognitivo. Com foco no corpo e mente, oferece atividades coletivas, treinos, palestras e cursos com aulas teóricas e práticas nas áreas da saúde e meio ambiente, levando - de forma ética e responsável - a população Nilopolitana a dar novos passos através de domínios técnicos e científicos. Fundado em Maio de 2022, por Israel Mendes e Rafaela de Sá, atende crianças, jovens, adultos e idosos que buscam conhecimento, bem-estar ou melhora da performance.</p>
        <ContainerMissaoVisao>
          <MissaoVisao>
            <h1>Visão</h1>
            <p>Tornar-se referência por excelência, se estabelecendo como uma organização sólida, buscando preencher a lacuna acadêmica na Baixada Fluminense referente a Cursos livres e, além disso, suprir as necessidades do público que visa desenvolver o seu potencial máximo, melhorar o condicionamento físico, prevenir e reduzir os ricos de lesões e o alívio de dores crônicas.</p>
          </MissaoVisao>
          <MissaoVisao>
            <h1>Missão</h1>
            <p>A palavra “Instituto” vem do latim <em>“Statuere”</em>, que significa “colocar em pé” ou “firmar”. Desse modo, a nossa missão é estabelecer raízes profundas no município de Nilópolis, mantendo de pé os anseios de nossos alunos, seja aproximando-os do conhecimento científico ou promovendo o alcance da qualidade de vida.</p>
          </MissaoVisao>
        </ContainerMissaoVisao>
      </QuemSomos>
    </HomeContainer>
  )
}
