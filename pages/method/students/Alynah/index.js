import React from 'react'
import globalStyle from "../../../../styles/Home.module.css"

function index() {
    return (
        <div>
            <h1>Alynah</h1>
            <br /><br />

            <div className={globalStyle.mainFocus}>
                <br />
                <h2>Main Focus:</h2>
                <div className={globalStyle.leftAlign}>
                    <p>1. <a href="https://www.musictheory.net/exercises/note/oynsyryyynyyyry" className={globalStyle.highlightAndUnderline}>Note Recognition</a>.</p>
                    <p>2. Nursery Rhyme songs, with note names.</p>
                </div>
                <br /><br />
            </div>
            <br />



            <div className={globalStyle.goldBorder}>
                <h2>Top Overview:</h2>
                <div className={globalStyle.leftAlign}>
                    <h3>Note Recognition High Score:</h3>
                    <p>10/15 in 1min 16sec, set Oct 17 2023</p>
                    <br />

                    <h3>Book:</h3>
                    <p>Nothing yet. We might start with Piano Adventure Book 1.</p>
                </div>
                <br /> <br />
            </div>
            <br /> <br />



            <div className={globalStyle.greenBorder}>

                <h1>Individual Lessons</h1>

                <div className={globalStyle.divider}></div>

                <h2>Oct 17 2023</h2>

                <h3>General</h3>
                <div className={globalStyle.leftAlign}>
                    <h3>Overview:</h3>
                    <p>We essentially worked on note recognition.</p>
                    <p>I will send her nursery rhymes with note names.</p>
                    <br />

                    <h3>Pieces:</h3>
                    <p>This was her first piano lesson with me.</p>
                    <br />
                </div>

            </div>

        </div>
    )
}

export default index