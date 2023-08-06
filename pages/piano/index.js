import React from 'react'
import Link from "next/link";
import styles from '../../styles/Home.module.css';
import Image from 'next/image';

export default function index() {
    return (
        <div>
            <h1>Piano</h1>

            <Image
                src='/Piano/piano-pic.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={styles.image}
                suppressHydrationWarning={true}
            />

            <ul className={styles.leftAlign}>
                <li>
                    <Link href="/piano/fingerNames">
                        Finger Names
                    </Link>
                </li>

                <li>
                    <Link href="/piano/clefRecognition">
                        Clef Recognition
                    </Link>
                </li>
            </ul>
        </div>
    )
}
