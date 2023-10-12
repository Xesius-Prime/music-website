import React, { useState } from 'react'
import globalStyle from '../../../../styles/Home.module.css';
import Image from 'next/image';



export default function index() {






    return (
        <div>
            <h1>Theory</h1>
            <h2>Semitones & Tones</h2>

            <div className={globalStyle.divider}></div>


            <h3>Semitones</h3>
            <Image
                src='/Theory/semitones and chromatic scale.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={globalStyle.image2}
                suppressHydrationWarning={true}
            />

            <div className={globalStyle.leftAlign}>
                <p>As you can see above, a semitone is when you move to the very next note.</p>
                <p>When moving from E to F, there is no black key inbetween, so thats why E to F is considered a semitone.</p>
                <p>Whereas if you look at C, to the next note up will be C#, a black key. This is because the black key is the next note after C.</p>
            </div>

            <div className={globalStyle.divider}></div>

            <h3>Tones</h3>
            <div className={globalStyle.leftAlign}>
                <p>Tones are simply 2 semitones.</p>
            </div>

            <div className={globalStyle.divider}></div>

            <h3>Tones & Semitones</h3>
            <Image
                src='/Theory/Tones and Semitones Natural Notes.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={globalStyle.image2}
                suppressHydrationWarning={true}
            />
            <div className={globalStyle.leftAlign}>
                <p>B to C, and E to F, are the only notes that have no black key inbetween them. That is why <b>they are Semitone, because it moves only one note up to get from E to F.</b> </p>
                <p>Whereas A to B, there is a black key inbetween them, so to go from A to B you have to go up two notes, and not one like B to C, or E to F, and so therefore is a Tone, and not a Semitone.</p>
            </div>
            <br />
        </div>
    )
}
