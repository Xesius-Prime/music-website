import React from 'react';
import Link from "next/link";
import styles from '../../styles/Home.module.css'

export default function index() {
    return (
        <div>
            <h1>Practice</h1>

            <ul className={styles.leftAlign}>
                <li>
                    <Link
                        href="/practice/1MinutePerDay">
                        1 Minute Per Day
                    </Link>
                </li>
            </ul>
        </div>
    )
}
