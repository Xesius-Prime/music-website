import React from 'react'
import styles from './mainGame.module.css';
import Image from 'next/image';
import storyArray from './story.js';
import Link from "next/link";
import Stats from "./stats.js";

export default function index() {

    const mappedStoryArray = storyArray.map(x =>
        <p><b>{x.date}</b> {x.note}</p>
    );

    return (
        <div className={styles.parentDiv}>
            <h1 className={styles.header}>Mastery Quest</h1>

            <Image
                src='/Game/mainpic.jpg'
                width={300}
                height={300}
                alt="Picture Test"
                className={styles.img}
                suppressHydrationWarning={true}
            /> <br />

            <button>
                <Link
                    href="/game/overview"
                    className={styles.navbarInstance}>
                    START
                </Link>
            </button>

            <Stats />

        </div>
    )
}
