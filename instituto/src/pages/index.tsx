import { Acesso, AcessoEmpresas, Bio, ContainerMissaoVisao, HomeContainer, Idealizadores, MissaoVisao, QuemSomos, Servicos, Title } from '../styles/pages/home'

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

      <Servicos>
        <h1>SERVIÇOS</h1>
        <h2>PREPARAÇÃO DO CORPO E MENTE DAS PESSOAS.</h2>
        <Acesso>
          <AcessoEmpresas>
            
              <Image src={logoVigor} width={192} height={192} />
            
            <p>A Vigor Body Training está focada em aprimorar a consciência corporal e a coordenação motora, estimulando a melhora da performance de modo respeitoso e saudável, tendo como diferencial a estimulação da correção postural, a restauração do vigor físico e o fortalecimento muscular associado ao cuidado na prevenção de lesões. Utilizaremos as modalidades de Pilates, funcional, hidroginástica e lutas para promover o seu desenvolvimento corporal. Aqui te preparamos para superar os seus limites e alcançar seus objetivos!</p>
          </AcessoEmpresas>
          <AcessoEmpresas>
            
              <Image src={logoSeaside} width={192} height={192} />
           
            <p>A Seaside Serviços Educacionais está focada na divulgação de conhecimentos técnicos e científicos, visando a capacitação intelectual e o enriquecimento de currículo. Através de um corpo docente especializado, oferece eventos, palestras e cursos de curta duração, abordando temas como Educação Ambiental, Ecologia de praias, Macroinvertebrados bentônicos, Biologia e Conservação de Tartarugas Marinhas,  Desenvolvimento Motor, Suporte Básico de Vida e Primeiros Socorros, destinados a qualquer pessoa interessada, seja estudantes, professores ou comunidade em geral. Aqui, a educação acolhe e desperta futuros!</p>
          </AcessoEmpresas>
        </Acesso>
      </Servicos>

      <Idealizadores>
        <Bio>
          <h1>Israel Mendes</h1>
          <a href="https://www.instagram.com/mendesisrael97/" target="_blank">
            <Image src={fotoIsrael}/>
          </a>
          <p>O idealizador Israel, formado em bacharel e licenciatura de educação física no Centro Universitário São José; está cursando o ensino superior de ciência da computação na Descomplica e formado nos cursos de excel básico; organização e produtividade; técnicas e ferramentas para gestão de projetos e produtos; introdução ao desenvolvimento web; desenvolvimento web HTML5 + CSS3; micro empreendedor individual; e, sargento do exécito brasileiro da brigada de infataria paraquedista, é casado com a Sr Rafaela de Sá.</p>
        </Bio>
      </Idealizadores>
    </HomeContainer>
  )
}
