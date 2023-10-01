import React from 'react';
import Link from "next/link";
import styles from '../../styles/Home.module.css'

export default function index() {
    return (
        <div>
            <h1>Practice</h1>

            <img className={styles.image3} src="https://www.willanacademy.com/wp-content/uploads/2017/07/guitar-kids-with-music-stand.jpg" alt="" />

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
