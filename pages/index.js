import globalStyle from '../styles/Home.module.css';
import Image from 'next/image';
import Link from "next/link";


export default function Home() {
  return (
    <div>

      <h1>Welcome to My Website!</h1> <br />
      <img src="https://static.wixstatic.com/media/440b2a_44d67416aaa948498fe7d51ca3b80e33~mv2.jpg/v1/crop/x_0,y_0,w_548,h_643/fill/w_506,h_592,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2b0935d6650f47e786da6c05ab9a029a_edited.jpg" alt="" />


      <p>This site will contain the many aspects <br /> of William Devonshires music career.</p>
      <p>(I should have some text first, and then a video here, <br /> to explain how the website works etc give a brief overview.)</p>
      <div className={globalStyle.divider}></div>


      <div className={globalStyle.flex}>
        <div>
          <Link href="/method">
            <h2>Music Lessons</h2>
            <img src="https://cdn.musichouseschool.com/VirtualPianoLessons.jpg" alt="" />
          </Link>
          <p>EPIC ADVENTURES <br /> for teaching musical concepts!</p>
        </div>



        <div>
          <Link href="/">
            <h2>Compositions & Productions</h2>
            <img src="https://media.output.com/app/uploads/2021/07/STUDIO_CO_IMAGE-1-16-9.jpg?auto=format,compress" alt="" />
          </Link>
          <p>A library of all Williams compositions <br /> and various productions.</p>
        </div>



        <div>
          <Link href="/">
            <h2>Performance</h2>
            <img src="https://media.istockphoto.com/id/1185599903/photo/guitar-player-in-a-caf%C3%A9.jpg?s=612x612&w=0&k=20&c=Jl6ZyX-7HxblpdpcHLHCGhXlN8SzmoG4YP01aHrh0vc=" alt="" />
          </Link>
          <p>Information regarding <br /> Williams live performances.</p>
        </div>

      </div>


    </div>
  )
}