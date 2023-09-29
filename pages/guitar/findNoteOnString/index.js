
import Image from 'next/image';
import Link from "next/link";
import globalStyle from '../../../styles/Home.module.css';


export default function index() {

    return (
        <div>
            <h1>Find Note On String</h1> <br />

            <h2>T = Tone = +2 or -2 frets</h2>
            <h2>S = Semitone = +1 or -1 frets</h2>

            <Image
                src='/Theory/Tones and Semitones Natural Notes.png'
                width={300}
                height={300}
                alt="Picture Test"
                layout="intrinsic"
            /> <br />

            <p>To remember the pattern above say this: </p>
            <h2>They're ALL Tones, except BC & EF.</h2>


            <iframe width="560" height="315" src="https://www.youtube.com/embed/zttjkHvI_Zc?si=fdjPJI1tb6_mlpmI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className={globalStyle.video}></iframe> <br /> <br /> <br />

            <div className={globalStyle.flex}>
                <button><Link href="/guitar/fretRecognition/game">Back to: <br /> Fret Recognition Game</Link></button>
                <button><Link href="/guitar/findNoteOnString/game">Continue to: <br /> Find Note on String Game</Link></button>
            </div> <br /> <br /> <br />
        </div>
    )
}

