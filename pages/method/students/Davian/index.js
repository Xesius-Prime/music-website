import React from 'react'
import globalStyle from "../../../../styles/Home.module.css"

function index() {
    return (
        <div>
            <h1>Davian</h1>

            <h2>Oct 11 2023</h2>
            <div className={globalStyle.leftAlign}>
                <h3>Pieces:</h3>
                <p>Auld Lang Syne from Lesson Book 2b</p>
                <p>Could do well to work on left hand chord patterns I, IV, and V in the key of F to make Auld Lang Syne easier to play.</p><br />

                <h3>Misc:</h3>
                <p>Talking about practicing with just your mind / ghost piano.</p>
            </div>



        </div>
    )
}

export default index