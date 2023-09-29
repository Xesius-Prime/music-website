import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import globalStyle from '../../../styles/Home.module.css'

export default function index() {
    return (
        <div>
            <h1>Quarter Notes</h1>

            <img src='https://www.rhythm-in-music.com/Lesson01Images/counting-the-beat-in-4-4-time.jpg' alt="Description of the image" className={globalStyle.image} /> <br /> <br />

            <iframe width="560" height="315" src="https://www.youtube.com/embed/oL88pEFjoRY?si=28tMfgDv8mizAzh9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className={globalStyle.video}></iframe>


        </div>
    )
}
