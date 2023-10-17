import React from 'react'
import globalStyle from "../../../../styles/Home.module.css"

function index() {
    return (
        <div>
            <h1>Udeg</h1>

            <h2>Oct 16 2023</h2>
            <div className={globalStyle.leftAlign}>
                <h3>General Overview:</h3>
                <p>- Make sure your doing note recognition stuff</p>
                <p>- Is starting to work on Improvisation, with chord scale back and forth in key of A minor.</p>
                <br />

                <h3>Pieces:</h3>
                <p><a href="">- Sweet Child O Mine, Guns & Roses</a></p>
                <p><a href="">- Matteo Carcassi, Opus 60 no. 7 in A minor</a></p>
                <br />

                <h3></h3>
                <p>Practices 4-5/7</p>
                <p>How long?: 20min</p>
                <p>When You Practice What Do You Practice?: The song and stuff I give him.</p>
                <br />

                <h3>Misc:</h3>
                <p>What we can work on:</p>
                <p>- Note Recognition</p>
                <p>- Dexterity Exercises: Right hand and left hand</p>

            </div>

        </div>
    )
}

export default index