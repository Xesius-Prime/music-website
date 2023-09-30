import React from 'react'
import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import Link from "next/link";
import localStyle from '../instruments/instruments.module.css';

export default function index() {
    return (
        <div className={styles.center}>
            <h1 className={localStyle.h1}>Instruments</h1>

            <div className={styles.flex}>
                <div>
                    <Link href="/piano">
                        <h2 className={localStyle.h2}>Piano</h2>
                        <Image
                            src='/Piano/piano-pic.png'
                            width={300}
                            height={300}
                            alt="Picture Test"
                            className={localStyle.image}
                            suppressHydrationWarning={true}
                        />
                    </Link>
                </div>

                <div>
                    <Link href="/guitar">
                        <h2 className={localStyle.h2}>Guitar</h2>
                        <Image
                            src='/Guitar/guitar-pic.png'
                            width={300}
                            height={300}
                            alt="Picture Test"
                            className={localStyle.image}
                            suppressHydrationWarning={true}
                        />
                    </Link>
                </div>

                <div>
                    <Link href="/ukulele">
                        <h2 className={localStyle.h2}>Ukulele</h2>
                        <Image
                            src='/Ukulele/ukulele main pic.png'
                            width={300}
                            height={300}
                            alt="Picture Test"
                            className={localStyle.image}
                            suppressHydrationWarning={true}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}
