import globalStyle from '../styles/Home.module.css';
import Image from 'next/image';
import Link from "next/link";


export default function Home() {
  return (
    <div>

      <h1>Welcome to My Website!</h1>
      <Image
        src='/music website main page.png'
        width={300}
        height={300}
        alt="Picture Test"
        className={globalStyle.image2}
        suppressHydrationWarning={true}
      />


      <p>This site will contain many aspects <br /> of William Devonshires music.</p>

      <Link href="/method">
        <h2>1. The Method</h2>
        <img src="https://i.ytimg.com/vi/bANjQqUVgvM/maxresdefault.jpg" alt="" />
      </Link>
      <p>A EPIC ADVENTURES <br /> for teaching musical concepts!</p>


      <div className={globalStyle.divider}></div>


      <Link href="/">
        <h2>2. Compositions & Productions</h2>
        <img src="https://d15fwz9jg1iq5f.cloudfront.net/wp-content/uploads/2017/02/21162709/03-Baroque.png" alt="" />
      </Link>
      <p>A library of all Williams compositions <br /> and various productions.</p>

      <div className={globalStyle.divider}></div>



      <Link href="/">
        <h2>3. Performance</h2>
        <img src="https://static01.nyt.com/images/2021/05/28/arts/27classical-streaming3/merlin_128991608_3bbd52b0-0e18-41be-b604-9bd43b647df3-articleLarge.jpg?quality=75&auto=webp&disable=upscale" alt="" />
      </Link>
      <p>Information regarding <br /> Williams live performances.</p>

      <div className={globalStyle.divider}></div>
      <br /><br />


    </div>
  )
}