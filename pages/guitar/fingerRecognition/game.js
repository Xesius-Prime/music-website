import React, { useState } from 'react'
import globalStyles from '../../../styles/Home.module.css';
import styles from '../chordRecognition/chordPatterns.module.css';
import Image from 'next/image';
import Link from "next/link";

const fingersArray = [
    '/Guitar/Finger Names/fretting hand 0.png',
    '/Guitar/Finger Names/fretting hand 1.png',
    '/Guitar/Finger Names/fretting hand 2.png',
    '/Guitar/Finger Names/fretting hand 3.png',
    '/Guitar/Finger Names/fretting hand 4.png',

    '/Guitar/Finger Names/plucking hand p.png',
    '/Guitar/Finger Names/plucking hand i.png',
    '/Guitar/Finger Names/plucking hand m.png',
    '/Guitar/Finger Names/plucking hand a.png',
    '/Guitar/Finger Names/plucking hand c s.png',
]

export default function index() {
    const [randomFingerPic, setRandomFingerPic] = useState('/Guitar/Finger Names/plucking hand c s.png');
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


            <div className={styles.buttonContainer}>
                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(fingersArray[3])}>
                    3
                </button>

                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(fingersArray[1])}>
                    1
                </button>

                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(fingersArray[2])}>
                    2
                </button>

                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(fingersArray[0])}>
                    0
                </button>

                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(fingersArray[4])}>
                    4
                </button>
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(fingersArray[9])}>
                    c/s
                </button>

                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(fingersArray[7])}>
                    m
                </button>

                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(fingersArray[8])}>
                    a
                </button>

                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(fingersArray[5])}>
                    p
                </button>

                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(fingersArray[6])}>
                    i
                </button>
            </div>

            <div className={globalStyles.navbar}>
                <h1 style={globalStyles.tallyRight}>Correct: {tallyRight}</h1>
                <h1 style={globalStyles.tallyWrong}>Incorrect {tallyWrong}</h1>
            </div>

            <div className={globalStyles.flex}>
                <button><Link href="/guitar/fingerRecognition">Back to: Finger Name Lesson</Link></button>
                <button><Link href="/guitar/fretRecognition">Continue to: Frets Lesson</Link></button>
            </div> <br /> <br /> <br />
        </div>
    )
}
