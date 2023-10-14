import '../styles/globals.css'
import NavBar from '../Components/NavBar'
import Donate from '../Components/Donate'
import TextLessonAd from "../Components/TextLessonsAd"
import styles from '../styles/Home.module.css'
import localStyle from './home.module.css'
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.center}> <br />

      <Link href="/">
        <h1 className={localStyle.title}>Devonshire Music <br />William</h1>
      </Link>


      <NavBar />
      <Donate />

      <Component {...pageProps} /><br /> <br />
      <TextLessonAd />
    </div>
  )
}

export default MyApp
