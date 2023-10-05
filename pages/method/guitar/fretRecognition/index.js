
import Image from 'next/image';
import Link from "next/link";
import globalStyle from '../../../../styles/Home.module.css';


export default function index() {

    return (
        <div>
            <h1>Guitar</h1>
            <h2>Tab to Fretboard<br /> Lesson</h2><br />

            <iframe width="560" height="315" src="https://www.youtube.com/embed/uAHTWsOG9k8?si=ziFWOO8kiWbStAjT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className={globalStyle.video}></iframe> <br /> <br /> <br />

            <div className={globalStyle.flex}>
                <button><Link href="/method/guitar/fingerRecognition/game">Back to: <br /> Finger Names Game</Link></button>
                <button><Link href="/method/guitar/fretRecognition/game">Continue to: <br /> Tab to Fretboard Game</Link></button>
            </div> <br /> <br /> <br />
        </div>
    )
}

