import React from 'react'
import globalStyle from "../../../../styles/Home.module.css"

function index() {
    return (
        <div>
            <h1>Aubyn</h1>
            <br />

            <div className={globalStyle.greenBorder}>
                <h2>Oct 18 2023</h2>
                <div className={globalStyle.leftAlign}>
                    <h3>Pieces:</h3>
                    <p><b>1. Aurora Borealis</b></p>
                    <p>- Play both hands seperate.</p>
                    <p>- Make sure you don't play B flat when you play a B. That's from playing a lot of pieces with B flat and it's throwing you off no we are in a new key.</p>
                </div>

                <div className={globalStyle.divider}></div>

                <h2>Oct 11 2023</h2>
                <div className={globalStyle.leftAlign}>
                    <h3>Pieces:</h3>
                    <p>Aurora Borealis, from Lesson Book 4 Piano Adventures.</p>
                    <p>Watch out for the sharps of the key signature.</p><br />

                    <h3>Misc:</h3>
                    <p>Start noticing and trying to play the piano in your mind.</p>
                    <p>Theres a ghost piano, ghost hands, and even ghost sheet music.</p>
                </div>
            </div>

        </div>
    )
}

export default index