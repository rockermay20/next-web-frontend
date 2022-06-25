import '../styles/globals.css'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
      <content>
        <Component {...pageProps} />
        <Footer />
      </content>
  )
}

export default MyApp
