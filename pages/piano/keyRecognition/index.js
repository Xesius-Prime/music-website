import styles from '../fingerNames/fingerNames.module.css';
import globalStyle from "../../../styles/Home.module.css";
import Image from 'next/image';
import Link from "next/link";


export default function pianoFingersPractice() {

    return (
        <div className={styles.center}>
            <h1>Key Recognition <br />Lesson</h1>

            <Image
                src='/Piano/Key Names/key names.png'
                width={300}
                height={300}
                alt="Picture Test"
                layout="intrinsic"
                className={styles.image}
            />

            <p>__________________________________________</p>

            <h2><b>Why Is Key Recognition So Important?</b></h2>

            <p>__________________________________________</p>


            <p className={globalStyle.color2}>Think about how <b>valuable</b> it is to <b>read.</b><br /><br />
                You read books, signs, texts, emails, articles. <br /><br />
                <b>Imagine if you couldn't read.</b></p>

            <p>__________________________________________</p>


            <p className={globalStyle.color3}>Think about how <b className={globalStyle.blue}>valuable</b> it is to <b className={globalStyle.blue}>read music.</b> <br /><br />
                Likely <b className={globalStyle.blue}>EVERYTHING</b> you do in music <br /> will be <b className={globalStyle.blue}>enhanced!</b> <br /><br />
                Imagine if you could understand <b className={globalStyle.blue}>keys and notes</b> as easily as you understand <b className={globalStyle.blue}>letters.</b></p>

            <p>__________________________________________</p>


            <p className={globalStyle.color2}>
                You learn letters to read. <br />
                You learn keys and notes to read music.</p>

            <p>__________________________________________</p>


            <p className={globalStyle.color3}>Once you know the key names, you will be able to start playing some of your favourite songs!</p>

            <p>__________________________________________</p><br /><br /><br />



            <div className={globalStyle.flex}>
                <button>
                    <Link href="/piano/fingerNames">Back to: <br />Finger Name Game</Link>
                </button>

                <button>
                    <Link href="/piano/keyRecognition">Continue to: <br />Key Recognition Lesson</Link>
                </button>
            </div> <br /> <br /> <br />
        </div>
    )
}
