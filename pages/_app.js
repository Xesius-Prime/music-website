import '../styles/globals.css'
import NavBar from '../Components/NavBar'
import styles from '../styles/Home.module.css'
import localStyle from './home.module.css'
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.center}> <br />

      <Link href="/">
        <h1 className={localStyle.title}>The Method <br />Devonshire Music</h1>
      </Link>

      <NavBar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
