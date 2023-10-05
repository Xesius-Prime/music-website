
import Image from 'next/image';
import Link from "next/link";
import globalStyle from '../../../../styles/Home.module.css';


export default function index() {

    return (
        <div>
            <div className={globalStyle.divider}>
                <h1>Guitar</h1>
                <h2>Find Note On String <br /> Lesson</h2> <br />
            </div>

            <div className={globalStyle.divider}>
                <Image
                    src='/Theory/Tones and Semitones Natural Notes.png'
                    width={300}
                    height={300}
                    alt="Picture Test"
                    layout="intrinsic"
                /> <br />

                <h2><b>T = Tone = +2 or -2 frets</b></h2>
                <h2><b className={globalStyle.blue}>S = Semitone = +1 or -1 frets</b></h2><br />
            </div>

            <div className={globalStyle.divider}>
                <p>To remember the pattern above <br /> memorize this saying: </p>
                <h2>They're ALL <b>Tones</b>, except <b className={globalStyle.blue}> BC & EF.</b></h2><br />
            </div>






            <iframe width="560" height="315" src="https://www.youtube.com/embed/zttjkHvI_Zc?si=fdjPJI1tb6_mlpmI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className={globalStyle.video}></iframe> <br /> <br /> <br />

            <div className={globalStyle.flex}>
                <button><Link href="/method/guitar/fretRecognition/game">Back to: <br /> Fret Recognition Game</Link></button>
                <button><Link href="/method/guitar/findNoteOnString/game">Continue to: <br /> Find Note on String Game</Link></button>
            </div> <br /> <br /> <br />
        </div>
    )
}

