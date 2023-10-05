import React from 'react'
import Image from 'next/image';
import styles from '../holdingUkulele/holdingUkulele.module.css';
import Link from "next/link";

export default function index() {
    return (
        <div>
            <h1>Ukulele String Names</h1>

            <Image
                src='/Ukulele/String Recognition/string names.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={styles.image}
                suppressHydrationWarning={true}
            />

            <p>While holding the ukulele with your left hand on the neck, <br />
                and right hand on the body...</p>

            <p>You can see that the RED string is closest to the players head. <br />
                and the YELLOW string is furtherest away from their head.</p>
        </div>
    )
}
