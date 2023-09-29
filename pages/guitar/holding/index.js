import React from 'react'
import Image from 'next/image';
import styles from './holdingGuitar.module.css';
import Link from "next/link";

export default function index() {
    return (
        <div>
            <h1>Holding the Guitar</h1>

            <div className={styles.sections}>
                <h2>1.</h2>
                <Image
                    src='/Guitar/Holding/basics.png'
                    width={300}
                    height={300}
                    alt="Picture Test"
                    className={styles.image}
                    suppressHydrationWarning={true}
                />

                <p>The skinny part is the neck.</p>
                <p>The fat part is the body.</p> <br />
            </div>

            <div className={styles.sections}>
                <h2>2.</h2>

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
            </div> <br /> <br />

            <div className={styles.flex}>


                <button><Link href="/guitar">Back to Guitar Overview</Link></button>
                <button><Link href="/guitar/stringRecognition">Continue to String Names</Link></button>
            </div> <br /> <br />
        </div>
    )
}
