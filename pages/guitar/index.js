import React from 'react'
import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import Link from "next/link";

export default function index() {
    return (
        <div className={styles.center}>
            <h1>Guitar</h1>

            <Image
                src='/Guitar/guitar-pic.png'
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
                            href="/guitar/purchasing">
                            Purchasing a Guitar
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/guitar/holding">
                            Holding a Guitar
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/guitar/stringRecognition">
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
                            href="/guitar/fretRecognition">
                            Fret Recognition
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/guitar/findNoteOnString">
                            Find Note on String
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/guitar/noteRecognition">
                            Note Recognition
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/guitar/chordRecognition">
                            Chord Recognition
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
