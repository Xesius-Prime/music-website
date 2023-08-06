import styles from '../../../styles/Home.module.css';
import React, { useState } from 'react'
import Image from 'next/image';

const fingerPicArray = [
    '/Piano/Finger Pics/LH 1.png',
    '/Piano/Finger Pics/LH 2.png',
    '/Piano/Finger Pics/LH 3.png',
    '/Piano/Finger Pics/LH 4.png',
    '/Piano/Finger Pics/LH 5.png',

    '/Piano/Finger Pics/RH 1.png',
    '/Piano/Finger Pics/RH 2.png',
    '/Piano/Finger Pics/RH 3.png',
    '/Piano/Finger Pics/RH 4.png',
    '/Piano/Finger Pics/RH 5.png'
]


export default function pianoFingersPractice() {
    const [randomFingerPic, setRandomFingerPic] = useState('/Piano/Finger Pics/LH 1.png');
    const [tallyRight, setTallyRight] = useState(0);
    const [tallyWrong, setTallyWrong] = useState(0);
    const [message, setMessage] = useState('Lets play!');

    const handleCheckAnswer = (selectedHandAndFinger) => {

        if (randomFingerPic === selectedHandAndFinger) {
            const randomNumber = Math.floor(Math.random() * 10);
            setRandomFingerPic(fingerPicArray[randomNumber]);
            setTallyRight(prev => prev + 1);
            setMessage('Correct!')

        } else {
            setTallyWrong(prev => prev + 1);
            setMessage('Opps! Try again.')
        }
    }


    return (
        <div className={styles.center}>
            <h1>Piano Finger Recognition Practice</h1>

            <Image
                src={randomFingerPic}
                width={300}
                height={300}
                alt="Picture Test"
                layout="intrinsic"
            />

            <p className={styles.p}>{message}</p><br />

            <div className={styles.buttonContainer}>
                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(fingerPicArray[0])}>LH Finger 1</button>
                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(fingerPicArray[1])}>LH Finger 2</button>
                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(fingerPicArray[2])}>LH Finger 3</button>
                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(fingerPicArray[3])}>LH Finger 4</button>
                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(fingerPicArray[4])}>LH Finger 5</button>
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(fingerPicArray[5])}>RH Finger 1</button>
                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(fingerPicArray[6])}>RH Finger 2</button>
                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(fingerPicArray[7])}>RH Finger 3</button>
                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(fingerPicArray[8])}>RH Finger 4</button>
                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(fingerPicArray[9])}>RH Finger 5</button>
            </div>

            <div className={styles.navbar}>
                <h1>Correct: {tallyRight}</h1>
                <h1>Incorrect {tallyWrong}</h1>
            </div>
        </div>
    )
}
