import React, { useState } from 'react'
import globalStyles from '../../../styles/Home.module.css';
import styles from '../../guitar/noteRecognition/guitarNoteRecognition.module.css';
import Image from 'next/image';

import A0 from '../../../public/Ukulele/Fret Recognition/A0.png';
import A1 from '../../../public/Ukulele/Fret Recognition/A1.png';
import A2 from '../../../public/Ukulele/Fret Recognition/A2.png';
import A3 from '../../../public/Ukulele/Fret Recognition/A3.png';
import A4 from '../../../public/Ukulele/Fret Recognition/A4.png';
import A5 from '../../../public/Ukulele/Fret Recognition/A5.png';
import A6 from '../../../public/Ukulele/Fret Recognition/A6.png';
import A7 from '../../../public/Ukulele/Fret Recognition/A7.png';
import A8 from '../../../public/Ukulele/Fret Recognition/A8.png';
import A9 from '../../../public/Ukulele/Fret Recognition/A9.png';
import A10 from '../../../public/Ukulele/Fret Recognition/A10.png';
import A11 from '../../../public/Ukulele/Fret Recognition/A11.png';
import A12 from '../../../public/Ukulele/Fret Recognition/A12.png';

import E0 from '../../../public/Ukulele/Fret Recognition/E0.png';
import E1 from '../../../public/Ukulele/Fret Recognition/E1.png';
import E2 from '../../../public/Ukulele/Fret Recognition/E2.png';
import E3 from '../../../public/Ukulele/Fret Recognition/E3.png';
import E4 from '../../../public/Ukulele/Fret Recognition/E4.png';
import E5 from '../../../public/Ukulele/Fret Recognition/E5.png';
import E6 from '../../../public/Ukulele/Fret Recognition/E6.png';
import E7 from '../../../public/Ukulele/Fret Recognition/E7.png';
import E8 from '../../../public/Ukulele/Fret Recognition/E8.png';
import E9 from '../../../public/Ukulele/Fret Recognition/E9.png';
import E10 from '../../../public/Ukulele/Fret Recognition/E10.png';
import E11 from '../../../public/Ukulele/Fret Recognition/E11.png';
import E12 from '../../../public/Ukulele/Fret Recognition/E12.png';

import C0 from '../../../public/Ukulele/Fret Recognition/C0.png';
import C1 from '../../../public/Ukulele/Fret Recognition/C1.png';
import C2 from '../../../public/Ukulele/Fret Recognition/C2.png';
import C3 from '../../../public/Ukulele/Fret Recognition/C3.png';
import C4 from '../../../public/Ukulele/Fret Recognition/C4.png';
import C5 from '../../../public/Ukulele/Fret Recognition/C5.png';
import C6 from '../../../public/Ukulele/Fret Recognition/C6.png';
import C7 from '../../../public/Ukulele/Fret Recognition/C7.png';
import C8 from '../../../public/Ukulele/Fret Recognition/C8.png';
import C9 from '../../../public/Ukulele/Fret Recognition/C9.png';
import C10 from '../../../public/Ukulele/Fret Recognition/C10.png';
import C11 from '../../../public/Ukulele/Fret Recognition/C11.png';
import C12 from '../../../public/Ukulele/Fret Recognition/C12.png';

import G0 from '../../../public/Ukulele/Fret Recognition/G0.png';
import G1 from '../../../public/Ukulele/Fret Recognition/G1.png';
import G2 from '../../../public/Ukulele/Fret Recognition/G2.png';
import G3 from '../../../public/Ukulele/Fret Recognition/G3.png';
import G4 from '../../../public/Ukulele/Fret Recognition/G4.png';
import G5 from '../../../public/Ukulele/Fret Recognition/G5.png';
import G6 from '../../../public/Ukulele/Fret Recognition/G6.png';
import G7 from '../../../public/Ukulele/Fret Recognition/G7.png';
import G8 from '../../../public/Ukulele/Fret Recognition/G8.png';
import G9 from '../../../public/Ukulele/Fret Recognition/G9.png';
import G10 from '../../../public/Ukulele/Fret Recognition/G10.png';
import G11 from '../../../public/Ukulele/Fret Recognition/G11.png';
import G12 from '../../../public/Ukulele/Fret Recognition/G12.png';


export default function index() {
    const [currentNote, setCurrentNote] = useState(E0);
    const [tallyRight, setTallyRight] = useState(0);
    const [tallyWrong, setTallyWrong] = useState(0);

    const noteArray = [
        A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12,
        E0, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E12,
        C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12,
        G0, G1, G2, G3, G4, G5, G6, G7, G8, G9, G10, G11, G12,
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
        <div className={styles.main}>

            <div className={styles.topPart1}>
                <h1>Fret Recognition <br /> for Ukulele</h1> <br />

                <div className={styles.topPart2}>
                    <h1 className={styles.green}>{tallyRight}</h1>
                    <Image
                        src={currentNote}
                        width={300}
                        height={300}
                        alt="Picture Test"
                        className={globalStyles.image}
                        suppressHydrationWarning={true}
                    />
                    <h1 className={styles.red}>{tallyWrong}</h1>
                </div>
            </div> <br /> <br />

            <div className={styles.bottomPart}>
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
                    <button onClick={() => handleNoteClick(E0)} className={styles.button}>open</button>
                    <button onClick={() => handleNoteClick(E1)} className={styles.button}></button>
                    <button onClick={() => handleNoteClick(E2)} className={styles.button}></button>
                    <button onClick={() => handleNoteClick(E3)} className={styles.button}></button>
                    <button onClick={() => handleNoteClick(E4)} className={styles.button}></button>
                    <button onClick={() => handleNoteClick(E5)} className={styles.button}></button>
                    <button onClick={() => handleNoteClick(E6)} className={styles.button}></button>
                    <button onClick={() => handleNoteClick(E7)} className={styles.button}></button>
                    <button onClick={() => handleNoteClick(E8)} className={styles.button}></button>
                    <button onClick={() => handleNoteClick(E9)} className={styles.button}></button>
                    <button onClick={() => handleNoteClick(E10)} className={styles.button}></button>
                    <button onClick={() => handleNoteClick(E11)} className={styles.button}></button>
                    <button onClick={() => handleNoteClick(E12)} className={styles.button}></button>
                </div>

                <div className={styles.buttonFill}>
                    <button onClick={() => handleNoteClick(C0)} className={styles.button}>open</button>
                    <button onClick={() => handleNoteClick(C1)} className={styles.button}></button>
                    <button onClick={() => handleNoteClick(C2)} className={styles.button}></button>
                    <button onClick={() => handleNoteClick(C3)} className={styles.button}>O</button>
                    <button onClick={() => handleNoteClick(C4)} className={styles.button}></button>
                    <button onClick={() => handleNoteClick(C5)} className={styles.button}>O</button>
                    <button onClick={() => handleNoteClick(C6)} className={styles.button}></button>
                    <button onClick={() => handleNoteClick(C7)} className={styles.button}>O</button>
                    <button onClick={() => handleNoteClick(C8)} className={styles.button}></button>
                    <button onClick={() => handleNoteClick(C9)} className={styles.button}>O</button>
                    <button onClick={() => handleNoteClick(C10)} className={styles.button}></button>
                    <button onClick={() => handleNoteClick(C11)} className={styles.button}></button>
                    <button onClick={() => handleNoteClick(C12)} className={styles.button}>O <br /> O</button>
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

            </div>
        </div>
    )
}

