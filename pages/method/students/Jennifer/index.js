import React from 'react'
import globalStyle from "../../../../styles/Home.module.css"

function index() {
    return (
        <div>
            <h1>Jennifer</h1><br />


            <div className={globalStyle.mainFocus}>
                <br />
                <h2>Main Focus:</h2>
                <div className={globalStyle.leftAlign}>
                    <p>1. Great Wall of China</p>
                    <p>2. <a className={globalStyle.highlightAndUnderline} href="/method/piano/improvisation">Improvisation in the Key of C# minor</a></p>
                </div>
                <br /><br />
            </div>
            <br />



            <div className={globalStyle.goldBorder}>
                <h2>Top Overview:</h2>
                <div className={globalStyle.leftAlign}>
                    <h3>Note Recognition High Score:</h3>
                    <p>N/A</p>
                    <br />

                    <h3>Book:</h3>
                    <p>Piano Adventures Lesson Book 3A</p>
                </div>
                <br /> <br />
            </div>
            <br /> <br />



            <div className={globalStyle.greenBorder}>

                <h1>Individual Lessons</h1>

                <div className={globalStyle.divider}></div>

                <h2>Oct 21 2023</h2>

                <h3></h3>
                <div className={globalStyle.leftAlign}>
                    <p>We mostly worked on playing the new song "Great Wall of China". Watch out for difference between quarter notes and eighths notes, (Ta's vs Ti Ti's). Make sure you aren't rushing the Ta's by turning them into Ti Ti's.</p>
                    <p>We also did a brief refresher on improvisation in the key of C# minor.</p>
                </div>
                <br />

                <div className={globalStyle.divider}></div>

                <h2>Oct 14 2023</h2>

                <h3>Improvisation:</h3>
                <div className={globalStyle.leftAlign}>
                    <h3>Chord Tones & Non Chord Tones</h3>
                    <h3>Consonant / Dissonant</h3>
                    <h3>Resolved & Unresolved</h3>
                    <h3>First Pattern Second Pattern of C# min</h3>
                </div>
                <br />

            </div>

        </div>
    )
}

export default index