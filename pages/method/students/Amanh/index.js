import React from 'react'
import globalStyle from "../../../../styles/Home.module.css"

function index() {
    return (
        <div>
            <h1>Amanh</h1>
            <br />

            <div className={globalStyle.mainFocus}>
                <h2>Main Focus:</h2>
                <div className={globalStyle.leftAlign}>
                    <p>1. Practice Pieces, (especially Spider man for the challenge of two notes).</p>
                    <p>2. Practice <a className={globalStyle.highlightAndUnderline} href="/method/guitar/improvisationOnGuitar">the notes in A minor scale</a>, and use the metronome, so you can track your progress.</p>
                </div>
                <br />
            </div>
            <br />

            <div className={globalStyle.goldBorder}>
                <h2>Top Overview</h2>
                <div className={globalStyle.leftAlign}>
                    <h3>Note Recognition High Score:</h3>
                    <p></p>
                    <br />

                    <h3>Book:</h3>
                    <p>Just tab pieces to build dexterity and some sight reading.</p>
                    <br />

                    <h3>Natural Note Scale:</h3>
                    <p>60 bpm, 70% complete, <br />- needs to work on no mistakes, and <br />- doing it with the correct fingers.</p>

                </div>
                <br />
            </div>
            <br /> <br />


            <div className={globalStyle.greenBorder}>
                <h1>Individual Lessons</h1>

                <div className={globalStyle.divider}></div>
                <h2>Oct 24 2023</h2>

                <div className={globalStyle.leftAlign}>
                    <h3>Overview:</h3>
                    <p></p>
                    <br />
                </div>

                <div className={globalStyle.divider}></div>
                <h2>Oct 17 2023</h2>

                <div className={globalStyle.leftAlign}>
                    <h3>Overview:</h3>
                    <p>He's been working on Fur Elise.</p>
                    <br />

                    <h3>Pieces:</h3>
                    <p>1. Rush E <br />
                        - Make sure you do the correct rhythm for the ta titi of the 2s.</p>
                    <p>2. Spiderman <br />
                        - We are starting to work on playing a bass note with the thumb to accompany the high note melodies with this one.</p>
                    <br />

                    <h3>Dexterity:</h3>
                    <p>Start working on playing <a className={globalStyle.highlightAndUnderline} href="/method/guitar/improvisationOnGuitar">the notes in A minor scale</a> ascending and descending, and trying to memorize it.</p>

                    <h3>Misc:</h3>
                    <p></p>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default index