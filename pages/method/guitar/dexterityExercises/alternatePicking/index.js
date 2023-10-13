import React from 'react'
import globalStyle from '../../../../../styles/Home.module.css';
import Image from 'next/image';
import Link from "next/link";

export default function index() {
    return (
        <div className={globalStyle.center}>
            <h1>Guitar</h1>
            <h2>Alternate Picking</h2>
            <img src="https://cdn.shopify.com/s/files/1/1512/4752/files/how_to_hold_a_guitar_pick_2_480x480.jpg?v=1650778639" alt="" />
            <br /> <br />

            <p>Choose one string. <br />A good string to start with is little e.<br /></p>
            <p>Pick Down, Pick Up, <br /> Down, Up, Down, Up, <br />v ^ v ^ v ^ v ^ etc.</p>
            <div className={globalStyle.leftAlign}>
                <p>Thats Alternate Picking, because you are alternating between picking down, and picking up.</p>
                <p>Use metronome to see how fast you're able to pick.</p>
                <p>Remember doing it nicely and correctly is better than going fast.</p>
                <p>Speed will come inevitably, as a result of you becoming comfortable with the movement.</p>
            </div>

            <div className={globalStyle.divider}></div><br />




            <div className={globalStyle.flex}>
                <button><Link href="/method/guitar">Back to: <br /> Guitar Overview</Link></button>
                <button><Link href="/method/guitar/holding">Continue to: <br /> Holding the Guitar</Link></button>
            </div> <br /> <br /> <br />

        </div>
    )
}
