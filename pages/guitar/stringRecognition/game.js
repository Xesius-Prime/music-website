import React, { useState } from 'react'
import globalStyles from '../../../styles/Home.module.css';
import styles from '../chordRecognition/chordPatterns.module.css';
import Image from 'next/image';
import Link from "next/link";

const stringsArray = [
    '/Guitar/String Names/little e.png',
    '/Guitar/String Names/B.png',
    '/Guitar/String Names/G.png',
    '/Guitar/String Names/D.png',
    '/Guitar/String Names/A.png',
    '/Guitar/String Names/big E.png',
]

export default function index() {
    const [randomStringPic, setRandomStringPic] = useState('/Guitar/String Names/A.png');
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
            <h1>String Name Game</h1>

            <div className={globalStyles.flexNoWrap}>
                <h1 className={globalStyles.tallyCorrect}>V {tallyRight}</h1>

                <Image
                    src={randomStringPic}
                    width={300}
                    height={300}
                    alt="Picture Test"
                    layout="intrinsic"
                    className={globalStyles.oneThird}
                />

                <h1 className={globalStyles.tallyIncorrect}>X {tallyWrong}</h1>
            </div>


            <p className={styles.p}>{message}</p><br />


            <div className={styles.buttonContainer}>
                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(stringsArray[5])}>
                    E
                </button>

                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(stringsArray[4])}>
                    A
                </button>
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(stringsArray[3])}>
                    D
                </button>

                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(stringsArray[2])}>
                    G
                </button>

                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(stringsArray[1])}>
                    B
                </button>

                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(stringsArray[0])}>
                    e
                </button>
            </div> <br /> <br /> <br />



            <div className={globalStyles.flex}>
                <button><Link href="/guitar/stringRecognition">Back to: <br /> String Name Lesson</Link></button>
                <button><Link href="/guitar/fingerRecognition">Continue to: <br /> Finger Names</Link></button>
            </div> <br /> <br /> <br />
        </div>
    )
}
