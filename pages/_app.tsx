import type { AppProps } from 'next/app'
import '@src/components/Activity/CarouselLastActivity.css'
import '@src/styles/global.css'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />
}

export default App
