import React from 'react'
import globalStyle from "../../../../styles/Home.module.css"

function index() {
    return (
        <div>
            <h1>Edwin</h1>

            <h2>Oct 10 2023</h2>

            <h3>Pieces:</h3>
            <div className={globalStyle.leftAlign}>
                <p>- Gaston</p>
                <p>- Beginner Guitar Songs (like Seven Nation Army).</p>
            </div>


            <h3>Technique/ Dexterity:</h3>
            <div className={globalStyle.leftAlign}>
                <p>- E pentatonic minor scale</p>
            </div>
        </div>
    )
}

export default index