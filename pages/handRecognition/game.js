import React, { useState } from 'react'
import Link from "next/link";
import styles from './handRecognition.module.css';
import globalStyles from '../../styles/Home.module.css'
import Image from 'next/image';

const fingersArray = [
    '/Hand Recognition/left hand.png',
    '/Hand Recognition/right hand.png'
]

export default function index() {
    const [randomFingerPic, setRandomFingerPic] = useState('/Hand Recognition/left hand.png');
    const [message, setMessage] = useState('Lets play!');
    const [tallyRight, setTallyRight] = useState(0);
    const [tallyWrong, setTallyWrong] = useState(0);


    const handleCheckAnswer = (selectedFinger) => {

        if (randomFingerPic === selectedFinger) {

            setMessage('Correct!');
            const randomNumber = Math.floor(Math.random() * fingersArray.length);
            setRandomFingerPic(fingersArray[randomNumber]);
            setTallyRight(prev => prev + 1);

        } else {
            setMessage('Opps! Try again.')
            setTallyWrong(prev => prev + 1);
        }
    }


    return (
        <div className={globalStyles.center}>
            <h1>Finger Recognition</h1>

            <Image
                src={randomFingerPic}
                width={300}
                height={300}
                alt="Picture Test"
                className={globalStyles.image}
                suppressHydrationWarning={true}
            />

            <p className={styles.p}>{message}</p><br />

            <button>Right Hand</button> <br />
            <button>Left Hand</button>

            <div className={globalStyles.navbar}>
                <h1 style={globalStyles.tallyRight}>Correct: {tallyRight}</h1>
                <h1 style={globalStyles.tallyWrong}>Incorrect {tallyWrong}</h1>
            </div>

        </div>
    )
}
