import React from 'react';
import Link from "next/link";
import globalStyle from '../../../../styles/Home.module.css'

export default function index() {
    return (
        <div>
            <h1>Practice</h1>
            <h2>Practice with a Metronome</h2>

            <img className={globalStyle.image3} src="https://miro.medium.com/v2/resize:fit:1024/1*XEPCK43FCH86l8yc3Ibl8A.jpeg" alt="" />

            <h2>Why?</h2>
            <div className={globalStyle.leftAlign}>
                <p>Because:</p>
                <h3>Listening & External Coordination</h3>
                <p>By practicing with a metronome, you will be able to train your ability to listen while playing, and coordinate with something outside of yourself.</p>
                <p>A lot of beginners find it difficult to play along with the metronome. This is because they aren't used to listening to something outside of themselves, and coordinating their exact rhythm with it.</p>
                <p>It's useful to learn to do this, so you can play along with a drummer and, (if you're recording), a  tick track.</p>
                <br />

                <h3>Measure Your Progress</h3>
                <p>First you try playing a scale at 60 bpm (beats per minute), and if you can complete that climbing up, and back down 3 times in a row without any mistakes, then you can dial the bpm up a bit higher.</p>
                <p>Eventually you will reach a speed at which is challenging.</p>
                <p>Remember to practice slow, you don't want to practice bad habits.</p>
                <br />

                <h3>Meditative</h3>
                <p>Getting into just the right speed thats not too fast, and not too slow, can get you into a meditative trance, and being in a meditative trance while practicing is a great way to practice.</p>
                <p></p>
            </div>


        </div>
    )
}
