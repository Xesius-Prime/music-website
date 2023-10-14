import React from 'react'
import globalStyle from "../../../../styles/Home.module.css"

function index() {
    return (
        <div>
            <h1>Jennifer</h1>

            <h2>Oct 14 2023</h2>

            <h3>Pieces:</h3>
            <div className={globalStyle.leftAlign}>

            </div>


            <h3>Technique/ Dexterity:</h3>
            <div className={globalStyle.leftAlign}>

            </div>

            <h3>Improvisation:</h3>
            <div className={globalStyle.leftAlign}>
                <h3>Chord Tones & Non Chord Tones</h3>
                <h3>Consonant / Dissonant</h3>
                <h3>Resolved & Unresolved</h3>
                <h3>First Pattern Second Pattern of C# min</h3>
            </div>
        </div>
    )
}

export default index