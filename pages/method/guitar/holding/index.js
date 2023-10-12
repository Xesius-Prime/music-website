import React from 'react'
import Image from 'next/image';
import styles from './holdingGuitar.module.css';
import Link from "next/link";
import globalStyle from "../../../../styles/Home.module.css"

export default function index() {
    return (
        <div>
            <h1>Guitar</h1>
            <h2>Holding the Guitar</h2>

            <div className={globalStyle.divider}></div>


            <div>
                <h2>The Neck and Body</h2><br />
                <Image
                    src='/Guitar/Holding/basics.png'
                    width={300}
                    height={300}
                    alt="Picture Test"
                    className={styles.image}
                    suppressHydrationWarning={true}
                />

                <p>The skinny part is the neck.</p>
                <p>The fat part is the body.</p>
            </div>

            <div className={globalStyle.divider}></div>

            <div>
                <h2>Left Hand Neck</h2>

                <p>The LEFT HAND holds the NECK.</p>

                <p>It should look like this...</p>

                <Image
                    src='/Guitar/Holding/holding.png'
                    width={300}
                    height={300}
                    alt="Picture Test"
                    className={styles.image}
                    suppressHydrationWarning={true}
                />

                <p>The fattest string should be the one closest to your head, <br />and the smallest string should be the one closest to the floor. <br /> If this is backwards, then inform your teacher.</p> <br />
            </div>

            <div className={globalStyle.divider}></div>

            <h2>Tilt it Back Slightly</h2>
            <h3>Laying Flat</h3>
            <h3>WRONG</h3>
            <Image
                src='/Guitar/Holding/holding laying flat.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={styles.image}
                suppressHydrationWarning={true}
            /> <br /> <br />

            <h3>Too Close</h3>
            <h3>WRONG</h3>
            <Image
                src='/Guitar/Holding/holding too close.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={styles.image}
                suppressHydrationWarning={true}
            /> <br /> <br />

            <h3>Slightly Tilted Back</h3>
            <h3>CORRECT!</h3>
            <Image
                src='/Guitar/Holding/slightly tilted back.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={styles.image}
                suppressHydrationWarning={true}
            />


            <br /> <br />

            <div className={globalStyle.flex}>
                <button><Link href="/method/guitar/purchasing">Back to: Purchasing Guitar</Link></button>
                <button><Link href="/method/guitar/stringRecognition">Continue to: String Names</Link></button>
            </div> <br /> <br />
        </div>
    )
}
