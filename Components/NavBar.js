import React from 'react'
import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function NavBar() {
    return (
        <div>
            <ul className={styles.navbar}>

                <Link
                    href="/practice"
                    className={styles.navbarInstance}>
                    Practice
                </Link>

                <Link
                    href="/instruments"
                    className={styles.navbarInstance}>
                    Instruments
                </Link>

                <Link
                    href="/rhythm"
                    className={styles.navbarInstance}>
                    Rhythm
                </Link>

                <Link
                    href="/theory"
                    className={styles.navbarInstance}>
                    Theory
                </Link>

                <Link
                    href="/misc"
                    className={styles.navbarInstance}>
                    Misc
                </Link>
                <Link
                    href="/tools"
                    className={styles.navbarInstance}>
                    Tools
                </Link>

            </ul>
        </div>
    )
}
