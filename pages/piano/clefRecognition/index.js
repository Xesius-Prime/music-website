import styles from '../../../styles/Home.module.css';
import React, { useState } from 'react'
import Image from 'next/image';

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
        <div className={styles.center}>
            <h1>Piano Clef Recognition</h1>

            <Image
                src={randomClefPic}
                width={300}
                height={300}
                alt="Picture Test"
                layout="intrinsic"
            />

            <p className={styles.p}>{message}</p><br />

            <div className={styles.buttonContainer}>
                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(clefPicArray[0])}>Treble Clef</button>
                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(clefPicArray[1])}>Bass Clef</button>
                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(clefPicArray[2])}>Grand Staff</button>
            </div>

            <div className={styles.navbar}>
                <h1>Correct: {tallyRight}</h1>
                <h1>Incorrect {tallyWrong}</h1>
            </div>
        </div>
    )
}
