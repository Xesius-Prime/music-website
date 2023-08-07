import React, { useState } from 'react'
import globalStyles from '../../../styles/Home.module.css';
import styles from './guitarNoteRecognition.module.css'
import Image from 'next/image';

import E1 from '../../../public/Guitar/Note Recognition/1A.png';
import G1 from '../../../public/Guitar/Note Recognition/1G.png';
import F1 from '../../../public/Guitar/Note Recognition/1F.png';
import A1 from '../../../public/Guitar/Note Recognition/1A.png';
import B1 from '../../../public/Guitar/Note Recognition/1B.png';
import C1 from '../../../public/Guitar/Note Recognition/1C.png';
import D1 from '../../../public/Guitar/Note Recognition/1D.png';
import E2 from '../../../public/Guitar/Note Recognition/2E.png';
import F2 from '../../../public/Guitar/Note Recognition/2F.png';
import G2 from '../../../public/Guitar/Note Recognition/2G.png';
import A2 from '../../../public/Guitar/Note Recognition/2A.png';
import B2 from '../../../public/Guitar/Note Recognition/2B.png';
import C2 from '../../../public/Guitar/Note Recognition/2C.png';
import D2 from '../../../public/Guitar/Note Recognition/2D.png';
import E3 from '../../../public/Guitar/Note Recognition/3E.png';
import F3 from '../../../public/Guitar/Note Recognition/3F.png';
import G3 from '../../../public/Guitar/Note Recognition/3G.png';
import A3 from '../../../public/Guitar/Note Recognition/3A.png';
import B3 from '../../../public/Guitar/Note Recognition/3B.png';
import C3 from '../../../public/Guitar/Note Recognition/3C.png';
import D3 from '../../../public/Guitar/Note Recognition/3D.png';
import E4 from '../../../public/Guitar/Note Recognition/4E.png';

export default function index() {
    const [currentNote, setCurrentNote] = useState(E1);
    const [tallyRight, setTallyRight] = useState(0);
    const [tallyWrong, setTallyWrong] = useState(0);

    const noteArray = [
        E1, F1, G1, A1, B1, C1, D1,
        E2, F2, G2, A2, B2, C2, D2,
        E3, F3, G3, A3, B3, C3, D3,
        E4
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
        <div className={styles.main}> <br />

            <div className={styles.topPart1}>
                <h1>Note Recognition for Guitar</h1>

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
            </div> <br />



            <div className={styles.bottomPart}>
                <div className={styles.buttonFill}>
                    <button onClick={() => handleNoteClick(E3)} className={styles.button}>e</button>
                    <button onClick={() => handleNoteClick(F3)} className={styles.button}>1</button>
                    <button className={styles.button}>2</button>
                    <button onClick={() => handleNoteClick(G3)} className={styles.button}>3</button>
                    <button className={styles.button}>4</button>
                    <button onClick={() => handleNoteClick(A3)} className={styles.button}>5</button>
                    <button className={styles.button}>6</button>
                    <button onClick={() => handleNoteClick(B3)} className={styles.button}>7</button>
                    <button onClick={() => handleNoteClick(C3)} className={styles.button}>8</button>
                    <button className={styles.button}>9</button>
                    <button onClick={() => handleNoteClick(D3)} className={styles.button}>10</button>
                    <button className={styles.button}>11</button>
                    <button onClick={() => handleNoteClick(E4)} className={styles.button}>12</button>
                </div>
                <div className={styles.buttonFill}>
                    <button onClick={() => handleNoteClick(B2)} className={styles.button}>B</button>
                    <button onClick={() => handleNoteClick(C2)} className={styles.button}>1</button>
                    <button className={styles.button}>2</button>
                    <button onClick={() => handleNoteClick(D2)} className={styles.button}>3</button>
                    <button className={styles.button}>4</button>
                    <button onClick={() => handleNoteClick(E3)} className={styles.button}>5</button>
                    <button onClick={() => handleNoteClick(F3)} className={styles.button}>6</button>
                    <button className={styles.button}>7</button>
                    <button onClick={() => handleNoteClick(G3)} className={styles.button}>8</button>
                    <button className={styles.button}>9</button>
                    <button onClick={() => handleNoteClick(A3)} className={styles.button}>10</button>
                    <button className={styles.button}>11</button>
                    <button onClick={() => handleNoteClick(B3)} className={styles.button}>12</button>
                </div>
                <div className={styles.buttonFill}>
                    <button onClick={() => handleNoteClick(G2)} className={styles.button}>G</button>
                    <button className={styles.button}>1</button>
                    <button onClick={() => handleNoteClick(A2)} className={styles.button}>2</button>
                    <button className={styles.button}>3</button>
                    <button onClick={() => handleNoteClick(B2)} className={styles.button}>4</button>
                    <button onClick={() => handleNoteClick(C2)} className={styles.button}>5</button>
                    <button className={styles.button}>6</button>
                    <button onClick={() => handleNoteClick(D2)} className={styles.button}>7</button>
                    <button className={styles.button}>8</button>
                    <button onClick={() => handleNoteClick(E3)} className={styles.button}>9</button>
                    <button onClick={() => handleNoteClick(F3)} className={styles.button}>10</button>
                    <button className={styles.button}>11</button>
                    <button onClick={() => handleNoteClick(G3)} className={styles.button}>12</button>
                </div>
                <div className={styles.buttonFill}>
                    <button onClick={() => handleNoteClick(D1)} className={styles.button}>D</button>
                    <button className={styles.button}>1</button>
                    <button onClick={() => handleNoteClick(E2)} className={styles.button}>2</button>
                    <button onClick={() => handleNoteClick(F2)} className={styles.button}>3</button>
                    <button className={styles.button}>4</button>
                    <button onClick={() => handleNoteClick(G2)} className={styles.button}>5</button>
                    <button className={styles.button}>6</button>
                    <button onClick={() => handleNoteClick(A2)} className={styles.button}>7</button>
                    <button className={styles.button}>8</button>
                    <button onClick={() => handleNoteClick(B2)} className={styles.button}>9</button>
                    <button onClick={() => handleNoteClick(C2)} className={styles.button}>10</button>
                    <button className={styles.button}>11</button>
                    <button onClick={() => handleNoteClick(D2)} className={styles.button}>12</button>
                </div>
                <div className={styles.buttonFill}>
                    <button onClick={() => handleNoteClick(A1)} className={styles.button}>A</button>
                    <button className={styles.button}>1</button>
                    <button onClick={() => handleNoteClick(B1)} className={styles.button}>2</button>
                    <button onClick={() => handleNoteClick(C1)} className={styles.button}>3</button>
                    <button className={styles.button}>4</button>
                    <button onClick={() => handleNoteClick(D1)} className={styles.button}>5</button>
                    <button className={styles.button}>6</button>
                    <button onClick={() => handleNoteClick(E2)} className={styles.button}>7</button>
                    <button onClick={() => handleNoteClick(F2)} className={styles.button}>8</button>
                    <button className={styles.button}>9</button>
                    <button onClick={() => handleNoteClick(G2)} className={styles.button}>10</button>
                    <button className={styles.button}>11</button>
                    <button onClick={() => handleNoteClick(A2)} className={styles.button}>12</button>
                </div>
                <div className={styles.buttonFill}>
                    <button onClick={() => handleNoteClick(E1)} className={styles.button}>E</button>
                    <button onClick={() => handleNoteClick(F1)} className={styles.button}>1</button>
                    <button className={styles.button}>2</button>
                    <button onClick={() => handleNoteClick(G1)} className={styles.button}>3</button>
                    <button className={styles.button}>4</button>
                    <button onClick={() => handleNoteClick(A1)} className={styles.button}>5</button>
                    <button className={styles.button}>6</button>
                    <button onClick={() => handleNoteClick(B1)} className={styles.button}>7</button>
                    <button onClick={() => handleNoteClick(C1)} className={styles.button}>8</button>
                    <button className={styles.button}>9</button>
                    <button onClick={() => handleNoteClick(D1)} className={styles.button}>10</button>
                    <button className={styles.button}>11</button>
                    <button onClick={() => handleNoteClick(E2)} className={styles.button}>12</button>
                </div>
            </div>


        </div>
    )
}