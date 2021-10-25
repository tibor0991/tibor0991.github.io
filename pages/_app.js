import Navbar from '../components/Navbar'
import '../styles/globals.css'

const pages = [
  { href: '/', title: 'Home'},
  { href: '/portfolio', title: 'Portfolio'},
  { href: '/blog', title: 'Blog'},
]

function MyApp({ Component, pageProps }) {
  return <>
  <Navbar rootPages={pages}/>
  <Component {...pageProps} />
  </>
}

export default MyApp
