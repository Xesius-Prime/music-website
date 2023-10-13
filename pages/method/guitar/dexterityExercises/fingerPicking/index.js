import React from 'react'
import globalStyle from '../../../../../styles/Home.module.css';
import Image from 'next/image';
import Link from "next/link";

export default function index() {
    return (
        <div>
            <h1>Guitar</h1>
            <h2>Finger Picking</h2>

            <div className={globalStyle.divider}></div>

            <h3>Intro to Finger Picking</h3>
            <div className={globalStyle.leftAlign}>
                <p>Instead of alternate picking with a pick, you can also use just your fingers, with no pick.</p>
                <p>One is not necessarily better than the other entirely, as the pick is better for some things, and the fingers are better for others.</p>
                <p>On the hand you pluck the strings with, (for most people this is their right hand), you can see in the image below that: <br /><br /> Thumb = p = Pulgar,<br />Index = i = Indice,<br />Middle = m = Medio,<br />Ring = a = Anular,<br />and Pinky = c/s = Chico or Soniquete. <br />(Notice the Portugese names for the fingers)...</p>
                <p></p>
            </div>

            <Image
                src='/Guitar/Finger Names/plucking hand finger names guitar.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={globalStyle.image}
                suppressHydrationWarning={true}
            />

            <div className={globalStyle.divider}></div>

            <h3>Why the Strange Letters for the Fingers?</h3>
            <div className={globalStyle.leftAlign}>
                <p>The reason some have strange names, (ie Thumb = p, when it would seem more reasonable for Thumb to = t, not p).</p>
                <p>This is because the finger names are Portugese.</p><br />

                <h3>Some Music History:</h3>
                <p>The reason we use Portugese finger names for guitar, is because back in the day in Europe, some musicians lived in France, and some in England, and some in Germany, Spain, and Portugal etc etc. </p>

                <p>But the musicians still wanted to be able to play and read each others music, so they seem to have decided that if some country came up with a term, then the others would adopt that term, so music would remain more universal than otherwise.</p>

                <p>It makes sense they use Portugese names for the plucking fingers of a guitarist, being that the guitar was more of a popular instrument in Spain and Portugal, than in the rest of Europe.</p>

                <p>This is why you hear a lot of Italian sounding terms, (ie. Pizzicato, Presto, Fortissimo, etc), because Italy was the progenitor of many cultural aspects of Western Europe.</p>
                <p>Here are some French musical terms: Sur la touche, & Douce.</p>
                <p>Here are some German ones: Zwischenspiel, & Fuge.</p>
            </div>

            <div className={globalStyle.divider}></div>

            <h3>The index and middle finger exercise. </h3>
            <div className={globalStyle.leftAlign}>
                <p>Pluck the little e string alternating between the index finger and the middle finger (i & m).</p>
                <p>Index, Middle, Index, Middle <br />
                    Index, Middle, Index, Middle, etc etc</p>
            </div>

            <div className={globalStyle.divider}></div>

            <h3>The ring, middle and index exercise.</h3>
            <div className={globalStyle.leftAlign}>
                <p>Pluck the little e string, in the order of ring finger first, then middle, then index.</p>
                <p>Ring, Middle, Index, <br /> Ring, Middle, Index, etc etc</p>
            </div>

            <div className={globalStyle.divider}></div>



            <br />

            <div className={globalStyle.flex}>
                <button><Link href="/method/guitar">Back to: <br /> Guitar Overview</Link></button>
                <button><Link href="/method/guitar/holding">Continue to: <br /> Holding the Guitar</Link></button>
            </div> <br /> <br /> <br />

        </div>
    )
}
