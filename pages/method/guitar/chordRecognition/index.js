import React, { useState } from 'react'
import globalStyles from '../../../styles/Home.module.css';
import styles from './chordPatterns.module.css';
import Image from 'next/image';

const chordsArray = [
    "/Guitar/Guitar Chord Patterns/Major Chord with Root on A String.png",
    "/Guitar/Guitar Chord Patterns/Major Chord with Root on E String.png",

    "/Guitar/Guitar Chord Patterns/Minor Chord with Root on A String.png",
    "/Guitar/Guitar Chord Patterns/Minor Chord with Root on E String.png"
]


export default function majorChordOrMinorForGuitar() {
    const [randomChordPic, setRandomChordPic] = useState("/Guitar/Guitar Chord Patterns/Major Chord with Root on A String.png");
    const [message, setMessage] = useState('Lets play!');
    const [tallyRight, setTallyRight] = useState(0);
    const [tallyWrong, setTallyWrong] = useState(0);


    const handleCheckAnswer = (selectedChord) => {

        if (randomChordPic === selectedChord) {

            setMessage('Correct!');
            const randomNumber = Math.floor(Math.random() * chordsArray.length);
            setRandomChordPic(chordsArray[randomNumber]);
            setTallyRight(prev => prev + 1);

        } else {
            setMessage('Opps! Try again.')
            setTallyWrong(prev => prev + 1);
        }
    }


    return (
        <div className={globalStyles.center}> <br />
            <h1>Guitar Chord Pattern Recognition</h1> <br /> <br />

            <div className={globalStyles.navbar}>
                <h1 className={globalStyles.tallyRight}>V {tallyRight}</h1>
                <Image
                    src={randomChordPic}
                    width={300}
                    height={300}
                    alt="Picture Test"
                    layout="intrinsic"
                />
                <h1 className={globalStyles.tallyWrong}>X {tallyWrong}</h1>
            </div> <br />

            <p className={styles.p}>{message}</p><br />


            <div className={styles.buttonContainer}>
                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(chordsArray[0])}>
                    Major Chord, Root on A String
                </button>

                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(chordsArray[2])}>
                    Minor Chord, Root on A String
                </button>
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(chordsArray[1])}>
                    Major Chord, Root on E String
                </button>

                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer(chordsArray[3])}>
                    Minor Chord, Root on E String
                </button>
            </div>

        </div>
    )
}
