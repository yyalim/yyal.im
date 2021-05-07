import type { AppProps } from 'next/app'

import '../assets/styles/styles.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
