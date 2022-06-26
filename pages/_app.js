import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div className='w-full min-h-screen px-10'>
    <Navbar/>
    <Component {...pageProps} /></div>
}

export default MyApp
