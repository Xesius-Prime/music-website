import styles from './fingerNames.module.css';
import Image from 'next/image';
import Link from "next/link";
import globalStyle from "../../../styles/Home.module.css"


export default function pianoFingersPractice() {

    return (
        <div>
            <div className={styles.center}>
                <h1>Finger Names & Game <br /> for Piano</h1><br />

                <Image
                    src='/Piano/Finger Pics/piano finger names.png'
                    width={300}
                    height={300}
                    alt="Picture Test"
                    layout="intrinsic"
                /> <br /> <br />

                <p>Thumbs are always 1.</p>
            </div><br /><br /><br />

            <div className={globalStyle.flex}>
                <button>
                    <Link href="/piano">Back to: <br />Piano Overview</Link>
                </button>

                <button>
                    <Link href="/piano/fingerNames/game">Continue to: <br /> Finger Name Game</Link>
                </button>
            </div> <br /> <br /> <br />
        </div>
    )
}
