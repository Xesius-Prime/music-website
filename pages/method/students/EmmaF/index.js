import React from 'react'
import globalStyle from "../../../../styles/Home.module.css"

function index() {
    return (
        <div>
            <h1>Emma F</h1>

            <h2>Oct 15 2023</h2>
            <div className={globalStyle.leftAlign}>
                <h3>Pieces:</h3>
                <h4>Her school performance pieces</h4>
                <p>She's doing 3 pieces from her school teacher for her school band.</p>
                <br />

                <h3>Misc:</h3>

            </div>



        </div>
    )
}

export default index