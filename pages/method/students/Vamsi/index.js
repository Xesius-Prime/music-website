import React from 'react'
import Image from 'next/image';
import globalStyle from "../../../../styles/Home.module.css"

function index() {
    return (
        <div>
            <h1>Vamsi</h1>
            <br />

            <div className={globalStyle.mainFocus}>
                <h2>Main Focus</h2>
                <div className={globalStyle.leftAlign}>
                    <p>- Play pieces</p>
                </div>
            </div>
            <br />

            <div className={globalStyle.goldBorder}>
                <h2>Top Overview:</h2>
                <div className={globalStyle.leftAlign}>
                    <h3>Note Recognition High Score:</h3>
                    <p></p>
                    <br />

                    <h3>Book:</h3>
                    <p>Piano Adventure Lesson Book 4 I think.</p>
                </div>
                <br /> <br />
            </div>
            <br /> <br />

            <div className={globalStyle.greenBorder}>
                <h2>Oct 11 2023</h2><br />
                <h3>Pieces: <br />Book: Lesson Book 4, Piano Adventures.</h3>
                <div className={globalStyle.leftAlign}>
                    <p>Grand Central Station and Nocturn. We didn't play it on this lesson, because Vamsi was very interested in learning more about theory.</p>
                </div>
                <br />


                <h3>Theory:</h3>
                <div className={globalStyle.leftAlign}>
                    <p><a href="/method/theory/semitonesAndTones" className={globalStyle.highlightAndUnderline}>- Semitones & Tones</a></p>
                    <p><a href="/method/theory/whyDoubleSharpsAndFlats" className={globalStyle.highlightAndUnderline}>- Why Double Flats & Double Sharps</a></p>
                    <p><a href="/method/theory/maj3Min3" className={globalStyle.highlightAndUnderline}>- Major 3rds and Minor 3rds</a></p>
                </div>
                <br /> <br />
            </div>


            <div className={globalStyle.divider}></div>


        </div>
    )
}

export default index