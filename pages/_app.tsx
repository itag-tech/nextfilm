import type { AppProps } from 'next/app'
import { SearchProvider } from '../providers/SearchProvider'

import '../styles/globals.scss'
import "../styles/app.scss"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SearchProvider>
      <Component {...pageProps} />
    </SearchProvider >
  )
}
