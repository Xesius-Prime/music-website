import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import globalStyle from '../../../../styles/Home.module.css'

export default function index() {
    return (
        <div>
            <h1>Eighth Notes</h1>

            <p>_______________________________________________________</p>

            <h2>1 Eighth Note</h2>

            <img src='https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/eighth-note_ver_1.png' alt="Description of the image" className={globalStyle.image} /> <br /> <br /> <br />

            <p>_______________________________________________________</p>

            <h2>8 Eighth Notes</h2>

            <img src='https://fretello.com/news/content/images/assets-old/8-count.png' alt="Description of the image" className={globalStyle.image} /> <br /> <br />

            <p>_______________________________________________________</p>

            <h2>Feel the Rhythm</h2>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/shA4FNu7dko?si=VVV2e0f345Z5nqVW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className={globalStyle.video}></iframe> <br /> <br /> <br />

            <div className={globalStyle.flex}>
                <button><Link href="/method/rhythm/quarterNotes">Back to: <br /> Quarter Notes</Link></button>
                <button><Link href="/method/rhythm/rhythmTrainer">Continue to: <br /> Rhythm Lesson & Game</Link></button>
            </div> <br /> <br /> <br />
        </div>
    )
}
