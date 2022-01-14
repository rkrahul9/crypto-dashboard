import Container from '../components/Container';
import Footer from '../components/Footer'
import Header from '../components/Header';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  )
}

export default MyApp
