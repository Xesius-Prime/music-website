import React, { useState, useEffect } from 'react'
import globalStyles from '../../../../styles/Home.module.css';
import styles from '../noteRecognition/guitarNoteRecognition.module.css'
import Link from "next/link";


export default function index() {
    const EOnLilE = 'E NOTE, e STRING.';
    const E1OnLilE = 'F NOTE, e STRING.';
    const E2OnLilE = 'F#/Gb NOTE, e STRING.';
    const E3OnLilE = 'G NOTE, e STRING.';
    const E4OnLilE = 'G#/Ab NOTE, e STRING.';
    const E5OnLilE = 'A NOTE, e STRING.';
    const E6OnLilE = 'A#/Bb NOTE, e STRING.';
    const E7OnLilE = 'B NOTE, e STRING.';
    const E8OnLilE = 'C NOTE, e STRING.';
    const E9OnLilE = 'C#/Db NOTE, e STRING.';
    const E10OnLilE = 'D NOTE, e STRING.';
    const E11OnLilE = 'D#/Eb NOTE, e STRING.';

    const BOnB = 'B NOTE, B STRING.';
    const B1OnB = 'C NOTE, B STRING.';
    const B2OnB = 'C#/Db NOTE, B STRING.';
    const B3OnB = 'D NOTE, B STRING.';
    const B4OnB = 'D#/Eb NOTE, B STRING.';
    const B5OnB = 'E NOTE, B STRING.';
    const B6OnB = 'F NOTE, B STRING.';
    const B7OnB = 'F#/Gb NOTE, B STRING.';
    const B8OnB = 'G NOTE, B STRING.';
    const B9OnB = 'G#/Ab NOTE, B STRING.';
    const B10OnB = 'A NOTE, B STRING.';
    const B11OnB = 'A#/Bb NOTE, B STRING.';

    const GOnG = 'G NOTE, G STRING.';
    const G1OnG = 'G#/Ab NOTE, G STRING.';
    const G2OnG = 'A NOTE, G STRING.';
    const G3OnG = 'A#/Bb NOTE, G STRING.';
    const G4OnG = 'B NOTE, G STRING.';
    const G5OnG = 'C NOTE, G STRING.';
    const G6OnG = 'C#/Db NOTE, G STRING.';
    const G7OnG = 'D NOTE, G STRING.';
    const G8OnG = 'D#/Eb NOTE, G STRING.';
    const G9OnG = 'E NOTE, G STRING.';
    const G10OnG = 'F NOTE, G STRING.';
    const G11OnG = 'F#/Gb NOTE, G STRING.';

    const DOnD = 'D NOTE, D STRING.';
    const D1OnD = 'D#/Eb NOTE, D STRING.';
    const D2OnD = 'E NOTE, D STRING.';
    const D3OnD = 'F NOTE, D STRING.';
    const D4OnD = 'F#/Gb NOTE, D STRING.';
    const D5OnD = 'G NOTE, D STRING.';
    const D6OnD = 'G#/Ab NOTE, D STRING.';
    const D7OnD = 'A NOTE, D STRING.';
    const D8OnD = 'A#/Bb NOTE, D STRING.';
    const D9OnD = 'B NOTE, D STRING.';
    const D10OnD = 'C NOTE, D STRING.';
    const D11OnD = 'C#/Db NOTE, D STRING.';

    const AOnA = 'A NOTE, A STRING.';
    const A1OnA = 'A#/Bb NOTE, A STRING.';
    const A2OnA = 'B NOTE, A STRING.';
    const A3OnA = 'C NOTE, A STRING.';
    const A4OnA = 'C#/Db NOTE, A STRING.';
    const A5OnA = 'D NOTE, A STRING.';
    const A6OnA = 'D#/Eb NOTE, A STRING.';
    const A7OnA = 'E NOTE, A STRING.';
    const A8OnA = 'F NOTE, A STRING.';
    const A9OnA = 'F#/Gb NOTE, A STRING.';
    const A10OnA = 'G NOTE, A STRING.';
    const A11OnA = 'G#/Ab NOTE, A STRING.';

    const EOnE = 'E NOTE, E STRING.';
    const E1OnE = 'F NOTE, E STRING.';
    const E2OnE = 'F#/Gb NOTE, E STRING.';
    const E3OnE = 'G NOTE, E STRING.';
    const E4OnE = 'G#/Ab NOTE, E STRING.';
    const E5OnE = 'A NOTE, E STRING.';
    const E6OnE = 'A#/Bb NOTE, E STRING.';
    const E7OnE = 'B NOTE, E STRING.';
    const E8OnE = 'C NOTE, E STRING.';
    const E9OnE = 'C#/Db NOTE, E STRING.';
    const E10OnE = 'D NOTE, E STRING.';
    const E11OnE = 'D#/Eb NOTE, E STRING.';



    const [currentQuestion, setCurrentQuestion] = useState(EOnLilE);
    const [tallyRight, setTallyRight] = useState(0);
    const [tallyWrong, setTallyWrong] = useState(0);

    const noteArray = [
        EOnLilE, E1OnLilE, E2OnLilE, E3OnLilE, E4OnLilE, E5OnLilE, E6OnLilE, E7OnLilE, E8OnLilE, E9OnLilE, E10OnLilE, E11OnLilE,
        BOnB, B1OnB, B2OnB, B3OnB, B4OnB, B5OnB, B6OnB, B7OnB, B8OnB, B9OnB, B10OnB, B11OnB,
        GOnG, G1OnG, G2OnG, G3OnG, G4OnG, G5OnG, G6OnG, G7OnG, G8OnG, G9OnG, G10OnG, G11OnG,
        DOnD, D1OnD, D2OnD, D3OnD, D4OnD, D5OnD, D6OnD, D7OnD, D8OnD, D9OnD, D10OnD, D11OnD,
        AOnA, A1OnA, A2OnA, A3OnA, A4OnA, A5OnA, A6OnA, A7OnA, A8OnA, A9OnA, A10OnA, A11OnA,
        EOnE, E1OnE, E2OnE, E3OnE, E4OnE, E5OnE, E6OnE, E7OnE, E8OnE, E9OnE, E10OnE, E11OnE,
    ]

    const handleNoteClick = (selectedNote) => {
        if (currentQuestion === selectedNote) {

            const randomNumber = Math.floor(Math.random() * noteArray.length);
            console.log(randomNumber);

            setCurrentQuestion(noteArray[randomNumber]);

            setTallyRight(prev => prev + 1);

        } else {
            setTallyWrong(prev => prev + 1);
        }
    };

    useEffect(() => {
        // This code will run when the component mounts
        console.log(currentQuestion);

        // You can perform any other actions or cleanup here if needed

        // To ensure this code runs only when the component mounts and not on updates,
        // you can provide an empty dependency array as the second argument to useEffect:
    }, []);

    useEffect(() => {
        console.log(currentQuestion);
    }, [handleNoteClick]);


    return (
        <div>
            <div className={styles.main}>

                <h1>Guitar</h1>

                <h2>Find Note On String <br /> Game</h2>

                <h1>{currentQuestion}</h1>

                <div className={styles.topPart1}>
                    <div className={styles.topPart2}>
                        <h1 className={styles.green}>{tallyRight}</h1>
                        <h1 className={styles.red}>{tallyWrong}</h1>
                    </div>
                </div>



                <div className={styles.bottomPart}>
                    <div className={styles.buttonFill}>
                        <button onClick={() => handleNoteClick(EOnLilE)} className={styles.button}>open</button>
                        <button onClick={() => handleNoteClick(E1OnLilE)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(E2OnLilE)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(E3OnLilE)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(E4OnLilE)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(E5OnLilE)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(E6OnLilE)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(E7OnLilE)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(E8OnLilE)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(E9OnLilE)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(E10OnLilE)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(E11OnLilE)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(EOnLilE)} className={styles.button}></button>
                    </div>
                    <div className={styles.buttonFill}>
                        <button onClick={() => handleNoteClick(BOnB)} className={styles.button}>open</button>
                        <button onClick={() => handleNoteClick(B1OnB)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(B2OnB)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(B3OnB)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(B4OnB)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(B5OnB)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(B6OnB)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(B7OnB)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(B8OnB)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(B9OnB)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(B10nB)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(B11OnB)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(B12OnB)} className={styles.button}></button>
                    </div>
                    <div className={styles.buttonFill}>
                        <button onClick={() => handleNoteClick(GOnG)} className={styles.button}>open</button>
                        <button onClick={() => handleNoteClick(G1OnG)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(G2OnG)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(G3OnG)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(G4OnG)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(G5OnG)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(G6OnG)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(G7OnG)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(G8OnG)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(G9OnG)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(G10OnG)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(G11OnG)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(GOnG)} className={styles.button}></button>
                    </div>
                    <div className={styles.buttonFill}>
                        <button onClick={() => handleNoteClick(DOnD)} className={styles.button}>open</button>
                        <button onClick={() => handleNoteClick(D1OnD)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(D2OnD)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(D3OnD)} className={styles.button}>O</button>
                        <button onClick={() => handleNoteClick(D4OnD)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(D5OnD)} className={styles.button}>O</button>
                        <button onClick={() => handleNoteClick(D6OnD)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(D7OnD)} className={styles.button}>O</button>
                        <button onClick={() => handleNoteClick(D8OnD)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(D9OnD)} className={styles.button}>O</button>
                        <button onClick={() => handleNoteClick(D10OnD)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(D11OnD)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(DOnD)} className={styles.button}>O <br /> O</button>
                    </div>
                    <div className={styles.buttonFill}>
                        <button onClick={() => handleNoteClick(AOnA)} className={styles.button}>open</button>
                        <button onClick={() => handleNoteClick(A1OnA)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(A2OnA)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(A3OnA)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(A4OnA)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(A5OnA)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(A6OnA)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(A7OnA)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(A8OnA)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(A9OnA)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(A10OnA)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(A11OnA)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(AOnA)} className={styles.button}></button>
                    </div>
                    <div className={styles.buttonFill}>
                        <button onClick={() => handleNoteClick(EOnE)} className={styles.button}>open</button>
                        <button onClick={() => handleNoteClick(E1OnE)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(E2OnE)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(E3OnE)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(E4OnE)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(E5OnE)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(E6OnE)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(E7OnE)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(E8OnE)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(E9OnE)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(E10OnE)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(E11OnE)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(EOnE)} className={styles.button}></button>
                    </div>
                </div>
            </div> <br /><br />

            <div className={globalStyles.flexNoWrap}>
                <button><Link href="/method/guitar/findNoteOnString">Back to: <br /> Find Note On String Lesson</Link></button>
                <button><Link href="/method/guitar/noteRecognition">Continue to: <br /> Note Recognition Lesson</Link></button>
            </div> <br /> <br /> <br />
        </div>
    )
}

