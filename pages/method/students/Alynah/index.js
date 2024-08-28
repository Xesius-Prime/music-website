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
                    <p>1. Continue Practicing <a href="https://www.musictheory.net/exercises/note/oynsyryyynyyyry" className={globalStyle.highlightAndUnderline}>Note Recognition</a>.</p>
                    <p>2. From your library of songs, just pick which ever ones interest you most, and play those with both hands.</p>
                    <p>3. Remember to do the dexterity exercise I showed you as well.</p>
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
                    <p>Nothing yet. We are working on note name songs to get started with, <br />but good idea to start true sight reading soon with Piano Adventures Book 1.</p>
                </div>
                <br /> <br />
            </div>
            <br /> <br />



            <div className={globalStyle.greenBorder}>

                <h1>Individual Lessons</h1>

                <div className={globalStyle.divider}></div>

                <h2>Oct 24 2023</h2>

                <h3>General</h3>
                <div className={globalStyle.leftAlign}>
                    <h3>Overview:</h3>
                    <p>- Dexterity Exercise.</p>
                    <p>- Played nursery rhymes with note names.</p>
                    <p>- Practiced Note Recognition.</p>
                    <p>- Did some theory when I explained how to find notes based on where middle C is.</p>
                    <br />

                    <h3>Pieces:</h3>
                    <p>Nursery Rhymes with note names, & both hands.</p>
                    <br />
                </div>

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