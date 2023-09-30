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

            <p>There are just a few things to look out for while buying a guitar.</p> <br /> <br />



            <p>_______________________________________________</p>

            <h2>1. Check for Cracks</h2>
            <img className={globalStyles.image} src="https://justwoodandstrings.com/wp-content/uploads/2022/02/cracked.jpg" alt="" />
            <p>Depending on weather conditions, hot, cold, humid, or dry, <br /> can effect the guitar, and make cracks appear or get bigger.</p> <br /> <br />

            <p>_______________________________________________</p>

            <h2>2. Check the Frets</h2>
            <img className={globalStyles.image} src="https://guitargearfinder.com/wp-content/uploads/2019/10/guitar-action-height-acoustic-guitar.jpg" alt="" />
            <p>Are the frets too far from the neck and really hard to push down? <br />If so you might consider getting something where the strings are closer to the neck and easier to push down.</p>
            <p>When you rub your finger down the top part of the neck, are the frets sticking out? <br /> If so the guitar might be a bit dehydrated.</p> <br /> <br />

            <p>_______________________________________________</p>

            <h2>3. What Type?</h2>
            <img className={globalStyles.image} src="https://cdn.long-mcquade.com/files/49481/lg_278597b7a4a306c6465327a7228b570a.jpg" alt="" />
            <p>Do you want an acoustic or electric? If you want an acoustic, do you want steel string or nylon string? <br /> I recommend beginners <b>get the nylon string acoustic guitar</b>.</p> <br /> <br />

            <div className={globalStyles.flex}>
                <button><Link href="/guitar">Back to: <br /> Guitar Overview</Link></button>
                <button><Link href="/guitar/holding">Continue to: <br /> Holding the Guitar</Link></button>
            </div> <br /> <br /> <br />
        </div>
    )
}
