import React from 'react'
import Link from "next/link";
import styles from './handRecognition.module.css';
import Image from 'next/image';

export default function index() {
    return (
        <div>
            <h1>Left Hand Right Hand Practice</h1>

            <Image
                src='/Hand Recognition/left hand right hand.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={styles.image}
                suppressHydrationWarning={true}
            /> <br /><br />

            <button>
                <Link
                    href="/piano/handRecognition/game">
                    PRACTICE HAND <br /> RECOGNITION
                </Link>
            </button>

        </div>
    )
}
