import React from 'react'
import globalStyles from '../../../styles/Home.module.css';
import Image from 'next/image';
import Link from "next/link";

export default function index() {
    return (
        <div>
            <h1>Purchasing a Guitar</h1>

            <Image
                src='/Guitar/Purchasing/man thinking.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={globalStyles.image}
                suppressHydrationWarning={true}
            />

            <p>There are just <b>a few things</b> <br /> to look out for, while
                <b className={globalStyles.blueSolution}> buying a guitar.</b></p> <br /> <br />


            <p>_______________________________________________</p>

            <h2><b>1. Check for Cracks</b></h2>
            <img className={globalStyles.image} src="https://justwoodandstrings.com/wp-content/uploads/2022/02/cracked.jpg" alt="" />
            <p>Depending on weather conditions, <br /> hot, cold, humid, or dry,<br /> <br /> can <b>effect</b> the guitar, <br /> & make cracks appear or get bigger.</p> <br />

            <p>_______________________________________________</p>

            <h2><b>2. Check the Fret Height</b></h2>
            <img className={globalStyles.image} src="https://guitargearfinder.com/wp-content/uploads/2019/10/guitar-action-height-acoustic-guitar.jpg" alt="" />
            <p>Are the frets <b>too far from the neck <br /> and really hard to push down? </b> <br /><br />If so, you might consider getting something <br /> where the <b className={globalStyles.blueSolution}>strings are closer to the neck <br /> and easier to push down.</b></p> <br />

            <p>_______________________________________________</p>

            <h2><b>3. Check Fret Sharpness</b></h2>

            <p>When you rub your finger <br /> down the top part of the neck, <br /><br /> <b>are the frets sticking out? </b> <br /><br />
                If so <b className={globalStyles.blueSolution}>the guitar might be a bit dehydrated,<br /> or need filing.</b></p><br />

            <p>_______________________________________________</p>

            <h2><b>4. What Type?</b></h2>
            <img className={globalStyles.image} src="https://cdn.long-mcquade.com/files/49481/lg_278597b7a4a306c6465327a7228b570a.jpg" alt="" />

            <p>Do you want an <b>acoustic or electric?</b> <br /><br /> If you want an acoustic, <br /> do you want <b>steel string or nylon string?</b></p>

            <p>_______________________________________________</p>


            <p>I recommend beginners <br /> <b className={globalStyles.blueSolution}>get the nylon string <br />acoustic guitar because:</b> </p><br />

            <p>
                <span className={globalStyles.underlineBold}>1. Easier On Fingers</span><br /><br />
                <span className={globalStyles.underlineBold}>2. Wider Neck</span><br />(Makes playing chords <br /> & close notes a little easier.)
            </p>


            <br /> <br />

            <div className={globalStyles.flex}>
                <button><Link href="/guitar">Back to: <br /> Guitar Overview</Link></button>
                <button><Link href="/guitar/holding">Continue to: <br /> Holding the Guitar</Link></button>
            </div> <br /> <br /> <br />
        </div >
    )
}
