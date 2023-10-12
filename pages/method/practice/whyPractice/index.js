import React from 'react';
import Link from "next/link";
import globalStyle from '../../../../styles/Home.module.css'

export default function index() {
    return (
        <div>
            <h1>Practice</h1>
            <h2>Why Master Practice?</h2><br />

            <img className={globalStyle.image3} src="https://i.imgflip.com/1knemb.jpg?a471024" alt="" />


            <div className={globalStyle.leftAlign}>
                <p>Because:</p>
                <p>1. It's the <b>MOST IMPORTANT THING.</b> <br /> Without practice there is no progress.</p>
            </div>
            <br />

            <h2>Most Important Thing</h2>
            <img src="https://judimoreo.com/wordpress/wp-content/uploads/2015/02/important.jpg" alt="" />
            <div className={globalStyle.leftAlign}>
                <p>In all my years of teaching, if I could only give a student just 1 piece of advice, I often wondered what that would be.</p>
                <p>I thought "what is the most important thing?", and then I figured it out.</p>
                <p>Practice is the most important thing!</p>
                <p>Practice is the foundation that everything else in your music rests on.<b> <br />Without practice, there is no progress.</b></p>
                <p>Practice comes in many forms: <br />
                    1. Just jamming and playing music with your friends, <br /> THATS PRACTICE.</p>
                <p>2. Playing something every time your character dies on a video game, <br /> THATS PRACTICE.</p>
                <p>3. Laying in bed imagining yourself playing a scale or a song, <br /> THAT IS PRACTICE!</p>

                <p>We will go over all the different ways of practicing in the next part.</p>
            </div>

            <br /> <br /> <br />
        </div>
    )
}
