import Head from 'next/head'
import Header from '../components/Header'
import Slider from '../components/Slider'

export default function Home() {
  return (
    <div>
      <Header />
      <Head>
        <title>Transcripnet - Tienda</title>
        <meta name="description" content="Tienda de Transcripnet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
    </div>
  )
}
