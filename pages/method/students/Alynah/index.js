import React from 'react'
import globalStyle from "../../../../styles/Home.module.css"

function index() {
    return (
        <div>
            <h1>Alynah</h1>
            <div className={globalStyle.divider}></div>

            <h2>General Overview</h2>
            <div className={globalStyle.leftAlign}>
                <h3>Note Recognition High Score:</h3>
                <p>10/15 in 1min 16sec, set Oct 17 2023</p>
                <br />

                <h3>Book:</h3>
                <p>Nothing yet. Likely we'll start with Piano Adventure Book 1</p>
            </div>
            <br />

            <div className={globalStyle.divider}></div>

            <h2>Oct 17 2023</h2>

            <div className={globalStyle.leftAlign}>
                <h3>Overview:</h3>
                <p>We essentially worked on note recognition.</p>
                <p>I will send her nursery rhymes with note names.</p>
                <br />

                <h3>Pieces:</h3>
                <p>This was her first piano lesson with me.</p>
                <br />

                <h3>Misc:</h3>
                <p></p>
            </div>



        </div>
    )
}

export default index