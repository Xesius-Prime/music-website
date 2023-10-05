import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import globalStyle from '../../../../styles/Home.module.css'
import localStyle from '../rhythmTrainer/rhythmTrainer.module.css'

export default function index() {
    return (
        <div>
            <h1>Rhythm Trainer <br /> Lesson & Game Link</h1><br /><br />

            <iframe width="560" height="315" src="https://www.youtube.com/embed/G-O1R0Vy2gQ?si=PAzd9b0nW6p5fPgz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className={globalStyle.video}></iframe> <br /> <br /> <br />

            <button className={localStyle.button}>
                <Link href="https://www.therhythmtrainer.com/">
                    <b className={localStyle.bold}>Click Here to Play <br /> Rhythm Trainer Game</b>
                </Link>
            </button> <br /> <br /> <br />

            <div className={globalStyle.flex}>
                <button><Link href="/method/rhythm/eighthNotes">Back to: <br /> Eighth Notes</Link></button>
                <button><Link href="/method/rhythm">Continue to: <br /> Rhythm Overview</Link></button>
            </div> <br /> <br /> <br />


        </div>
    )
}
