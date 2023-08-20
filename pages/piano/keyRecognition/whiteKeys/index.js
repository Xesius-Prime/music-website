import styles from '../../fingerNames/fingerNames.module.css';
import Image from 'next/image';
import Link from "next/link";


export default function pianoFingersPractice() {

    return (
        <div className={styles.center}>
            <h1>White Key Names</h1>

            <Image
                src='/Piano/Key Names/key names.png'
                width={300}
                height={300}
                alt="Picture Test"
                layout="intrinsic"
                className={styles.image}
            />

            <p>__________________________________________</p>

            <h2>C, D & E</h2>

            <Image
                src='/Piano/Key Names/White Keys/CDE2.png'
                width={300}
                height={300}
                alt="Picture Test"
                layout="intrinsic"
                className={styles.image}
            />

            <p>On the group of 2 BLACK keys <br /> is the 3 WHITE keys C, D & E.</p>

            <p>Click this button to practice just C, D & E.</p>
            <button><a href="https://www.musictheory.net/exercises/keyboard/y8yyyynbyyy">Practice <br /> C, D & E</a></button>

            <p>__________________________________________</p>

            <h2>F, G, A & B</h2>

            <Image
                src='/Piano/Key Names/White Keys/FGAB2.png'
                width={300}
                height={300}
                alt="Picture Test"
                layout="intrinsic"
                className={styles.image}
            />

            <p>On the group of 3 BLACK keys <br /> is the 4 WHITE keys F, G, A & B.</p>

            <p>Click this button to practice just C, D & E.</p>
            <button><a href="https://www.musictheory.net/exercises/keyboard/yadyyynbyyy">Practice <br />F, G, A & B</a></button>

            <p>__________________________________________</p>

            <h2>ALL White Keys</h2>

            <Image
                src='/Piano/Key Names/key names.png'
                width={300}
                height={300}
                alt="Picture Test"
                layout="intrinsic"
                className={styles.image}
            />

            <p>Click this button to practice <br /> all the WHITE KEY names</p>
            <button><a href="https://www.musictheory.net/exercises/keyboard/y9dyyynbyyy">Practice <br />ALL WHITE KEYS</a></button>

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
