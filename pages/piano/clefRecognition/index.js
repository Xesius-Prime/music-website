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
            <h1>Piano Clef Recognition</h1><br />

            <div className={globalStyle.navbar}>
                <h1 className={globalStyle.tallyCorrect}>V {tallyRight}</h1>
                <Image
                    src={randomClefPic}
                    width={300}
                    height={300}
                    alt="Picture Test"
                    layout="intrinsic"
                />
                <h1 className={globalStyle.tallyIncorrect}>X {tallyWrong}</h1>
            </div><br />

            <p className={globalStyle.p}>{message}</p><br />

            <div className={globalStyle.buttonContainer}>
                <button className={globalStyle.buttons}
                    onClick={() => handleCheckAnswer(clefPicArray[0])}>Treble Clef</button>
                <button className={globalStyle.buttons}
                    onClick={() => handleCheckAnswer(clefPicArray[1])}>Bass Clef</button>
                <button className={globalStyle.buttons}
                    onClick={() => handleCheckAnswer(clefPicArray[2])}>Grand Staff</button>
            </div><br /><br /><br />



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
