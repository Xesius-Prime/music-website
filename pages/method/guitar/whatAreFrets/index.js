import React from 'react'
import Image from 'next/image';
import Link from "next/link";
import globalStyle from "../../../../styles/Home.module.css"

export default function index() {
    return (
        <div>
            <h1>Guitar</h1>
            <h2>What Are Frets?</h2>
            <img src="https://images.ctfassets.net/r1mvpfown1y6/5Z1iOwHI2sqmy8ookEMGgS/9c0f71622b7cc9acb415e0b7510342a9/Notes-hero.jpg" alt="" />

            <div className={globalStyle.divider}></div>

            <h3>Use the TIPS of your fingers, <br /> not the flat parts.</h3>
            <div className={globalStyle.leftAlign}>
                <p>Using the very tip is much stronger, than using the flat part of the finger.</p>
            </div>

            <div className={globalStyle.divider}></div>

            <h3>Play closely to the next fret up.</h3>
            <div className={globalStyle.leftAlign}>
                <p>Like a guy looking over his fence to talk with his neighbour.</p>
            </div>

            <div className={globalStyle.divider}></div>

            <h3>Thumb behind the neck, <br /> not your palm</h3>
            <div className={globalStyle.leftAlign}>
                <p>Like making an OK sign with you finger.</p>
            </div>
            <br /> <br />



            <div className={globalStyle.flex}>
                <button><Link href="/method/guitar/purchasing">Back to: Purchasing Guitar</Link></button>
                <button><Link href="/method/guitar/stringRecognition">Continue to: String Names</Link></button>
            </div> <br /> <br />
        </div>
    )
}
