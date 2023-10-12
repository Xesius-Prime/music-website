import React from 'react'
import globalStyles from '../../../../../styles/Home.module.css';
import Image from 'next/image';
import Link from "next/link";

export default function index() {
    return (
        <div className={globalStyles.center}>
            <h1>Guitar</h1>
            <h2>Plucking Hand Exercise</h2>
            <img src="https://cdn.mos.cms.futurecdn.net/Qn7QrZXdZRpccvRfMnu4vX-1200-80.jpg" alt="" />
            <br /> <br />

            <div className={globalStyles.divider}></div>

            <h2></h2>
            <Image
                src='/Guitar/Dexterity Exercises/right hand dexterity exercise.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={globalStyles.image2}
                suppressHydrationWarning={true}
            />
            <p>t = thumb <br />
                i = index <br />
                m = middle <br />
                r = ring <br /></p>
            <div className={globalStyles.leftAlign}>
                <p>This is a good beginnerish exercise for the plucking hand, because it uses all the fingers, except the pinky.</p>
                <p>Many skip the pinky, because it throws optimal positioning of the hand off by being short, and isn't entirely that necessary.</p>
                <p>It's essentially a finger per string, but the thumb goes back and forth between A string and D string, for the slight change from the first bar to the second.</p>
                <p>This exercise gets all the main fingers working individually.</p>
            </div>
            <br /> <br />





            <div className={globalStyles.flex}>
                <button><Link href="/method/guitar">Back to: <br /> Guitar Overview</Link></button>
                <button><Link href="/method/guitar/holding">Continue to: <br /> Holding the Guitar</Link></button>
            </div> <br /> <br /> <br />

        </div>
    )
}
