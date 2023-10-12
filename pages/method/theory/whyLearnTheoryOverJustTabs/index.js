import React from 'react'
import globalStyle from '../../../../styles/Home.module.css';





export default function index() {


    return (
        <div>
            <h1>Theory</h1>
            <h2>Why Learn Music Theory?</h2>
            <h3>All of the Best Musicians I Know <br /> All Know Music Theory</h3>
            <div className={globalStyle.leftAlign}>

            </div>

            <div className={globalStyle.divider}></div>


            <h2>Why Learn Notation <br /> Over Just Tabs?</h2>

            <h3>Tabs Lacks Some Data</h3>

            <h3>Rhythm</h3>



            <h3>Tab Players Have to Rely On Things <br /> Outside the Piece of Paper</h3>

            <h3>Notation is a Universal Language <br /> from Instrument to Instrument</h3>
            <div className={globalStyle.leftAlign}>
                <p>Allows you to more easily go from one instrument to another.</p>
                <p>Tabs is like the language of your home country. Notation is like the language of the world.</p>
                <p>All music is encapsulated within notation, whereas only stringed instruments are encapsulated in tabs.</p>
            </div>

            <h3>Learning to Read Notation <br /> is Great for the Brain</h3>
            <div className={globalStyle.leftAlign}>
                <p>Increases IQ.</p>
                <p>Reduces cognitive decline as you get older.</p>
                <p>- When you listen to music your brain lights up. <br />
                    - When you play music, your brain lights up even more, <br />
                    - but when you <b>sight read music</b>, you brain lights up like the Queens jubilee fireworks!</p>
            </div>

            <h3></h3>
            <div className={globalStyle.leftAlign}>

            </div>



        </div>
    )
}
