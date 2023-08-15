import styles from '../../../styles/Home.module.css';
import React, { useState } from 'react'
import Image from 'next/image';

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
        <div className={styles.center}>
            <h1>Piano Clef Recognition</h1>

            <Image
                src={randomHoldingUkulelePic}
                width={300}
                height={300}
                alt="Picture Test"
                layout="intrinsic"
            />

            <p className={styles.p}>{message}</p><br />

            <div className={styles.buttonContainer}>
                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(holdingUkulelePicArray[0])}>Yes</button>
                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(holdingUkulelePicArray[1])}>No</button>
            </div>

            <div className={styles.navbar}>
                <h1>Correct: {tallyRight}</h1>
                <h1>Incorrect {tallyWrong}</h1>
            </div>
        </div>
    )
}
