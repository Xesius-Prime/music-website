import React from 'react'
import Image from 'next/image';
import Link from "next/link";
import globalStyle from "../../../../styles/Home.module.css"

export default function index() {
    return (
        <div>
            <h1>Guitar</h1>
            <h2>What Are Frets?</h2>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdNtgshDvHiF3ptIxTkzBErFweaR2fhttOlg&usqp=CAU" alt="" />

            <div className={globalStyle.divider}></div>

            <h3>Metal Lines on the Guitars Neck Are Frets.</h3>
            <div className={globalStyle.leftAlign}>
                <p>Frets are the metal lines on the guitars neck.</p>
                <p>Think of the frets as fences, and the space between them is peoples private property.</p>
                <p>We don't play on the fret itself, but rather right behind the fret, as if the finger was a neighbour peaking over the fence, to his neighbours property to speak with him.</p>
            </div>

            <div className={globalStyle.divider}></div>

            <h3></h3>
            <div className={globalStyle.leftAlign}>

            </div>

            <br /> <br />



            <div className={globalStyle.flex}>
                <button><Link href="/method/guitar/purchasing">Back to: Purchasing Guitar</Link></button>
                <button><Link href="/method/guitar/stringRecognition">Continue to: String Names</Link></button>
            </div> <br /> <br />
        </div>
    )
}
