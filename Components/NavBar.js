import React from 'react'
import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function NavBar() {
    return (
        <div>
            <ul className={styles.navbar}>

                <Link
                    href="/method/practice"
                    className={styles.navbarInstance}>
                    Practice
                </Link>

                <Link
                    href="/method/instruments"
                    className={styles.navbarInstance}>
                    Instruments
                </Link>



                <Link
                    href="/method/rhythm"
                    className={styles.navbarInstance}>
                    Rhythm
                </Link>

                <Link
                    href="/method/theory"
                    className={styles.navbarInstance}>
                    Theory
                </Link>

                <Link
                    href="/method/misc"
                    className={styles.navbarInstance}>
                    Misc
                </Link>

                <Link
                    href="/method/tools"
                    className={styles.navbarInstance}>
                    Tools
                </Link>

            </ul>
        </div>
    )
}
