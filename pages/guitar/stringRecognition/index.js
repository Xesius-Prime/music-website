import styles from './stringRecognition.module.css';
import Image from 'next/image';
import Link from "next/link";
import globalStyle from '../../../styles/Home.module.css';


export default function index() {

    return (
        <div className={styles.center}>
            <h1>String Names Guitar</h1> <br />

            <iframe width="560" height="315" src="https://www.youtube.com/embed/D-GJFnyrSrI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className={globalStyle.video}></iframe>

            <p>_______________________________________</p>

            <p>Looking down at your guitar with it tilted back on your lap, <br />
                and the strings facing up at you,</p>

            <Image
                src='/Guitar/String Names/All.png'
                width={300}
                height={300}
                alt="Picture Test"
                layout="intrinsic"
            /> <br /> <br />

            <div className={styles.width}>
                <p><b>E (blue), A (red), D (green), G (orange), B (yellow), e (pink)</b></p> <br />

                <p>Play it again, and as you do say: <br /><b>Eddy, Ate, Dynamite... Good, Bye, eddy</b> <br /><b>E, A, D... G, B, e</b></p> <br />
            </div>


            <div className={globalStyle.flex}>
                <button><Link href="/guitar/holding">Back to Holding a Guitar</Link></button>
                <button><Link href="/guitar/stringRecognition/game">Continue to Practice Game</Link></button>
            </div> <br /> <br /> <br />
        </div>
    )
}

