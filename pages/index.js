import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.center}>

      <h1>Top Page</h1>

      <Image
        src='/music website main page.png'
        width={300}
        height={300}
        alt="Picture Test"
        className={styles.image2}
        suppressHydrationWarning={true}
      />

      <p>This website is a music method, compiled by William Devonshire to help teach music ideas.</p>

    </div>
  )
}