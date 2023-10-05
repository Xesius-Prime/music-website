import globalStyle from '../../../../styles/Home.module.css';
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

const holdingUkulelePicArray = [
    '/Ukulele/Holding the Ukulele/left hand ukulele.png',
    '/Ukulele/Holding the Ukulele/right hand ukulele.png'
]

export default function index() {
    const [randomHoldingUkulelePic, setRandomHoldingUkulelePic] = useState('/Ukulele/Holding the Ukulele/left hand ukulele.png');
    const [tallyRight, setTallyRight] = useState(0);
    const [tallyWrong, setTallyWrong] = useState(0);
    const [message, setMessage] = useState('Lets play!');

    const handleCheckAnswer = (selectedAnswer) => {

        if (randomHoldingUkulelePic === selectedAnswer) {
            const randomNumber = Math.floor(Math.random() * 2);
            setRandomHoldingUkulelePic(holdingUkulelePicArray[randomNumber]);
            setTallyRight(prev => prev + 1);
            setMessage('Correct!')

        } else {
            setTallyWrong(prev => prev + 1);
            setMessage('Opps! Try again.')
        }
    }


    return (
        <div className={globalStyle.center}>
            <h1>Ukulele</h1>
            <h2>Holding the Ukulele <br />Game</h2><br />

            <Image
                src={randomHoldingUkulelePic}
                width={300}
                height={300}
                alt="Picture Test"
                layout="intrinsic"
            />

            <div className={globalStyle.navbar}>
                <h1 className={globalStyle.tallyCorrect}>{tallyRight}</h1>
                <p className={globalStyle.p}>{message}</p>
                <h1 className={globalStyle.tallyIncorrect}>{tallyWrong}</h1>
            </div><br />


            <div className={globalStyle.buttonContainer}>
                <button className={globalStyle.buttons}
                    onClick={() => handleCheckAnswer(holdingUkulelePicArray[0])}>Yes</button>
                <button className={globalStyle.buttons}
                    onClick={() => handleCheckAnswer(holdingUkulelePicArray[1])}>No</button>
            </div><br /><br /><br />

            <div className={globalStyle.flex}>
                <button><Link href="/method/ukulele/holdingUkulele">Back to: <br /> Holding the Ukulele Lesson</Link></button>
                <button><Link href="/method/ukulele/stringRecognition">Continue to: <br /> String Name Lesson</Link></button>
            </div><br /><br />
        </div>
    )
}
