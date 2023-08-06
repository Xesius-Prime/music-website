import React from 'react'
import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function NavBar() {
    return (
        <div>
            <ul className={styles.navbar}>
                <Link
                    href="/"
                    className={styles.navbarInstance}>Home
                </Link>

                <Link
                    href="/piano"
                    className={styles.navbarInstance}>
                    Piano
                </Link>

                <Link
                    href="/guitar"
                    className={styles.navbarInstance}>
                    Guitar
                </Link>

                <Link
                    href="/ukulele"
                    className={styles.navbarInstance}>
                    Ukulele
                </Link>

                <Link
                    href="/practice"
                    className={styles.navbarInstance}>
                    Practice
                </Link>
            </ul>
        </div>
    )
}
