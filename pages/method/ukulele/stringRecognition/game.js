import React, { useState } from 'react'
import globalStyles from '../../../../styles/Home.module.css';
import styles from '../../guitar/chordRecognition/chordPatterns.module.css';
import Image from 'next/image';

const stringsArray = [
    '/Ukulele/String Recognition/G.png',
    '/Ukulele/String Recognition/C.png',
    '/Ukulele/String Recognition/E.png',
    '/Ukulele/String Recognition/A.png'
]

export default function index() {
    const [randomStringPic, setRandomStringPic] = useState('/Ukulele/String Recognition/A.png');
    const [message, setMessage] = useState('Lets play!');
    const [tallyRight, setTallyRight] = useState(0);
    const [tallyWrong, setTallyWrong] = useState(0);


    const handleCheckAnswer = (selectedChord) => {

        if (randomStringPic === selectedChord) {

            setMessage('Correct!');
            const randomNumber = Math.floor(Math.random() * stringsArray.length);
            setRandomStringPic(stringsArray[randomNumber]);
            setTallyRight(prev => prev + 1);

        } else {
            setMessage('Opps! Try again.')
            setTallyWrong(prev => prev + 1);
        }
    }


    return (
        <div className={globalStyles.center}>
            <h1>String Recognition</h1><br /><br />

            <Image
                src={randomStringPic}
                width={300}
                height={300}
                alt="Picture Test"
                layout="intrinsic"
            />

            <div className={globalStyles.navbar}>
                <h1 className={globalStyles.tallyCorrect}>{tallyRight}</h1>
                <p className={styles.p}>{message}</p>
                <h1 className={globalStyles.tallyIncorrect}>{tallyWrong}</h1>
            </div>



            <div className={styles.buttonContainer}>
                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(stringsArray[1])}>
                    C
                </button>

                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(stringsArray[3])}>
                    A
                </button>
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(stringsArray[0])}>
                    G
                </button>

                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(stringsArray[2])}>
                    E
                </button>
            </div>



        </div>
    )
}
