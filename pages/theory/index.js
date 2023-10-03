import React from 'react'
import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import Link from "next/link";

export default function index() {
    return (
        <div className={styles.center}>
            <h1>Theory</h1><br />

            <img className={styles.image} src="https://content.app-sources.com/s/28860800263691606/uploads/Stock_Images/student-studying-music-theory-guitar-sheet-music-1021596.png" alt="" />
            <div className={styles.leftAlign}>
                <ul>
                    <li>
                        <Link
                            href="/theory/identify145">
                            Identify I, IV, V
                        </Link>
                    </li>
                </ul>
            </div><br /><br />


        </div>
    )
}
