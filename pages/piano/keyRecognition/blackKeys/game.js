import globalStyle from '../../../../styles/Home.module.css';
import styles2 from '../../fingerNames/fingerNames.module.css';
import React, { useState } from 'react'
import Image from 'next/image';
import Link from "next/link";

const blackKeyArray = [
    '/Piano/Key Names/Black Keys/black key 1.png',
    '/Piano/Key Names/Black Keys/black key 2.png',

    '/Piano/Key Names/Black Keys/black key 3.png',
    '/Piano/Key Names/Black Keys/black key 4.png',
    '/Piano/Key Names/Black Keys/black key 5.png',

    '/Piano/Key Names/Black Keys/black key 6.png',
    '/Piano/Key Names/Black Keys/black key 7.png',

    '/Piano/Key Names/Black Keys/black key 8.png',
    '/Piano/Key Names/Black Keys/black key 9.png',
    '/Piano/Key Names/Black Keys/black key 10.png',

    '/Piano/Key Names/Black Keys/black key 11.png',
    '/Piano/Key Names/Black Keys/black key 12.png',

    '/Piano/Key Names/Black Keys/black key 13.png',
    '/Piano/Key Names/Black Keys/black key 14.png',
    '/Piano/Key Names/Black Keys/black key 15.png',
]

export default function game() {
    const [randomBlackKeyPic, setRandomBlackKeyPic] = useState('/Piano/Key Names/Black Keys/black key 1.png');
    const [tallyRight, setTallyRight] = useState(0);
    const [tallyWrong, setTallyWrong] = useState(0);
    const [message, setMessage] = useState('Lets play!');

    const handleCheck2BlackKeyAnswer = () => {
        const correctKeys = [blackKeyArray[0], blackKeyArray[1], blackKeyArray[5], blackKeyArray[6], blackKeyArray[10], blackKeyArray[11]];

        if (correctKeys.includes(randomBlackKeyPic)) {
            const randomNumber = Math.floor(Math.random() * blackKeyArray.length);
            setRandomBlackKeyPic(blackKeyArray[randomNumber]);
            setTallyRight(prev => prev + 1);
            setMessage('Correct!');
        } else {
            setTallyWrong(prev => prev + 1);
            setMessage('Oops! Try again.');
        }
    }

    const handleCheck3BlackKeyAnswer = () => {
        const correctKeys = [blackKeyArray[2], blackKeyArray[3], blackKeyArray[4], blackKeyArray[7], blackKeyArray[8], blackKeyArray[9], blackKeyArray[12], blackKeyArray[13], blackKeyArray[14]];

        if (correctKeys.includes(randomBlackKeyPic)) {
            const randomNumber = Math.floor(Math.random() * blackKeyArray.length);
            setRandomBlackKeyPic(blackKeyArray[randomNumber]);
            setTallyRight(prev => prev + 1);
            setMessage('Correct!');
        } else {
            setTallyWrong(prev => prev + 1);
            setMessage('Oops! Try again.');
        }
    }


    return (
        <div className={globalStyle.center}>
            <h1>Piano</h1>
            <h2>Black Key <br />Game</h2>

            <Image
                src={randomBlackKeyPic}
                width={300}
                height={300}
                alt="Picture Test"
                layout="intrinsic"
                className={styles2.image}
            />

            <p className={globalStyle.p}>{message}</p>
            <p>Is the RED KEY a part of the <b>group of 2 black keys</b>, <br /> or part of the <b>group of 3 black keys?</b></p>

            <div className={globalStyle.navbar}>
                <h1 className={globalStyle.tallyCorrect}>{tallyRight}</h1>
                <h1 className={globalStyle.tallyIncorrect}>{tallyWrong}</h1>
            </div> <br />

            <div className={globalStyle.buttonContainer}>
                <button className={globalStyle.buttons}
                    onClick={handleCheck2BlackKeyAnswer}>Group of 2</button>
                <button className={globalStyle.buttons}
                    onClick={handleCheck3BlackKeyAnswer}>Group of 3</button>
            </div><br /> <br />

            <div className={globalStyle.flex}>
                <button>
                    <Link href="/piano/keyRecognition/blackKeys">Back to: <br />Why Learn <br /> Key Names?</Link>
                </button>

                <button>
                    <Link href="/piano/keyRecognition/whiteKeys">Continue to: <br />White Keys <br /> Lesson & Game</Link>
                </button>
            </div> <br /> <br /> <br />
        </div>
    )
}
