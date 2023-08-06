import React from 'react'
import globalStyles from '../../../styles/Home.module.css';
import Image from 'next/image';

export default function index() {
    return (
        <div>
            <h1>Purchasing a Guitar</h1>

            <Image
                src='/Guitar/Purchasing/man thinking.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={globalStyles.image}
                suppressHydrationWarning={true}
            />

            <h2>Check for Cracks</h2>
            <h2>Check the Frets</h2>
            <h2>What Type?</h2>
            <h2></h2>
        </div>
    )
}
