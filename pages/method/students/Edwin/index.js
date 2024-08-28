import React from 'react'
import globalStyle from "../../../../styles/Home.module.css"

function index() {
    return (
        <div>
            <h1>Edwin</h1>

            <h2>Oct 31 2023</h2>

            <h3>Practiced:</h3>
            <div className={globalStyle.leftAlign}>
                <p>- Starwars theme</p>
                <p>- Iron man</p>
                <p>- Chords</p>
            </div>
            <br />

            <p>He worked on all his stuff, but was a bit busy.</p>
            <p>I showed him how to find the note names on each string, and we worked on Amin and Dmin chords.</p>
            <br />

            <div className={globalStyle.divider}></div>
            <h2>Oct 24 2023</h2>

            <h3>Practice:</h3>
            <div className={globalStyle.leftAlign}>
                <p>- Mostly working on starwars theme</p>
                <p></p>
                <p></p>
            </div>
            <br />

            <h3>Pieces:</h3>
            <div className={globalStyle.leftAlign}>
                <h3></h3>
                <p></p>
            </div>
            <br />

            <h3>Technique/ Dexterity:</h3>
            <div className={globalStyle.leftAlign}>
                <p></p>
                <p></p>
            </div>

            <div className={globalStyle.divider}></div>

            <h2>Oct 17 2023</h2>

            <h3>Practice:</h3>
            <div className={globalStyle.leftAlign}>
                <p>- Practices everyday</p>
                <p>- Practices everything he's got here.</p>
                <p>- Everything twice or three times through.</p>
            </div>
            <br />

            <h3>Pieces:</h3>
            <div className={globalStyle.leftAlign}>
                <h3>- Gaston</h3>
                <p>Sometimes hits the correct frets but on the incorrect string, so has to watch out for that. I showed him to think of the strings as two groups of 3, as I personally found that was easier to process back when I was learning.</p>
            </div>
            <br />

            <h3>Technique/ Dexterity:</h3>
            <div className={globalStyle.leftAlign}>
                <p>- E minor pentatonic scale</p>
                <p>- Natural Notes On 1st Pattern</p>
            </div>

            <div className={globalStyle.divider}></div>

            <h2>Oct 10 2023</h2>

            <h3>Pieces:</h3>
            <div className={globalStyle.leftAlign}>
                <p>- Gaston</p>
                <p>- Beginner Guitar Songs (like Seven Nation Army).</p>
            </div>


            <h3>Technique/ Dexterity:</h3>
            <div className={globalStyle.leftAlign}>
                <p>- E minor pentatonic scale</p>
            </div>
        </div>
    )
}

export default index