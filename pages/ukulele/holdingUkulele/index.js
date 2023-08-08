import React from 'react'
import Image from 'next/image';
import styles from './holdingUkulele.module.css';
import Link from "next/link";

export default function index() {
    return (
        <div>
            <h1>Holding the Ukulele</h1>

            <div className={styles.sections}>
                <h2>1.</h2>
                <Image
                    src='/Ukulele/Holding the Ukulele/basics.png'
                    width={300}
                    height={300}
                    alt="Picture Test"
                    className={styles.image}
                    suppressHydrationWarning={true}
                />

                <p>The skinny part is the neck.</p>
                <p>The fat part is the body.</p>
            </div>

            <div className={styles.sections}>
                <h2>2.</h2>

                <p>The LEFT HAND holds the NECK.</p>

                <p>It should look like this...</p>

                <Image
                    src='/Ukulele/Holding the Ukulele/holding.png'
                    width={300}
                    height={300}
                    alt="Picture Test"
                    className={styles.image}
                    suppressHydrationWarning={true}
                /> <br /> <br />
            </div> <br /> <br />

            <div className={styles.flex}>


                <button><Link href="/ukulele">Back to Ukulele Overview</Link></button>
                <button><Link href="/ukulele/stringRecognition">Continue to String Names</Link></button>
            </div>
        </div>
    )
}
