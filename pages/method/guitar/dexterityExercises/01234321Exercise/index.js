import React from 'react'
import globalStyles from '../../../../../styles/Home.module.css';
import Image from 'next/image';
import Link from "next/link";

export default function index() {
    return (
        <div className={globalStyles.center}>
            <h1>Guitar</h1>
            <h2>Dexterity Exercises</h2>
            <img src="https://media.istockphoto.com/id/452220267/vector/anime-manga-guitar-player.jpg?s=612x612&w=0&k=20&c=nKNk6WH5itz5CUWj2qEkCjaSRDgfw2RFHPkVJWev6vE=" alt="" />
            <br /> <br />

            <div className={globalStyles.divider}></div>





            <h2>1. Alternate Picking</h2>
            <p>Choose one string. <br /> <br />Pick Down, Pick Up, <br /> Down, Up, Down, Up, <br />v ^ v ^ v ^ v ^ etc.</p>

            <p>Use metronome to see how fast you're able to pick.</p>


            <br />

            <div className={globalStyles.divider}></div><br />

            <h2>2. Finger Picking</h2>
            <div>
                <p>Instead of alternate picking with a pick, <br /> you can also use just your fingers, with no pick.</p>
                <p>On the hand you pluck the strings with <br /> (for most people this is their right hand),</p>
                <p>you can see in the image below that <br /> Thumb = p, Index = i, Middle = m, Ring = a, and Pinky = c/s</p>
            </div>

            <Image
                src='/Guitar/Finger Names/plucking hand finger names guitar.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={globalStyles.image}
                suppressHydrationWarning={true}
            />
            <p>The reason some have strange names <br /> (ie Thumb = p, <br /> when it would seem more reasonable <br /> for Thumb to = t, not p).</p>
            <p>This is because the finger names are Portugese.</p>
            <p>The reason we use Portugese finger names for guitar is because back in the day in Europe, some musicians lived in France, and some in England, and some in Germany, Spain, and Portugal etc etc. </p>

            <p>But the musicians still wanted to be able to play and read each others music, so they seem to have descided that if some country came up with a term, then the others would adopt that term in the language it was discovered in.</p>

            <p>This would keep it so music remained more universal, and not a different music language and terms for each country. And this is why you hear a lot of Italian sounding terms, because Italy was the progenitor of many cultural aspects of Western Europe.</p> <br />

            <div className={globalStyles.divider}></div><br />

            <h2>3. 01234 321 Exercise</h2>
            <p>Exactly as it sounds.</p>
            <p>The numbers are both the frets and the fingers you use.</p>
            <p>01234 is the ASCENT UP the fretboard</p>
            <p>and the 321 part, is the DESCENT back DOWN the fretboard.</p>

            <Image
                src='/Guitar/01234321 Exercise/01234321 Exercise.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={globalStyles.image}
                suppressHydrationWarning={true}
            />

            <p>Do it as slow as you have to to make sure every note is sounding out.</p>
            <p>You don't want to trip over yourself as you play, <br /> because you don't want to practice mistakes.</p>

            <p>Though this exercise might seem so easy <br /> that you don't take it seriously, <br /> and might not practice it alot, <br /> becareful you don't fall into that thinking, <br /> because <b>this exercise</b>, though it seems simple <b>is actually basically the very foundation of everything else you do on guitar, in terms of dexterity.</b></p>

            <p><b>It's the ATOMIC STRUCTURE of everything else you will do with dexterity on guitar</b> (and similar instruments like bass, ukulele or even violin).</p>

            <p>There are various levels to this exercise.</p>


            <h3>TOP LEVEL!</h3>
            <p>You will be a master of 01234 321 exercise <br /> when you can do all 3 of these requirements.</p>
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
