import React from 'react';
import Link from "next/link";
import globalStyle from '../../../../styles/Home.module.css'

export default function index() {
    return (
        <div>
            <h1>Practice</h1>
            <h2>Reasons Why Students Don't Practice</h2>

            <img className={globalStyle.image3} src="https://www.willanacademy.com/wp-content/uploads/2017/07/guitar-kids-with-music-stand.jpg" alt="" />

            <div className={globalStyle.leftAlign}>
                <h3>1. Didnt have the time</h3>
                <p>Did you have time to play video games?</p>
                <p>Everyone has time for at least 1 minute each day.</p>
                <p>If you want to master anything in music, the main thing you should master is not even your instrument! Weird eh?</p>
                <p>The main thing you should master is: <br />
                    <b>a consistent practice ritual.</b></p>
            </div><br />

            <div className={globalStyle.leftAlign}>
                <h3>2. Tired</h3>

            </div><br />

        </div>
    )
}
