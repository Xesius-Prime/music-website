import styles from '../../fingerNames/fingerNames.module.css';
import Image from 'next/image';
import Link from "next/link";
import React from 'react'

export default function blackKeys() {
    return (
        <div>
            <h1>Black Keys</h1>

            <Image
                src='/Piano/Key Names/black keys 2 and 3.png'
                width={300}
                height={300}
                alt="Picture Test"
                layout="intrinsic"
                className={styles.image}
            /> <br /> <br />

            <iframe width="560" height="315" src="https://www.youtube.com/embed/pD4JPf8_Ta4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className={styles.vid}></iframe>

            <p>Notice that there is a space between <br /> the 2 black keys, and the 3 black keys.</p>

            <p>All the way up, <br /> starting from the very left to the very right, it goes <br />
                2 black keys, then 3 black keys, 2, 3, 2, 3, 2, 3 etc etc</p>

            <p>__________________________________________</p>

            <p>Click the button below to go to a game <br /> where you can practice what you've learnt.</p>

            <button>
                <Link
                    href="/piano/keyRecognition/blackKeys/game">
                    BLACK KEY GAME
                </Link>
            </button> <br /> <br />

        </div>
    )
}
