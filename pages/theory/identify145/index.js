import React, { useState, useEffect } from 'react'
import globalStyles from '../../../styles/Home.module.css';
import styles from '../../guitar/chordRecognition/chordPatterns.module.css';

const questionsArray = [
    {
        question: 'A major, E major, D major',
        answer: 'A major'
    },
    {
        question: 'E major, B major, F# major',
        answer: 'B major'
    },
    {
        question: 'F major, G major, C major',
        answer: 'C major'
    },
    {
        question: 'A major, G major, D major',
        answer: 'D major'
    },
    {
        question: 'A major, E major, B major',
        answer: 'E major'
    },
    {
        question: 'C major, F major, Bb major',
        answer: 'F major'
    },
    {
        question: 'C major, D major, G major',
        answer: 'G major'
    },
]



export default function index() {

    const [question, setQuestion] = useState(questionsArray[0].question);
    const [answer, setAnswer] = useState(questionsArray[0].answer);
    const [message, setMessage] = useState('Lets play!');
    const [tallyRight, setTallyRight] = useState(0);
    const [tallyWrong, setTallyWrong] = useState(0);


    const handleCheckAnswer = (selectedKey) => {

        if (answer === selectedKey) {

            setMessage('Correct!');
            const randomNumber = Math.floor(Math.random() * questionsArray.length);

            setQuestion(questionsArray[randomNumber].question);
            setAnswer(questionsArray[randomNumber].answer);

            setTallyRight(prev => prev + 1);

        } else {
            setMessage('Opps! Try again.')
            setTallyWrong(prev => prev + 1);
        }
    }



    return (
        <div className={globalStyles.center}>
            <h1>Identify 1, 4, 5</h1>

            <p className={styles.p}>{message}</p><br />
            <h3>Based on the chords shown below, what key are we in?</h3>
            <h2>{question}</h2>




            <div className={styles.buttonContainer}>
                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer('A major')}>
                    Amaj
                </button>

                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer('B major')}>
                    Bmaj
                </button>
                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer('C major')}>
                    Cmaj
                </button>
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer('D major')}>
                    Dmaj
                </button>

                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer('E major')}>
                    Emaj
                </button>

                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer('F major')}>
                    Fmaj
                </button>

                <button className={styles.buttons}
                    onClick={() => handleCheckAnswer('G major')}>
                    Gmaj
                </button>
            </div>

            <div className={globalStyles.navbar}>
                <h1 style={globalStyles.tallyRight}>Correct: {tallyRight}</h1>
                <h1 style={globalStyles.tallyWrong}>Incorrect {tallyWrong}</h1>
            </div>

        </div>
    )
}
