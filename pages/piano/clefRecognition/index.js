import globalStyle from '../../../styles/Home.module.css';
import React, { useState } from 'react'
import Image from 'next/image';
import Link from "next/link";

const clefPicArray = [
    '/Piano/Clef Pics/trebleclef.jpg',
    '/Piano/Clef Pics/bassclef.png',
    '/Piano/Clef Pics/grandstaff.png',
]

export default function index() {
    const [randomClefPic, setRandomClefPic] = useState('/Piano/Clef Pics/trebleclef.jpg');
    const [tallyRight, setTallyRight] = useState(0);
    const [tallyWrong, setTallyWrong] = useState(0);
    const [message, setMessage] = useState('Lets play!');

    const handleCheckAnswer = (selectedClef) => {

        if (randomClefPic === selectedClef) {
            const randomNumber = Math.floor(Math.random() * 3);
            setRandomClefPic(clefPicArray[randomNumber]);
            setTallyRight(prev => prev + 1);
            setMessage('Correct!')

        } else {
            setTallyWrong(prev => prev + 1);
            setMessage('Opps! Try again.')
        }
    }


    return (
        <div className={globalStyle.center}>
            <div className={globalStyle.divider}>
                <h1>Piano</h1>
                <h2>Clef Names <br />Lesson</h2>
            </div>

            <p>While <b>most instruments have one clef,</b> <br />
                <b className={globalStyle.blue}>piano has 2 clefs:</b></p> <br />


            <p><b className={globalStyle.blue}>1. Treble Clef</b><br />
                (Right Hand)</p>

            <Image
                src={clefPicArray[0]}
                width={300}
                height={300}
                alt="Picture Test"
                layout="intrinsic"
            /> <br />

            <p>AND</p>

            <div className={globalStyle.divider}>
                <p><b className={globalStyle.blue}>2. Bass Clef</b><br />
                    (Left Hand)</p>

                <Image
                    src={clefPicArray[1]}
                    width={300}
                    height={300}
                    alt="Picture Test"
                    layout="intrinsic"
                /><br /><br /> <br />
            </div>

            <p>BUT they are joined together in what is called...</p>

            <p>the<b> GRAND STAFF</b></p>

            <Image
                src={clefPicArray[2]}
                width={300}
                height={300}
                alt="Picture Test"
                layout="intrinsic"
            /> <br /> <br /> <br /><br />


            <div className={globalStyle.flex}>
                <button>
                    <Link href="/piano/fingerNames/game">Back to: <br />Finger Name Game</Link>
                </button>

                <button>
                    <Link href="/piano/clefRecognition/game">Continue to: <br />Clef Name Game</Link>
                </button>
            </div> <br /> <br /> <br />

        </div>
    )
}
