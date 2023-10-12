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

            <h2>Use the TIPS of your fingers, <br /> not the flat</h2>

            <h2>Play close to the next fret up</h2>

            <h2>Thumb behind the neck, <br /> not your palm</h2>




            <div className={globalStyle.flex}>
                <button><Link href="/method/guitar/purchasing">Back to: Purchasing Guitar</Link></button>
                <button><Link href="/method/guitar/stringRecognition">Continue to: String Names</Link></button>
            </div> <br /> <br />
        </div>
    )
}
