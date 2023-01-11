import type { AppProps } from 'next/app'
import NavBar from '../components/navBar'
import { globalStyles } from '../styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <section>
      <NavBar/>
      <Component {...pageProps} />
    </section>
  )
}
