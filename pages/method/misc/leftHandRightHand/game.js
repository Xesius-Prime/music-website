import React, { useState } from 'react';
import globalStyle from "../../../../styles/Home.module.css";
import Link from "next/link";
import Image from 'next/image';


export default function Index() {
    const [currentNote, setCurrentNote] = useState();
    const [question, setQuestion] = useState('Left Hand');
    const [tallyRight, setTallyRight] = useState(0);
    const [tallyWrong, setTallyWrong] = useState(0);
    const [message, setMessage] = useState('Lets Play!');

    const handArray = [
        'Right Hand',
        'Left Hand'
    ];

    const handleQuestionCheck = (handChosen) => {
        if (handChosen === question) {

            const randomNumber = Math.floor(Math.random() * handArray.length);
            setQuestion(handArray[randomNumber]);
            setTallyRight(prev => prev + 1);
            setMessage('Correct!');

        } else {
            setTallyWrong(prev => prev + 1);
            setMessage('Opps! Try Again...');
        }
    }


    return (
        <div>
            <h1>Left Hand & Right Hand</h1>
            <h2>Lesson</h2>

            <h1>{question}</h1>

            <Image
                onClick={() => { handleQuestionCheck("Left Hand") }}
                src='/Misc/leftHandRightHandGame/left hand.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={globalStyle.clickableImage}
                suppressHydrationWarning={true}
            />
            <Image
                onClick={() => { handleQuestionCheck("Right Hand") }}
                src='/Misc/leftHandRightHandGame/right hand.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={globalStyle.clickableImage}
                suppressHydrationWarning={true}
            />

            <div className={globalStyle.flexNoWrap}>
                <h1 className={globalStyle.tallyCorrect}>{tallyRight}</h1>
                <p>{message}</p>
                <h1 className={globalStyle.tallyIncorrect}>{tallyWrong}</h1>
            </div>

            <br /> <br /> <br />



            <div className={globalStyle.flex}>
                <button><Link href="/method/misc/leftHandRightHand">Back to: <br />Left Hand & <br /> Right Hand Lesson</Link></button>
                <button><Link href="/method/misc">Continue to: <br />Misc Overview</Link></button>
            </div> <br /> <br /> <br />
        </div>
    );
}
