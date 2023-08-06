import '../styles/globals.css'
import NavBar from '../Components/NavBar'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.center}>
      <NavBar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
