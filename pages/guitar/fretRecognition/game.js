import React, { useState } from 'react'
import globalStyles from '../../../styles/Home.module.css';
import styles from '../noteRecognition/guitarNoteRecognition.module.css'
import Image from 'next/image';
import Link from "next/link";

import e0 from '../../../public/Guitar/Fret Recognition/e0.png';
import e1 from '../../../public/Guitar/Fret Recognition/e1.png';
import e2 from '../../../public/Guitar/Fret Recognition/e2.png';
import e3 from '../../../public/Guitar/Fret Recognition/e3.png';
import e4 from '../../../public/Guitar/Fret Recognition/e4.png';
import e5 from '../../../public/Guitar/Fret Recognition/e5.png';
import e6 from '../../../public/Guitar/Fret Recognition/e6.png';
import e7 from '../../../public/Guitar/Fret Recognition/e7.png';
import e8 from '../../../public/Guitar/Fret Recognition/e8.png';
import e9 from '../../../public/Guitar/Fret Recognition/e9.png';
import e10 from '../../../public/Guitar/Fret Recognition/e10.png';
import e11 from '../../../public/Guitar/Fret Recognition/e11.png';
import e12 from '../../../public/Guitar/Fret Recognition/e12.png';

import B0 from '../../../public/Guitar/Fret Recognition/B0.png';
import B1 from '../../../public/Guitar/Fret Recognition/B1.png';
import B2 from '../../../public/Guitar/Fret Recognition/B2.png';
import B3 from '../../../public/Guitar/Fret Recognition/B3.png';
import B4 from '../../../public/Guitar/Fret Recognition/B4.png';
import B5 from '../../../public/Guitar/Fret Recognition/B5.png';
import B6 from '../../../public/Guitar/Fret Recognition/B6.png';
import B7 from '../../../public/Guitar/Fret Recognition/B7.png';
import B8 from '../../../public/Guitar/Fret Recognition/B8.png';
import B9 from '../../../public/Guitar/Fret Recognition/B9.png';
import B10 from '../../../public/Guitar/Fret Recognition/B10.png';
import B11 from '../../../public/Guitar/Fret Recognition/B11.png';
import B12 from '../../../public/Guitar/Fret Recognition/B12.png';

import G0 from '../../../public/Guitar/Fret Recognition/G0.png';
import G1 from '../../../public/Guitar/Fret Recognition/G1.png';
import G2 from '../../../public/Guitar/Fret Recognition/G2.png';
import G3 from '../../../public/Guitar/Fret Recognition/G3.png';
import G4 from '../../../public/Guitar/Fret Recognition/G4.png';
import G5 from '../../../public/Guitar/Fret Recognition/G5.png';
import G6 from '../../../public/Guitar/Fret Recognition/G6.png';
import G7 from '../../../public/Guitar/Fret Recognition/G7.png';
import G8 from '../../../public/Guitar/Fret Recognition/G8.png';
import G9 from '../../../public/Guitar/Fret Recognition/G9.png';
import G10 from '../../../public/Guitar/Fret Recognition/G10.png';
import G11 from '../../../public/Guitar/Fret Recognition/G11.png';
import G12 from '../../../public/Guitar/Fret Recognition/G12.png';

import D0 from '../../../public/Guitar/Fret Recognition/D0.png';
import D1 from '../../../public/Guitar/Fret Recognition/D1.png';
import D2 from '../../../public/Guitar/Fret Recognition/D2.png';
import D3 from '../../../public/Guitar/Fret Recognition/D3.png';
import D4 from '../../../public/Guitar/Fret Recognition/D4.png';
import D5 from '../../../public/Guitar/Fret Recognition/D5.png';
import D6 from '../../../public/Guitar/Fret Recognition/D6.png';
import D7 from '../../../public/Guitar/Fret Recognition/D7.png';
import D8 from '../../../public/Guitar/Fret Recognition/D8.png';
import D9 from '../../../public/Guitar/Fret Recognition/D9.png';
import D10 from '../../../public/Guitar/Fret Recognition/D10.png';
import D11 from '../../../public/Guitar/Fret Recognition/D11.png';
import D12 from '../../../public/Guitar/Fret Recognition/D12.png';

import A0 from '../../../public/Guitar/Fret Recognition/A0.png';
import A1 from '../../../public/Guitar/Fret Recognition/A1.png';
import A2 from '../../../public/Guitar/Fret Recognition/A2.png';
import A3 from '../../../public/Guitar/Fret Recognition/A3.png';
import A4 from '../../../public/Guitar/Fret Recognition/A4.png';
import A5 from '../../../public/Guitar/Fret Recognition/A5.png';
import A6 from '../../../public/Guitar/Fret Recognition/A6.png';
import A7 from '../../../public/Guitar/Fret Recognition/A7.png';
import A8 from '../../../public/Guitar/Fret Recognition/A8.png';
import A9 from '../../../public/Guitar/Fret Recognition/A9.png';
import A10 from '../../../public/Guitar/Fret Recognition/A10.png';
import A11 from '../../../public/Guitar/Fret Recognition/A11.png';
import A12 from '../../../public/Guitar/Fret Recognition/A12.png';

import EE0 from '../../../public/Guitar/Fret Recognition/EE0.png';
import EE1 from '../../../public/Guitar/Fret Recognition/EE1.png';
import EE2 from '../../../public/Guitar/Fret Recognition/EE2.png';
import EE3 from '../../../public/Guitar/Fret Recognition/EE3.png';
import EE4 from '../../../public/Guitar/Fret Recognition/EE4.png';
import EE5 from '../../../public/Guitar/Fret Recognition/EE5.png';
import EE6 from '../../../public/Guitar/Fret Recognition/EE6.png';
import EE7 from '../../../public/Guitar/Fret Recognition/EE7.png';
import EE8 from '../../../public/Guitar/Fret Recognition/EE8.png';
import EE9 from '../../../public/Guitar/Fret Recognition/EE9.png';
import EE10 from '../../../public/Guitar/Fret Recognition/EE10.png';
import EE11 from '../../../public/Guitar/Fret Recognition/EE11.png';
import EE12 from '../../../public/Guitar/Fret Recognition/EE12.png';



export default function index() {
    const [currentNote, setCurrentNote] = useState(e0);
    const [tallyRight, setTallyRight] = useState(0);
    const [tallyWrong, setTallyWrong] = useState(0);

    const noteArray = [
        e0, e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12,
        B0, B1, B2, B3, B4, B5, B6, B7, B8, B9, B10, B11, B12,
        G0, G1, G2, G3, G4, G5, G6, G7, G8, G9, G10, G11, G12,
        D0, D1, D2, D3, D4, D5, D6, D7, D8, D9, D10, D11, D12,
        A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12,
        EE0, EE1, EE2, EE3, EE4, EE5, EE6, EE7, EE8, EE9, EE10, EE11, EE12,
    ];

    const handleNoteClick = (selectedNote) => {
        if (currentNote === selectedNote) {

            const randomNumber = Math.floor(Math.random() * noteArray.length);
            setCurrentNote(noteArray[randomNumber]);
            setTallyRight(prev => prev + 1);

        } else {
            setTallyWrong(prev => prev + 1);
        }
    };


    return (
        <div>
            <div className={styles.main}>
                <h1>Guitar</h1><br />
                <h2>Tab to Fretboard <br /> Game</h2><br />

                <div>
                    <Image
                        src='/Guitar/Guitar Tabs Perspective.png'
                        width={300}
                        height={300}
                        alt="Picture Test2"
                        className={globalStyles.image}
                        suppressHydrationWarning={true}
                    />
                </div>

                <div className={styles.topPart2}>
                    <Image
                        src={currentNote}
                        width={300}
                        height={300}
                        alt="Picture Test"
                        className={globalStyles.image}
                        suppressHydrationWarning={true}
                    />
                </div>

                <div className={globalStyles.flexNoWrap}>
                    <h1 className={styles.green}>{tallyRight}</h1>
                    <h1 className={styles.red}>{tallyWrong}</h1>
                </div>



                <div className={styles.bottomPart}>
                    <div className={styles.buttonFill}>
                        <button onClick={() => handleNoteClick(e0)} className={styles.button}>open</button>
                        <button onClick={() => handleNoteClick(e1)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(e2)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(e3)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(e4)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(e5)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(e6)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(e7)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(e8)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(e9)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(e10)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(e11)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(e12)} className={styles.button}></button>
                    </div>
                    <div className={styles.buttonFill}>
                        <button onClick={() => handleNoteClick(B0)} className={styles.button}>open</button>
                        <button onClick={() => handleNoteClick(B1)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(B2)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(B3)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(B4)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(B5)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(B6)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(B7)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(B8)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(B9)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(B10)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(B11)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(B12)} className={styles.button}></button>
                    </div>
                    <div className={styles.buttonFill}>
                        <button onClick={() => handleNoteClick(G0)} className={styles.button}>open</button>
                        <button onClick={() => handleNoteClick(G1)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(G2)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(G3)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(G4)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(G5)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(G6)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(G7)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(G8)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(G9)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(G10)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(G11)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(G12)} className={styles.button}></button>
                    </div>
                    <div className={styles.buttonFill}>
                        <button onClick={() => handleNoteClick(D0)} className={styles.button}>open</button>
                        <button onClick={() => handleNoteClick(D1)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(D2)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(D3)} className={styles.button}>O</button>
                        <button onClick={() => handleNoteClick(D4)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(D5)} className={styles.button}>O</button>
                        <button onClick={() => handleNoteClick(D6)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(D7)} className={styles.button}>O</button>
                        <button onClick={() => handleNoteClick(D8)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(D9)} className={styles.button}>O</button>
                        <button onClick={() => handleNoteClick(D10)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(D11)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(D12)} className={styles.button}>O <br /> O</button>
                    </div>
                    <div className={styles.buttonFill}>
                        <button onClick={() => handleNoteClick(A0)} className={styles.button}>open</button>
                        <button onClick={() => handleNoteClick(A1)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(A2)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(A3)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(A4)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(A5)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(A6)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(A7)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(A8)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(A9)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(A10)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(A11)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(A12)} className={styles.button}></button>
                    </div>
                    <div className={styles.buttonFill}>
                        <button onClick={() => handleNoteClick(EE0)} className={styles.button}>open</button>
                        <button onClick={() => handleNoteClick(EE1)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(EE2)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(EE3)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(EE4)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(EE5)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(EE6)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(EE7)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(EE8)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(EE9)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(EE10)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(EE11)} className={styles.button}></button>
                        <button onClick={() => handleNoteClick(EE12)} className={styles.button}></button>
                    </div> <br /> <br />

                    <div className={globalStyles.flex}>
                        <button><Link href="/guitar/fretRecognition">Back to: <br /> Tabs for Guitar Lesson</Link></button>
                        <button><Link href="/guitar/findNoteOnString">Continue to: <br /> Find Note On String Lesson</Link></button>
                    </div><br /> <br />
                </div>
            </div>
        </div>

    )
}

