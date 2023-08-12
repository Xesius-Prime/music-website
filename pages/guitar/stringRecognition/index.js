import styles from './stringRecognition.module.css';
import Image from 'next/image';
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'


export default function pianoFingersPractice() {

    return (
        <div className={styles.center}>
            <h1>String Names Guitar</h1>

            <Image
                src='/Guitar/String Names/All.png'
                width={300}
                height={300}
                alt="Picture Test"
                layout="intrinsic"
            /> <br /> <br />

            <Container>
                <div className="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/By93_ByoefE" title="YouTube video" allowFullScreen></iframe>
                </div>
            </Container>

            <p>Click the button below to go to a game where you can practice your piano finger name recognition, and solidify what you've learnt!</p>


            <button>
                <Link
                    href="/guitar/stringRecognition/game">
                    PRACTICE GAME
                </Link>
            </button>

        </div>
    )
}

