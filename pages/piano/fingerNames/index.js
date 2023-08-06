import styles from '../../../styles/Home.module.css';
import React, { useState } from 'react'
import Image from 'next/image';




export default function pianoFingersPractice() {

    return (
        <div className={styles.center}>
            <h1>Finger Names for Piano</h1>

            <Image
                src='/Piano/Finger Pics/piano finger names.png'
                width={300}
                height={300}
                alt="Picture Test"
                layout="intrinsic"
            />

            <p>Click the button below to go to a game where you can practice your piano finger name recognition, and solidify what you've learnt!</p>
            <button>PRACTICE GAME</button>
        </div>
    )
}
