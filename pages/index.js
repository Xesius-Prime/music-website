import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.center}>

      <h1>Welcome to my website!</h1>
      <Image
        src='/music website main page.png'
        width={300}
        height={300}
        alt="Picture Test"
        className={styles.image2}
        suppressHydrationWarning={true}
      />

      <div className={styles.leftAlign}>
        <p>This site wil contain many aspects of my music.</p>
        <p>
          1. The Method <br />
          2. My Compositions & Productions <br />
          3. Performance Stuff for Shows
        </p>
      </div>

    </div>
  )
}