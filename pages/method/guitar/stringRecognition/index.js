import styles from './stringRecognition.module.css';
import Image from 'next/image';
import Link from "next/link";
import globalStyle from '../../../../styles/Home.module.css';


export default function index() {

    return (
        <div className={styles.center}>
            <h1>Guitar</h1>
            <h2>String Names <br /> Lesson</h2> <br />

            <iframe width="560" height="315" src="https://www.youtube.com/embed/D-GJFnyrSrI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className={globalStyle.video} allowfullscreen="true"></iframe> <br /> <br /> <br /> <br />


            <div className={globalStyle.flex}>
                <button><Link href="/method/guitar/holding">Back to: <br /> Holding a Guitar</Link></button>
                <button><Link href="/method/guitar/stringRecognition/game">Continue to: <br /> String Name Game</Link></button>
            </div> <br /> <br /> <br />
        </div>
    )
}

