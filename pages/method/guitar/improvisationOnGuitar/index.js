import React from 'react'
import Image from 'next/image';
import Link from "next/link";
import globalStyle from "../../../../styles/Home.module.css"

export default function index() {
    return (
        <div>
            <h1>Guitar</h1>
            <h2>Improvisation</h2>
            <img src="https://images.ctfassets.net/r1mvpfown1y6/5Z1iOwHI2sqmy8ookEMGgS/9c0f71622b7cc9acb415e0b7510342a9/Notes-hero.jpg" alt="" />

            <div className={globalStyle.divider}></div>

            <h2>Notes in A minor key signature scale</h2>
            <Image
                src='/Guitar/Improvisation/amin notes in keysignature scale for guitar.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={globalStyle.image}
                suppressHydrationWarning={true}
            />
            <div className={globalStyle.leftAlign}>
                <h3>How to practice it:</h3>
                <p>1. At first you can just ascend and descend the scale linearly, to get your fingers used to playing it.</p>
                <p>2. Once you are used to it you can start to play around on the scale. Instead of climbing up all the way, and then climbing down all the way, instead try to dance around, so its not so linear, but more like you are telling a story with it.</p>
                <p>If you want to make it seem like you are playing with a band, so you can practice what it would be like, then click the button below to be sent to a Youtube where you can choose a backing track in a key signature that fits with the above scale.</p>
                <p>Find a backing track you enjoy, and then use the scale to come up with melodies, so you can play those melodies as a freestyle jam with the backing track.</p>
            </div>
            <button><a href="https://www.youtube.com/results?search_query=backing+track+a+minor" target="_blank">Play with <br /> Backing Track</a></button>

            <div className={globalStyle.divider}></div>

            <h2>Chords in A minor</h2>
            <Image
                src='/Guitar/Improvisation/amin chords.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={globalStyle.image}
                suppressHydrationWarning={true}
            />
            <div className={globalStyle.leftAlign}>
                <p>These chords go along with the above scale.</p>
                <p>Eventually you can learn these chords, and use them to be the rhythm and the lead guitarist in one.</p>
                <p>You strum one chord (I recommend starting and ending with A minor or C), and then after you've strummed the chord, you then play a little riff from the scale above.</p>
                <p>Back and forth. You strum a chord shown here, and then play a riff using the scale above. Back and forth, Chord, Scale, Chord, Scale Chord, Scale, etc.</p>
                <p>And there you go, now you are playing both the rhythm and melody as one guitarist, and this is how you. You are improvising an entire song on your own. Awesome work :)</p>
            </div>
            <br /> <br /> <br />




            <div className={globalStyle.flex}>
                <button><Link href="/method/guitar/purchasing">Back to: Purchasing Guitar</Link></button>
                <button><Link href="/method/guitar/stringRecognition">Continue to: String Names</Link></button>
            </div> <br /> <br />
        </div>
    )
}
