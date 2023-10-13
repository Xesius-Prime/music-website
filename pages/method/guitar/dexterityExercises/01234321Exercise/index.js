import React from 'react'
import globalStyles from '../../../../../styles/Home.module.css';
import Image from 'next/image';
import Link from "next/link";

export default function index() {
    return (
        <div className={globalStyles.center}>
            <h1>Guitar</h1>
            <h2>01234 321 Exercise</h2>

            <Image
                src='/Guitar/01234321 Exercise/01234321 Exercise.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={globalStyles.image}
                suppressHydrationWarning={true}
            />
            <br /> <br />

            <div className={globalStyles.divider}></div>

            <div className={globalStyles.leftAlign}>
                <p>Exactly as it sounds.</p>
                <p>The numbers are both the frets and the fingers you use.</p>
                <p>01234 is the ASCENT UP the fretboard</p>
                <p>and the 321 part, is the DESCENT back DOWN the fretboard.</p>
            </div>

            <div className={globalStyles.divider}></div>


            <div className={globalStyles.leftAlign}>
                <p>Do it as slow as you have to to make sure every note is sounding out.</p>
                <p>You don't want to trip over yourself as you play, <br /> because you don't want to practice mistakes.</p>

                <p>Though this exercise might seem so easy, that you don't take it seriously, and might not practice it alot, becareful you don't fall into that thinking,</p>

                <p>because <b>this exercise</b>, though it seems simple <b>is actually basically the very foundation of everything else you do on guitar, in terms of dexterity.</b></p>

                <p><b>It's the ATOMIC STRUCTURE of everything else you will do with dexterity on guitar,</b> (and similar instruments like bass, ukulele or even violin).</p>

                <p>There are various levels to this exercise.</p>
            </div>

            <div className={globalStyles.divider}></div>

            <h3>TOP LEVEL!</h3>
            <p>You will be a master of 01234 321 exercise, <br /> when you can do all 3 of these requirements.</p>
            <p>Start with just doing 1, <br /> and then eventually add the others in.</p>
            <div className={globalStyles.leftAlign}>

                <h3>1. Finger Per Fret</h3>
                <p>Use a finger per fret. <br />  1st finger 1st fret, 2nd finger 2nd fret etc</p><br />

                <h3>2. Keepem Held Going Up</h3>
                <p>Keep your fingers held down on the fretboard <br /> as you ascend up the 01234.</p><br />

                <h3>3. Slightly Off, Standing Ready</h3>
                <p>As you descend down with the 321, take your finger off only as far as you have to.</p>
                <p>Don't have them peel off, but instead have them standing ready and close by like guards to the kingdom "Guards at the ready sir!".</p>
                <p>If you look at really good players, you will notice their hands don't look like they're moving much at all. This is because they are doing such efficient small movements that the fingers look like they're hardly moving. And this is how many are able to play as fast as they do. If their fingers weren't as efficient, then they likely wouldnt be able to play as fast as they do.</p><br />
            </div>



            <div className={globalStyles.divider}></div><br /><br />




            <div className={globalStyles.flex}>
                <button><Link href="/method/guitar">Back to: <br /> Guitar Overview</Link></button>
                <button><Link href="/method/guitar/holding">Continue to: <br /> Holding the Guitar</Link></button>
            </div> <br /> <br /> <br />

        </div>
    )
}
