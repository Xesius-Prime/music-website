import React from 'react'
import globalStyle from "../../../../styles/Home.module.css"

function index() {
    return (
        <div>
            <h1>Ruth</h1>
            <br /><br />

            <div className={globalStyle.mainFocus}>
                <br />
                <h2>Main Focus:</h2>
                <div className={globalStyle.leftAlign}>
                    <p>1. Main piece focus on Maple Leaf Rag, but feel free to go back and play older pieces to continue mastering their flow.</p>
                    <p>2. </p>
                </div>
                <br /><br />
            </div>
            <br />



            <div className={globalStyle.goldBorder}>
                <h2>Top Overview:</h2>
                <div className={globalStyle.leftAlign}>
                    <h3>Note Recognition High Score:</h3>
                    <p>No recorded score yet.</p>
                    <br />

                    <h3>Book:</h3>
                    <p>Piano Adventures Lesson Book 4.</p>
                </div>
                <br /> <br />
            </div>
            <br /> <br />



            <div className={globalStyle.greenBorder}>

                <h1>Individual Lessons</h1>

                <div className={globalStyle.divider}></div>

                <h2>Oct 22 2023</h2>
                <div className={globalStyle.leftAlign}>
                    <h3>Pieces: </h3>
                    <p>- Main Piece: Maple Leaf Rag. Sounds like shes got a good handle on it already, and so next week I imagine she'll have a good enough flow with it for us to move to the next song.</p>
                    <p>- Arora Borealis: Just finished this one. She did a nice job with it, just has to continue practicing it to master it with an unhesitant flow.</p>
                    <br />

                    <h3>General:</h3>
                    <p>We should start incorporating other elements into the lessons more, like improvisation, theory, history, composition, and technique.</p>


                </div>
                <br /><br />


            </div>





        </div>
    )
}

export default index