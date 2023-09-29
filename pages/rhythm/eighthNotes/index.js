import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import globalStyle from '../../../styles/Home.module.css'

export default function index() {
    return (
        <div>
            <h1>Eighth Notes</h1>

            <img src='https://fretello.com/news/content/images/assets-old/8-count.png' alt="Description of the image" className={globalStyle.image} /> <br /> <br />

            <iframe width="560" height="315" src="https://www.youtube.com/embed/shA4FNu7dko?si=VVV2e0f345Z5nqVW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className={globalStyle.video}></iframe>


        </div>
    )
}
