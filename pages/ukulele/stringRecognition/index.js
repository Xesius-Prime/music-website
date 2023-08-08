import React from 'react'
import Image from 'next/image';
import styles from '../holdingUkulele/holdingUkulele.module.css';
import Link from "next/link";

export default function index() {
    return (
        <div>
            <h1>Ukulele String Names</h1>

            <div className={styles.sections}>
                <h2>1.</h2>

                <p>In this position, <br /> the string CLOSEST to your HEAD <br /> is called the G string.</p>

                <p>The RED line indicates the G string in the photo below.</p>

                <Image
                    src='/Ukulele/String Recognition/G string.png'
                    width={300}
                    height={300}
                    alt="Picture Test"
                    className={styles.image}
                    suppressHydrationWarning={true}
                />

                <p>Notice that there are 4 strings in total.</p>

                <p>The GREEN lines indicate the other strings.</p>
            </div>

            <div className={styles.sections}>
                <h2>2.</h2>

                <Image
                    src='/Ukulele/String Recognition/C string.png'
                    width={300}
                    height={300}
                    alt="Picture Test"
                    className={styles.image}
                    suppressHydrationWarning={true}
                />

                <p>The C string is the next string.</p>
                <p>It is one string down from the G string.</p>
            </div>

            <div className={styles.sections}>
                <h2>3.</h2>

                <Image
                    src='/Ukulele/String Recognition/E string.png'
                    width={300}
                    height={300}
                    alt="Picture Test"
                    className={styles.image}
                    suppressHydrationWarning={true}
                />

                <p>And now the E string, which is again one more down.</p>
            </div>


            <div className={styles.sections}>
                <h2>4.</h2>
                <Image
                    src='/Ukulele/String Recognition/A string.png'
                    width={300}
                    height={300}
                    alt="Picture Test"
                    className={styles.image}
                    suppressHydrationWarning={true}
                />

                <p>And finally the string closest to the floor is the A string</p>
            </div>


            <div className={styles.sections}>
                <h2>5.</h2>

                <p>This is what it looks like when you are looking down at your ukulele.</p>
                <Image
                    src='/Ukulele/String Recognition/A string.png'
                    width={300}
                    height={300}
                    alt="Picture Test"
                    className={styles.image}
                    suppressHydrationWarning={true}
                />

                <p>This is what </p>
            </div>


        </div>
    )
}
