import globalStyle from '../styles/Home.module.css';
import Image from 'next/image';
import Link from "next/link";


export default function Home() {
  return (
    <div>

      <h1>Welcome to My Website!</h1> <br />
      <img src="https://static.wixstatic.com/media/440b2a_fefb40dd6b734cca91503f03ece9c696~mv2.png/v1/crop/x_0,y_36,w_369,h_375/fill/w_516,h_525,al_c,lg_1,q_85,enc_auto/Untitled%20design.png" alt="" />


      <p>This site will contain the many aspects <br /> of William Devonshires music career.</p>
      <p>(I should have some text first, and then a video here, <br /> to explain how the website works etc give a brief overview.)</p>
      <div className={globalStyle.divider}></div>


      <Link href="/method">
        <h2>1. The Method</h2>
        <img src="https://i.ytimg.com/vi/bANjQqUVgvM/maxresdefault.jpg" alt="" />
      </Link>
      <p>EPIC ADVENTURES <br /> for teaching musical concepts!</p>


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

      <br />


    </div>
  )
}