import styles from '../fingerNames/fingerNames.module.css';
import Image from 'next/image';
import Link from "next/link";


export default function pianoFingersPractice() {

    return (
        <div className={styles.center}>
            <h1>Key Recognition</h1>

            <Image
                src='/Piano/Key Names/key names.png'
                width={300}
                height={300}
                alt="Picture Test"
                layout="intrinsic"
                className={styles.image}
            />

            <p>__________________________________________</p>

            <h2>Why Key Recognition Is So Important?</h2>

            <p>Learning to read keys with piano, is like learning to sound out letters in a book.</p>

            <p>Basically EVERYTHING ELSE you will do in piano, rests on your ability to identify the keys.</p>

            <p>Once you can identify the key names, you will be able to start playing some songs, and thats what you're here for right? You want to play songs.</p>

            <p>__________________________________________</p>



            <button>
                <Link
                    href="/piano/keyRecognition/blackKeys">
                    BLACK KEYS
                </Link>
            </button> <br /> <br />

        </div>
    )
}
