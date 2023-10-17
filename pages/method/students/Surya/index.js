import React from 'react'
import globalStyle from "../../../../styles/Home.module.css"

function index() {
    return (
        <div>
            <h1>Surya</h1>

            <h2>Oct 16 2023</h2>
            <div className={globalStyle.leftAlign}>
                <h3>General Overview:</h3>
                <p>- He's been using the website to play games like the finger recognition game, and string recognition game, but I also taught him on this lessons to play the "Find Note on String" game, and he's getting quite good at it.</p>
                <br />

                <h3>Pieces:</h3>

                <br />

                <h3>Misc:</h3>
                <p>Talking about practicing with just your mind / ghost piano.</p>
            </div>

        </div>
    )
}

export default index