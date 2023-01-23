import { styled } from "../../styles"
import { TextoPresencialEad, TitlePresencialEad } from "../../styles/pages/seaside/cursoPresencial";

import { CaretDoubleRight } from "phosphor-react"

import Image from 'next/legacy/image'
import mergulhadora2 from '../../assets/fotos/mergulhadora2.jpg'
import ebook1 from '../../assets/ebooks/ebook1.jpg'
import ebook2 from '../../assets/ebooks/ebook2.jpg'
import ebook3 from '../../assets/ebooks/ebook3.jpg'


const Estrutura = styled('div', {

});

const CorpoLivros = styled('div', {
  textAlign       : 'center',
  
  h1: {
    padding       : '2rem',
  }
});

const CaixaLivros = styled('div', {

});

const Livros = styled('div', {
  display         : 'flex',
});

const ItemLivros = styled('div', {
  height          : '550px',
  width           : '50%',
  backgroundColor : '$blue500',
  display         : 'flex',
  justifyContent  : 'center',
  alignItems      : 'center',

  variants: {
    color: {
      blue50: {
        backgroundColor : '$blue500',
        color           : '$white',
      },
      blue10: {
        backgroundColor : '$blue100',
      }
    }
  }
});

const ExplicacaoLivros = styled('div', {
  height          : '550px',
  width           : '50%',
  backgroundColor : '$blue100',
  display         : 'flex',
  justifyContent  : 'center',
  alignItems      : 'center',

  variants: {
    color: {
      blue50: {
        backgroundColor : '$blue500',
        color           : '$white',
      },
      blue10: {
        backgroundColor : '$blue100',
      }
    }
  }
});


export default function Ebooks() {
  return (
    <Estrutura>
      <TitlePresencialEad>
        <h1>E-BOOKS</h1>
        <Image src={mergulhadora2} height={425} width={1345} />
      </TitlePresencialEad>

      <TextoPresencialEad>
        <h2><CaretDoubleRight size={20}/>Livros digitais com comunicação eficiente e facilitada</h2>
      </TextoPresencialEad>

      <CorpoLivros>
        <h1>E-BOOKS DE BIOLOGIA MARINHA</h1>
        <CaixaLivros>
          <Livros>
            <ItemLivros>
              <Image src={ebook1} />
            </ItemLivros>
            <ExplicacaoLivros>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, fugiat. Optio modi magni animi, tempora fugiat ipsa quam ut repellendus illum impedit quia laborum, cupiditate ad nostrum assumenda reiciendis saepe?</ExplicacaoLivros>
          </Livros>
          <Livros>
            <ItemLivros color={"blue10"}>
              <Image src={ebook2} />
            </ItemLivros>
            <ExplicacaoLivros color={"blue50"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, fugiat. Optio modi magni animi, tempora fugiat ipsa quam ut repellendus illum impedit quia laborum, cupiditate ad nostrum assumenda reiciendis saepe?</ExplicacaoLivros>
          </Livros>
          <Livros>
            <ItemLivros>
              <Image src={ebook3} />
            </ItemLivros>
            <ExplicacaoLivros>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, fugiat. Optio modi magni animi, tempora fugiat ipsa quam ut repellendus illum impedit quia laborum, cupiditate ad nostrum assumenda reiciendis saepe?</ExplicacaoLivros>
          </Livros>
        </CaixaLivros>
      </CorpoLivros>
    </Estrutura>
  )
}