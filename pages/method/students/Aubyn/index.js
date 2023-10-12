import React from 'react'
import globalStyle from "../../../../styles/Home.module.css"

function index() {
    return (
        <div>
            <h1>Aubyn</h1>

            <h2>Oct 11 2023</h2>
            <div className={globalStyle.leftAlign}>
                <h3>Pieces:</h3>
                <p>Aurora Borealis, from Lesson Book 4 Piano Adventures.</p>
                <p>Watch out for the sharps of the key signature.</p><br />

                <h3>Misc:</h3>
                <p>Start noticing and trying to play the piano in your mind.</p>
                <p>Theres a ghost piano, ghost hands, and even ghost sheet music.</p>
            </div>

        </div>
    )
}

export default index