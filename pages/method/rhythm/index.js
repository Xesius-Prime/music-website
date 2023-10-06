import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import globalStyle from '../../../styles/Home.module.css'

export default function index() {
    return (
        <div>
            <h1>Rhythm</h1><br />

            <Image
                src='/Rhythm/rhythm tree white.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={globalStyle.image2}
                suppressHydrationWarning={true}
            />

            <ul className={globalStyle.leftAlign}>

                <li>
                    <Link
                        href="/method/rhythm/quarterNotes">
                        Quarter Notes
                    </Link>
                </li>

                <li>
                    <Link
                        href="/method/rhythm/eighthNotes">
                        Eighth Notes
                    </Link>
                </li>

                <li>
                    <Link
                        href="/method/rhythm/rhythmTrainer">
                        Rhythm Trainer
                    </Link>
                </li>
            </ul>

            <p></p>
        </div>
    )
}
