import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import styles from '../../styles/Home.module.css'

export default function index() {
    return (
        <div>
            <h1>Rhythm</h1>

            <img src='https://ecdn.teacherspayteachers.com/thumbitem/Rhythm-Tree-Notes-Rests-5533610-1588546390/original-5533610-1.jpg' alt="Description of the image" />

            <ul className={styles.leftAlign}>

                <li>
                    <Link
                        href="https://www.therhythmtrainer.com/">
                        Rhythm Trainer Game
                    </Link>
                </li>
            </ul>
        </div>
    )
}
