import React from 'react'
import Image from 'next/image';
import styles from '../settlements.module.css';

export default function store() {
    return (
        <div>
            <h1>Mycelium Mercantile</h1>
            <Image
                src='/Game/store.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={styles.img}
                suppressHydrationWarning={true}
            /> <br /> <br />

            <div className={styles.flex}>
                <li>Mushroom <b>$10</b></li>
                <li>Small Health Potion <b>$5</b></li>
            </div>
        </div>
    )
}
