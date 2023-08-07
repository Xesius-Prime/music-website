import React from 'react'
import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import Link from "next/link";

export default function index() {
    return (
        <div className={styles.center}>
            <h1>Ukulele</h1>

            <Image
                src='/Ukulele/ukulele main pic.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={styles.image}
                suppressHydrationWarning={true}
            />
            <div className={styles.leftAlign}>
                <ul>
                    <li>
                        <Link
                            href="/ukulele/purchasing">
                            Purchasing a Ukulele
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/ukulele/stringRecognition">
                            String Recognition
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/guitar/fingerRecognition">
                            Finger Recognition
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/ukulele/fretRecognition">
                            Fret Recognition
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/ukulele">
                            Note Recognition
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
