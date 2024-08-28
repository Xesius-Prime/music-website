import React from 'react'
import globalStyle from "../../../../styles/Home.module.css"

function index() {
    return (
        <div>
            <h1>Justina</h1>
            <br /><br />

            <div className={globalStyle.mainFocus}>
                <br />
                <h2>Main Focus:</h2>
                <div className={globalStyle.leftAlign}>
                    <p>1. </p>
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
                    <p>- Bouree</p>
                    <p>- Chanson</p>

                    <br />

                    <h3>General:</h3>
                    <p>Practice: She's still finding it hard to get practice in regularly.</p>


                </div>
                <br /><br />


            </div>

        </div>
    )
}

export default index