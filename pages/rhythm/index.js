import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import styles from '../../styles/Home.module.css'

export default function index() {
    return (
        <div>
            <h1>Rhythm</h1>

            <img src='https://www.soundpiper.com/elements/image102.gif' alt="Description of the image" />

            <ul className={styles.leftAlign}>

                <li>
                    <Link
                        href="/rhythm/quarterNotes">
                        Quarter Notes
                    </Link>
                </li>

                <li>
                    <Link
                        href="/rhythm/eighthNotes">
                        Eighth Notes
                    </Link>
                </li>

                <li>
                    <Link
                        href="/rhythm/rhythmTrainer">
                        Rhythm Trainer
                    </Link>
                </li>
            </ul>

            <p></p>
        </div>
    )
}
