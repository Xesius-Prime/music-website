import styles from './stringRecognition.module.css';
import Image from 'next/image';
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'


export default function pianoFingersPractice() {

    return (
        <div className={styles.center}>
            <h1>String Names Guitar</h1>

            <p>Looking down at your guitar with it tilted back on your lap,</p>

            <Image
                src='/Guitar/String Names/All.png'
                width={300}
                height={300}
                alt="Picture Test"
                layout="intrinsic"
            /> <br /> <br />

            <p> the BIGGEST string (blue) is called the <b>BIG E string.</b><br />
                The smallest string (pink) is called the <b>little e string.</b></p>

            <div className={styles.width}>
                <p>Start from the BIG E (blue), <br /> and play each individual string one after the other, <br /> until you reach the little e (pink), <br /> <br />It goes: <br /><b>E (blue), A (red), D (green), G (orange), B (yellow), e (pink)</b></p> <br />

                <p>Play it again, and as you do say: <br /><b>Eddy, Ate, Dynamite... Good, Bye, Eddy</b> <br /><b>E, A, D... G, B, e</b></p> <br />
            </div>



            <div className={styles.width}>

                <Container>
                    <div className="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/By93_ByoefE" title="YouTube video" allowFullScreen className={styles.width}></iframe>
                    </div>
                </Container>

                <p>Click the button below to go to a game where you can practice your piano finger name recognition, and solidify what you've learnt!</p>
            </div> <br />


            <button>
                <Link
                    href="/guitar/stringRecognition/game">
                    PRACTICE GAME
                </Link>
            </button> <br /> <br /> <br />

        </div>
    )
}

