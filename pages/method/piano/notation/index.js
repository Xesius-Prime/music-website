import styles from '../fingerNames/fingerNames.module.css';
import globalStyle from "../../../../styles/Home.module.css";
import Image from 'next/image';
import Link from "next/link";


export default function pianoFingersPractice() {

    return (
        <div>
            <div>
                <h1>Piano</h1>
                <h2>Notation <br />Lesson</h2>

                <div className={globalStyle.divider}></div>

                <h2>Note Names</h2>
                <div className={globalStyle.leftAlign}>
                    <p>There are 4 note name groups that we want to memorize. <br /> It's quite easy, you'll see.</p>
                </div>
                <Image
                    src='/Piano/Notation/note names grand staff beginner 4.png'
                    width={300}
                    height={300}
                    alt="Picture Test"
                    layout="intrinsic"
                    className={styles.image}
                />
                <br />

                <div className={globalStyle.divider}></div>

                <h3>FACE:</h3>
                <div className={globalStyle.leftAlign}>
                    <p>First lets start with the notes on the <b>Treble Clef Spaces</b>, or in other words the top left one, thats squared in blue in the picture above, and says FACE.</p>
                    <p>This one is the easiest perhaps of them all, because it spells FACE.</p>
                </div>

                <button><a href="https://www.musictheory.net/exercises/note/oyqsyryyynnyyry">Click Here to: <br /> Practice FACE</a></button>




                <div className={globalStyle.divider}></div>

                <h3>EGBDF <br />Every Good Buddy Deserves Friends:</h3>
                <div className={globalStyle.leftAlign}>
                    <p>Next we will do the notes on the <b>Treble Clef Lines</b>, or in other words the top right red square in the picture above.</p>
                    <p>From the bottom up it goes EGBDF, you can remember this by saying "Every Good Buddy Deserves Friends".</p>
                </div>

                <button><a href="https://www.musictheory.net/exercises/note/oyqsyryyynbyyry">Click Here to: <br /> Practice EGBDF</a></button>




                <div className={globalStyle.divider}></div>

                <h3>ACE G:</h3>
                <div className={globalStyle.leftAlign}>
                    <p>Now we are doing the notes on the <b>Bass Clef Spaces</b>, or in other words: the ones in the bottom left green square.</p>
                    <p>This one is like FACE, but think of it as a first name and a last name.</p>
                    <p>He is a little mouse who's name is Ace G.</p>
                    <p>They call him Ace cause he's really good at flying the airplane,</p>
                    <p>and his last name is G cause it stands for "Genius" cause he built the airplane himself.</p>
                </div>

                <button><a href="https://www.musictheory.net/exercises/note/oynkyryyynnyyry">Click Here to: <br /> Practice ACE G</a></button>




                <div className={globalStyle.divider}></div>

                <h3>GBDFA <br />Good Buddies Deserve Friends Always:</h3>
                <div className={globalStyle.leftAlign}>
                    <p>Now we are doing the last one. The notes on the <b>Bass Clef Lines</b>, or in other words the ones in the bottom right purple square.</p>
                    <p>Notice this last one is basically the exact same as EGBDF, but the only difference is that it starts on G (Good), instead of E (Every).</p>
                    <p>So once you've learnt Every Good Buddy Deserves Friends, then learning Good Buddies Deserve Friends Always, is quite easy, since you just start on G (Good), and add the A (Always) at the end.</p>
                </div>

                <button><a href="https://www.musictheory.net/exercises/note/oynkyryyynbyyry">Click Here to: <br /> Practice GBDFA</a></button>

                <div className={globalStyle.divider}></div>



                <h2>Now do them all</h2>
                <div className={globalStyle.leftAlign}>
                    <p>Now that you've familiarized yourself with each one individually, lets now try them all together.</p>
                </div>

                <button><a href="https://www.musictheory.net/exercises/note/oynsyryyynyyyry">Click Here to: <br /> Practice All Together</a></button>

                <div className={globalStyle.divider}></div>


            </div><br /><br />

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
