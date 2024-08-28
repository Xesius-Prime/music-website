import React from 'react'
import globalStyle from "../../../../styles/Home.module.css"

function index() {
    return (
        <div>
            <h1>Davian</h1>
            <br />

            <div className={globalStyle.mainFocus}>
                <h2>Main Focus</h2>
                <div className={globalStyle.leftAlign}>
                    <p>1. Piece Sakura.</p>
                    <p>2. <a className={globalStyle.highlightAndUnderline} href="https://www.musictheory.net/exercises/interval">Interval Recognition</a>.</p>
                </div>
            </div>
            <br />

            <div className={globalStyle.goldBorder}>
                <h2>Top Overview:</h2>
                <div className={globalStyle.leftAlign}>
                    <h3>Note Recognition High Score:</h3>
                    <p></p>
                    <br />

                    <h3>Book:</h3>
                    <p>Piano Adventure Lesson Book 2b.</p>
                </div>
                <br /> <br />
            </div>
            <br /> <br />

            <div className={globalStyle.greenBorder}>
                <h2>Nov 1 2023</h2>
                <div className={globalStyle.leftAlign}>
                    <h3>:</h3>
                </div>


                <div className={globalStyle.divider}></div>


                <h2>Oct 25 2023</h2>
                <div className={globalStyle.leftAlign}>
                    <h3>:</h3>
                    <p>- Completed old book with Auld Lang Syne, and now onto new book with Sakura.</p>
                    <p>- Don't be fooled by when it moves positions. Follow the note more than the finger suggestion.</p>
                    <p>- Needs to work on interval recognition.</p>
                </div>


                <div className={globalStyle.divider}></div>


                <h2>Oct 18 2023</h2>
                <div className={globalStyle.leftAlign}>
                    <h3>Pieces:</h3>
                    <p><b>1. Auld Lang Syne:</b>
                    </p>
                    <p>- Watch out for intervals so you don't do a 2nd when you should be doing a 3rd.</p>
                    <p>- Watch out for B flat with the left hand.</p>
                    <p>- Make sure you're watching the page, and the actual notes, and not getting tricked by what you imagine it to be in your mind.</p>
                    <br />

                    <h3>Misc</h3>
                    <p>- Work on interval recognition for identifying more quickly 3rds and 2nds etc.</p>
                </div>


                <div className={globalStyle.divider}></div>

                <h2>Oct 11 2023</h2>
                <div className={globalStyle.leftAlign}>
                    <h3>Pieces:</h3>
                    <p>Auld Lang Syne from Lesson Book 2b</p>
                    <p>Could do well to work on left hand chord patterns I, IV, and V in the key of F to make Auld Lang Syne easier to play.</p><br />

                    <h3>Misc:</h3>
                    <p>Talking about practicing with just your mind / ghost piano.</p>
                </div>
            </div>




        </div>
    )
}

export default index