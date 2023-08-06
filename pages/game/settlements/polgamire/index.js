import React from 'react'
import Image from 'next/image';
import styles from '../settlements.module.css'
import Link from "next/link";
import Stats from "../../stats";

export default function index() {
    return (
        <div>
            <h1>Polgamire</h1>
            <Image
                src='/Game/Settlements/polgamire.jpg'
                width={300}
                height={300}
                alt="Picture Test"
                className={styles.img}
                suppressHydrationWarning={true}
            />
            <ul className={styles.flex}>
                <div>
                    <Link href='/game/settlements/polgamire/store'><b>STORE</b></Link>
                    <ul className={styles.leftAlign}>
                        <div>Mushroom <b>$10</b></div>
                        <div>Small Health Potion <b>$5</b></div>
                        <div>Rations <b>$1</b></div>
                    </ul>
                </div>
                <li>Tavern <b>$3</b></li>
            </ul>
            <Stats />
        </div>
    )
}
