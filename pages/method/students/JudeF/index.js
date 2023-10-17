import React from 'react'
import globalStyle from "../../../../styles/Home.module.css"

function index() {
    return (
        <div>
            <h1>Jude F</h1>

            <h2>Oct 15 2023</h2>
            <div className={globalStyle.leftAlign}>
                <h3>Pieces:</h3>
                <h4>Piano Adventures Book 2B</h4>
                <p>- Spanish Caballero</p>
                <br />

                <h3>Technique:</h3>
                <p>- Cross Hand Arpeggios</p>

            </div>



        </div>
    )
}

export default index