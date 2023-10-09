import styles from '../fingerNames/fingerNames.module.css';
import globalStyle from "../../../../styles/Home.module.css";
import Image from 'next/image';
import Link from "next/link";


export default function pianoFingersPractice() {

    return (
        <div>
            <div className={globalStyle.scrunch}>
                <h1>Piano</h1>
                <h2>Key Recognition <br />Lesson</h2> <br />

                <div className={globalStyle.divider}></div><br />

                <h2><b>Why Is Key Recognition So Important?</b></h2>
                <Image
                    src='/Piano/Key Names/key names.png'
                    width={300}
                    height={300}
                    alt="Picture Test"
                    layout="intrinsic"
                    className={styles.image}
                />


                <p className={globalStyle.color2}>Think about how <b>valuable</b> it is to <b>read.</b><br /><br />
                    You read books, signs, texts, emails, articles. <br /><br />
                    <b>Imagine if you couldn't read.</b></p><br />

                <div className={globalStyle.divider}></div>

                <p className={globalStyle.color3}>Think about how <b className={globalStyle.blue}>valuable</b> it is to <b className={globalStyle.blue}>read music.</b> <br /><br />
                    Likely <b className={globalStyle.blue}>EVERYTHING</b> you do in music <br /> will be <b className={globalStyle.blue}>enhanced!</b> <br /><br />
                    Imagine if you could understand <b className={globalStyle.blue}>keys and notes</b> as easily as you understand <b className={globalStyle.blue}>letters.</b></p><br />

                <div className={globalStyle.divider}></div>



                <p className={globalStyle.color2}>
                    You learn letters to read. <br />
                    You learn keys and notes to read music.</p> <br />

                <div className={globalStyle.divider}></div>



                <p className={globalStyle.color3}>Once you know the key names, you will be able to start playing some of your favourite songs!</p> <br />

                <div className={globalStyle.divider}></div>
                <br /><br /><br />


            </div>
            <div className={globalStyle.flex}>
                <button>
                    <Link href="/method/piano/clefRecognition/game">Back to: <br />Clef Name Game</Link>
                </button>

                <button>
                    <Link href="/method/piano/keyRecognition/blackKeys">Continue to: <br />Black Keys Lesson</Link>
                </button>
            </div> <br /> <br /> <br />
        </div>
    )
}
