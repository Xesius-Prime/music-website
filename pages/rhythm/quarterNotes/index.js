import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import globalStyle from '../../../styles/Home.module.css'

export default function index() {
    return (
        <div>

            <h1>Quarter Notes</h1>

            <p>_______________________________________________________</p>

            <h2>1 Quarter Note</h2>

            <img src='https://uploads-ssl.webflow.com/5d88ada011bed54810655344/5e9dea301124584654fe326c_Free-Note-Value-Musical-Symbols-Liam-Pitcher-Website.png' alt="Description of the image" className={globalStyle.image} /> <br /> <br /> <br />

            <p>_______________________________________________________</p>

            <h2>4 Quarter Notes</h2>

            <img src='https://www.rhythm-in-music.com/Lesson01Images/counting-the-beat-in-4-4-time.jpg' alt="Description of the image" className={globalStyle.image} /> <br /> <br /> <br />

            <p>_______________________________________________________</p>

            <h2>Feel the Rhythm</h2>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/oL88pEFjoRY?si=28tMfgDv8mizAzh9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className={globalStyle.video}></iframe><br /> <br /> <br />

            <div className={globalStyle.flex}>
                <button><Link href="/rhythm">Back to: <br />Rhythm Overview</Link></button>
                <button><Link href="/rhythm/eighthNotes">Continue to: <br />Eighth Notes</Link></button>
            </div> <br /> <br /> <br />
        </div>
    )
}
