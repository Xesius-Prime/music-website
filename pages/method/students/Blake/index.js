import React from 'react'
import globalStyle from "../../../../styles/Home.module.css"

function index() {
    return (
        <div>
            <h1>Blake</h1>
            <div className={globalStyle.divider}></div>

            <h2>General Overview</h2>
            <div className={globalStyle.leftAlign}>
                <h3>Instrument(s):</h3>
                <p>- Guitar</p>
                <br />

                <h2>Theory:</h2>
                <h3>Note Recognition High Score:</h3>
                <p></p>
                <br />

                <h2>Dexterity:</h2>
                <h3>Natural Note Scale 2 Notes Per Beat:</h3>
                <p>- 100 bpm</p>
                <br />

                <h2>Sight Reading:</h2>
                <h3>Book:</h3>
                <p>Nothing yet, mostly been learning pop songs with tabs.</p>
            </div>
            <br />


            <div className={globalStyle.divider}></div>

            <h2>Oct 17 2023</h2>

            <div className={globalStyle.leftAlign}>
                <h3>Overview:</h3>
                <p>He's been working on: .</p>
                <br />

                <h3>Pieces:</h3>
                <p>1. (Example Piece Name) <br />
                    - (Where points about it are made).</p>

                <br />

                <h3>Dexterity:</h3>
                <p>Start working on playing <a className={globalStyle.highlightAndUnderline} href="/method/guitar/improvisationOnGuitar">the notes in A minor scale</a> ascending and descending, and trying to memorize it.</p>


            </div>



        </div>
    )
}

export default index