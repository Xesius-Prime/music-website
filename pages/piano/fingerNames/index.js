import styles from './fingerNames.module.css';
import Image from 'next/image';
import Link from "next/link";
import globalStyle from "../../../styles/Home.module.css"


export default function pianoFingersPractice() {

    return (
        <div>
            <div className={styles.center}>
                <h1>Finger Names & Game <br /> for Piano</h1>

                <Image
                    src='/Piano/Finger Pics/piano finger names.png'
                    width={300}
                    height={300}
                    alt="Picture Test"
                    layout="intrinsic"
                />

                <p>Click the button below to go to a game where you can practice your piano finger name recognition, and solidify what you've learnt!</p>


                <button>
                    <Link
                        href="/piano/fingerNames/game">
                        PRACTICE GAME
                    </Link>
                </button>
                <br /> <br /> <br />
            </div>

            <div className={globalStyle.flex}>
                <button>
                    <Link href="/guitar/fretRecognition/game">Back to: <br /> Fret Recognition Game</Link>
                </button>

                <button>
                    <Link href="/guitar/findNoteOnString/game">Continue to: <br /> Find Note on String Game</Link>
                </button>

            </div> <br /> <br /> <br />
        </div>
    )
}
