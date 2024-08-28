import React from 'react'
import globalStyle from "../../../../styles/Home.module.css"

function index() {
    return (
        <div>
            <h1>Poppy</h1>

            <h2>Oct 22 2023</h2>
            <div className={globalStyle.leftAlign}>
                <h3>Pieces:</h3>
                <h4></h4>
                <p>- Hedwigs Theme</p>
                <br />

                <h3>Technique:</h3>
                <p>- C major scale</p>

            </div>

        </div>
    )
}

export default index