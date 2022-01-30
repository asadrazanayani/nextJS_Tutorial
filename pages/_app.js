import Layout from '../components/Layout'
import '../styles/globals.css'
// root component
// all of our page component are rendered here.
function MyApp({ Component, pageProps }) {
  return (<Layout >
    <Component {...pageProps}/>
  </Layout>)
}

export default MyApp

