import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { keyframes } from '@stitches/react'
import { styled } from '../styles';


const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const AlertDialogOverlay = styled(AlertDialog.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, 0.808)',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const AlertDialogContent = styled(AlertDialog.Content, {
  backgroundColor: '$white',
  borderRadius: 8,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '800px',
  maxHeight: '90vh',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  '&:focus': { outline: 'none' },
});

const AlertDialogTitle = styled(AlertDialog.Title, {
  margin: 0,
  color: '$green300',
  fontSize: 25,
  fontWeight: 500,
});

const AlertDialogDescription = styled(AlertDialog.Description, {
  marginBottom: 20,
  color: '$black',
  fontSize: 15,
  lineHeight: 1.5,
});

const Flex = styled('div', { display: 'flex' });

const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 25,

  variants: {
    variant: {
      violet: {
        backgroundColor: '$white',
        color: '$green400',
        boxShadow: `0 2px 5px black`,
        '&:hover': { backgroundColor: '$green500', color: '$white' },
        '&:focus': { boxShadow: `0 0 0 2px black` },
      },
      
      mauve: {
        backgroundColor: '$transparent',
        color: '$black',
        '&:hover': { backgroundColor: '$white' },
        '&:focus': { boxShadow: `0 0 0 2px black` },
      },
    },
  },

  defaultVariants: {
    variant: 'violet',
  },
});


export const AlertDialogPilates = () => (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <Button>Saiba +</Button>
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogTitle>PILATES</AlertDialogTitle>
        <AlertDialogDescription>
          Pacote gold: 144 sessões em 6 meses, avaliação grátis = R$850,00<br />
          Pacote platinum: 72 sessões em 3 meses, avaliação grátis = R$500,00 <br />
          Pacote basic: 24 sessões em 2 meses, avaliação grátis = R$350,00<br />
          Mensal 5x/semana: R$200,00<br />
          Mensal 4x/semana: R$190,00<br />
          Mensal 3x/semana: R$150,00<br />
          Mensal 2x/semana: R$110,00<br />
          Mensal 1x/semana: R$80,00<br />
          Aula avulso: 100<br />
          Taxa de matrícula: R$20,00
        </AlertDialogDescription>
        <Flex css={{ justifyContent: 'flex-end' }}>
          <AlertDialog.Cancel asChild>
            <Button variant="mauve" css={{ marginRight: 25 }}>
              Entendi
            </Button>
          </AlertDialog.Cancel>
        </Flex>
      </AlertDialogContent>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

export const AlertDialogHidro = () => (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <Button>Saiba +</Button>
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogTitle>HIDROGINÁSTICA</AlertDialogTitle>
        <AlertDialogDescription>
          Pacote gold: 144 sessões em 6 meses, avaliação grátis = R$850,00<br />
          Pacote platinum: 72 sessões em 3 meses, avaliação grátis = R$500,00 <br />
          Pacote basic: 24 sessões em 2 meses, avaliação grátis = R$350,00<br />
          Mensal 5x/semana: R$200,00<br />
          Mensal 4x/semana: R$190,00<br />
          Mensal 3x/semana: R$150,00<br />
          Mensal 2x/semana: R$110,00<br />
          Mensal 1x/semana: R$80,00<br />
          Aula avulso: 100<br />
          Taxa de matrícula: R$20,00
        </AlertDialogDescription>
        <Flex css={{ justifyContent: 'flex-end' }}>
          <AlertDialog.Cancel asChild>
            <Button variant="mauve" css={{ marginRight: 25 }}>
              Entendi
            </Button>
          </AlertDialog.Cancel>
        </Flex>
      </AlertDialogContent>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

export const AlertDialogFuncional = () => (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <Button>Saiba +</Button>
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogTitle>FUNCIONAL</AlertDialogTitle>
        <AlertDialogDescription>
          Pacote gold: 144 sessões em 6 meses, avaliação grátis = R$850,00<br />
          Pacote platinum: 72 sessões em 3 meses, avaliação grátis = R$500,00 <br />
          Pacote basic: 24 sessões em 2 meses, avaliação grátis = R$350,00<br />
          Mensal 5x/semana: R$200,00<br />
          Mensal 4x/semana: R$190,00<br />
          Mensal 3x/semana: R$150,00<br />
          Mensal 2x/semana: R$110,00<br />
          Mensal 1x/semana: R$80,00<br />
          Aula avulso: 100<br />
          Taxa de matrícula: R$20,00
        </AlertDialogDescription>
        <Flex css={{ justifyContent: 'flex-end' }}>
          <AlertDialog.Cancel asChild>
            <Button variant="mauve" css={{ marginRight: 25 }}>
              Entendi
            </Button>
          </AlertDialog.Cancel>
        </Flex>
      </AlertDialogContent>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

export const AlertDialogLutas = () => (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <Button>Saiba +</Button>
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogTitle>LUTAS</AlertDialogTitle>
        <AlertDialogDescription>
          Pacote gold: 144 sessões em 6 meses, avaliação grátis = R$850,00<br />
          Pacote platinum: 72 sessões em 3 meses, avaliação grátis = R$500,00 <br />
          Pacote basic: 24 sessões em 2 meses, avaliação grátis = R$350,00<br />
          Mensal 5x/semana: R$200,00<br />
          Mensal 4x/semana: R$190,00<br />
          Mensal 3x/semana: R$150,00<br />
          Mensal 2x/semana: R$110,00<br />
          Mensal 1x/semana: R$80,00<br />
          Aula avulso: 100<br />
          Taxa de matrícula: R$20,00
        </AlertDialogDescription>
        <Flex css={{ justifyContent: 'flex-end' }}>
          <AlertDialog.Cancel asChild>
            <Button variant="mauve" css={{ marginRight: 25 }}>
              Entendi
            </Button>
          </AlertDialog.Cancel>
        </Flex>
      </AlertDialogContent>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);