import Image from 'next/image';
import Link from "next/link";
import globalStyle from '../../../../styles/Home.module.css';


export default function index() {

    return (
        <div>
            <h1>Guitar</h1>
            <h2>Finger Names <br /> Lesson</h2><br />

            <Image
                src='/Guitar/Finger Names/guitar finger names.png'
                width={300}
                height={300}
                alt="Picture Test"
                layout="intrinsic"
            /> <br /> <br /> <br /> <br />


            <div className={globalStyle.flex}>
                <button><Link href="/method/guitar/stringRecognition/game">Back to: <br /> String Name Game</Link></button>
                <button><Link href="/method/guitar/fingerRecognition/game">Continue to: <br /> Finger Recognition Game</Link></button>
            </div> <br /> <br /> <br />
        </div>
    )
}

