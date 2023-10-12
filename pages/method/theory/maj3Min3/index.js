import React, { useState } from 'react'
import globalStyle from '../../../../styles/Home.module.css';
import Image from 'next/image';



export default function index() {






    return (
        <div>
            <h1>Theory</h1>
            <h2>Major 3rd, & Minor 3rd</h2>

            <div className={globalStyle.divider}></div>


            <h3>Major 3rds</h3>
            <Image
                src=''
                width={300}
                height={300}
                alt="Picture Test"
                className={globalStyle.image2}
                suppressHydrationWarning={true}
            />

            <div className={globalStyle.leftAlign}>
                <p>Major 3rd have <b>three</b> notes inbetween them.</p>
            </div>

            <div className={globalStyle.divider}></div>

            <h3>Minor 3rds</h3>
            <div className={globalStyle.leftAlign}>
                <p>Minor 3rds have just <b>two</b> notes inbetween them.</p>
            </div>

            <div className={globalStyle.divider}></div>

            <div className={globalStyle.leftAlign}>
                <p>Click this button to practice identifying Major 3rds vs Minor 3rds.</p>
            </div>
            <button><a href="https://www.musictheory.net/exercises/keyboard-interval/cyynbyyyy">Click Here <br /> to Play the Game</a></button>
            <br />
        </div>
    )
}
