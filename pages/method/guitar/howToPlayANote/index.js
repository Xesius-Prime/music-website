import React from 'react'
import Image from 'next/image';
import Link from "next/link";
import globalStyle from "../../../../styles/Home.module.css"

export default function index() {
    return (
        <div>
            <h1>Guitar</h1>
            <h2>Playing a Note</h2>
            <img src="https://images.ctfassets.net/r1mvpfown1y6/5Z1iOwHI2sqmy8ookEMGgS/9c0f71622b7cc9acb415e0b7510342a9/Notes-hero.jpg" alt="" />

            <div className={globalStyle.divider}></div>

            <h2>Use the TIPS of your fingers, <br /> not the flat</h2>
            <div className={globalStyle.leftAlign}>
                <p>Using the very tip is much stronger, than using the flat part of the finger.</p>
            </div>

            <div className={globalStyle.divider}></div>

            <h2>Play close to the next fret up</h2>
            <div className={globalStyle.leftAlign}>
                <p>Like a guy looking over his fence to talk with his neighbour.</p>
            </div>

            <div className={globalStyle.divider}></div>

            <h2>Thumb behind the neck, <br /> not your palm</h2>
            <div className={globalStyle.leftAlign}>
                <p>Like making an OK sign with you finger.</p>
            </div>

            <div className={globalStyle.divider}></div>

            <h2>Pluck the Right String</h2>
            <div className={globalStyle.leftAlign}>
                <p>Sometimes beginner students are holding the correct note with their fretting hand, but plucking the wrong string with their plucking hand.</p>
                <p>If you are still getting that muted sound, then double check your plucking hand to make sure you're plucking the correct string.</p>
            </div>
            <br /> <br />



            <div className={globalStyle.flex}>
                <button><Link href="/method/guitar/purchasing">Back to: Purchasing Guitar</Link></button>
                <button><Link href="/method/guitar/stringRecognition">Continue to: String Names</Link></button>
            </div> <br /> <br />
        </div>
    )
}
