import React from 'react'
import Image from 'next/image';
import globalStyle from "../../../../styles/Home.module.css"

function index() {
    return (
        <div>
            <h1>Vamsi</h1>

            <div>
                <h2>Oct 11 2023</h2><br />
                <h3>Pieces: <br />Book: Lesson Book 4, Piano Adventures.</h3>
                <div className={globalStyle.leftAlign}>
                    <p>Grand Central Station and Nocturn. We didn't play it on this lesson, because Vamsi was very interested in learning more about theory.</p>
                </div>
                <br />


                <h3>Theory:</h3>
                <div className={globalStyle.leftAlign}>
                    <p><a href="/method/theory/semitonesAndTones">- Semitones & Tones</a></p>
                    <p><a href="/method/theory/whyDoubleSharpsAndFlats">- Why Double Flats & Double Sharps</a></p>
                    <p><a href="/method/theory/maj3Min3">- Major 3rds and Minor 3rds</a></p>
                </div>
            </div>


            <div className={globalStyle.divider}></div>


        </div>
    )
}

export default index