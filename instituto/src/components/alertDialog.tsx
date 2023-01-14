import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { styled, keyframes } from '@stitches/react'


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

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const AlertDialogOverlay = styled(AlertDialog.Overlay, {
  backgroundColor: 'Black',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const AlertDialogContent = styled(AlertDialog.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  maxHeight: '85vh',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  '&:focus': { outline: 'none' },
});

const AlertDialogTitle = styled(AlertDialog.Title, {
  margin: 0,
  color: 'Magenta',
  fontSize: 17,
  fontWeight: 500,
});

const AlertDialogDescription = styled(AlertDialog.Description, {
  marginBottom: 20,
  color: 'blue',
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
  height: 35,

  variants: {
    variant: {
      violet: {
        backgroundColor: 'white',
        color: 'Violet',
        boxShadow: `0 2px 10px green`,
        '&:hover': { backgroundColor: 'BlueViolet' },
        '&:focus': { boxShadow: `0 0 0 2px black` },
      },
      red: {
        backgroundColor: 'red',
        color: 'Brown',
        '&:hover': { backgroundColor: 'Yellow' },
        '&:focus': { boxShadow: `0 0 0 2px red` },
      },
      mauve: {
        backgroundColor: 'green',
        color: 'White',
        '&:hover': { backgroundColor: 'red' },
        '&:focus': { boxShadow: `0 0 0 2px black` },
      },
    },
  },

  defaultVariants: {
    variant: 'violet',
  },
});