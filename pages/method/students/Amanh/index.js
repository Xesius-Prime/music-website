import React from 'react'
import globalStyle from "../../../../styles/Home.module.css"

function index() {
    return (
        <div>
            <h1>Amanh</h1>
            <div className={globalStyle.divider}></div>

            <h2>General Overview</h2>
            <div className={globalStyle.leftAlign}>
                <h3>Note Recognition High Score:</h3>
                <p></p>
                <br />

                <h3>Book:</h3>
                <p>Nothing yet. Likely we'll start with Piano Adventure Book 1</p>
            </div>
            <br />

            <div className={globalStyle.divider}></div>

            <h2>Oct 17 2023</h2>

            <div className={globalStyle.leftAlign}>
                <h3>Overview:</h3>
                <p>He's been working on Fur Elise.</p>
                <br />

                <h3>Pieces:</h3>
                <p>1. Rush E <br />
                    - Make sure you do the correct rhythm for the ta titi of the 2s.</p>
                <p>2. Spiderman <br />
                    - We are starting to work on playing a bass note with the thumb to accompany the high note melodies with this one.</p>
                <br />

                <h3>Dexterity:</h3>
                <p>Start working on playing <a className={globalStyle.highlightAndUnderline} href="/method/guitar/improvisationOnGuitar">the notes in A minor scale</a> ascending and descending, and trying to memorize it.</p>

                <h3>Misc:</h3>
                <p></p>
            </div>



        </div>
    )
}

export default index