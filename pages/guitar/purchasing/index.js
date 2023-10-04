import React from 'react'
import globalStyles from '../../../styles/Home.module.css';
import Image from 'next/image';
import Link from "next/link";

export default function index() {
    return (
        <div className={globalStyles.center}>
            <h1>Purchasing a Guitar</h1><br /><br />

            <Image
                src='/Guitar/Purchasing/man thinking.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={globalStyles.image}
                suppressHydrationWarning={true}
            />

            <p>There are just <b>about 4 things <br /> to look out for,</b> while
                <b className={globalStyles.blueSolution}> buying a guitar.</b></p> <br /> <br />


            <p>______________________</p>

            <h2><b>1. Watch Out for Cracks</b></h2>

            <img className={globalStyles.image} src="https://justwoodandstrings.com/wp-content/uploads/2022/02/cracked.jpg" alt="" />

            <p>Depending on weather conditions, <br /> hot, cold, humid, or dry,<br /> <br />
                Or even bumping the instrument too hard, <br /> <br />
                can <b>effect</b> the guitar, <br /> & make cracks appear or get bigger.</p>
            <br />

            <p>______________________</p>


            <h2><b>2. Check the String to Neck Height</b></h2>

            <img className={globalStyles.image} src="https://guitargearfinder.com/wp-content/uploads/2019/10/guitar-action-height-acoustic-guitar.jpg" alt="" />

            <p>Are the strings <b>too far from the neck <br /> and really hard to push all the way down? </b> <br /><br />If so, you might consider getting something <br /> where the <b className={globalStyles.blueSolution}>strings are closer to the neck <br /> and easier to push down.</b></p> <br />

            <p>______________________</p>


            <h2><b>3. Check Frets for Buzz</b></h2>

            <img className={globalStyles.image} src="https://i.pinimg.com/564x/af/49/11/af4911fc04c570f178287668a5416042.jpg" alt="" />

            <p>Setting up a guitar can be a very particular kind of thing.</p>

            <p>If the strings are too far away, then it's hard to play, <br />
                but if the strings are too close, then it might buzz.</p>

            <p>Buzzing is not a very nice sound.</p>

            <p>Before buying a guitar, play each fret on each string, <br /> just to see if they are all nice, or if some of them buzz. <br /> If some buzz, then judge if that matters to you relative of the price.</p>

            <p>Even with some buzzes, <br /> the guitar might be well worth the asked price, regardless.</p>


            <p>______________________</p>



            <h2><b>4. Check Fret Sharpness</b></h2>

            <img className={globalStyles.image} src="https://www.guitaranswerguy.com/wp-content/uploads/2016/12/feat_sharp_frets.jpg" alt="" />


            <p>When you rub your finger <br /> down the top part of the neck, <br /><br /> <b>are the frets sharp & sticking out? </b> <br /><br />
                If so dont worry, this can be fixed. <br /> <b className={globalStyles.blueSolution}>the guitar might be a bit dehydrated,<br /> or need filing.</b></p>

            <br />

            <p>______________________</p>


            <h2><b>4. What Type?</b></h2>
            <img className={globalStyles.image} src="https://cdn.long-mcquade.com/files/49481/lg_278597b7a4a306c6465327a7228b570a.jpg" alt="" />

            <p>Do you want an <b>acoustic or electric?</b> <br /><br /> If you want an acoustic, <br /> do you want <b>steel string or nylon string?</b></p><br />

            <p>______________________</p>


            <p>Don't know?</p>
            <p>I recommend beginners: <br /> <b className={globalStyles.blueSolution}>get the nylon string <br />acoustic guitar because:</b> </p><br />

            <p>
                <span className={globalStyles.underlineBold}>1. Easier On Fingers</span><br />
                Rounded soft nylong strings <br /> are softer on the fingertips <br /> than sharp steel wire strings.<br /> <br />
                <span className={globalStyles.underlineBold}>2. Wider Neck</span><br />Makes playing chords <br /> & close notes a little easier. <br /> <br />
                <span className={globalStyles.underlineBold}>3. Acoustic</span> <br />
                Easily playable & portable, <br /> even when power goes out.
            </p>


            <br /> <br />

            <div className={globalStyles.flex}>
                <button><Link href="/guitar">Back to: <br /> Guitar Overview</Link></button>
                <button><Link href="/guitar/holding">Continue to: <br /> Holding the Guitar</Link></button>
            </div> <br /> <br /> <br />

        </div>
    )
}
