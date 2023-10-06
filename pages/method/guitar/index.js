import React from 'react'
import globalStyle from '../../../styles/Home.module.css';
import Image from 'next/image';
import Link from "next/link";

export default function index() {

    const guitarMethodArray = [
        {
            name: "Purchasing a Guitar",
            href: "/method/guitar/purchasing"
        },
        {
            name: "Holding a Guitar",
            href: "/method/guitar/holding"
        },
        {
            name: "String Names",
            href: "/method/guitar/stringRecognition"
        },
        {
            name: "Dexterity Exercises",
            href: "/method/guitar/dexterityExercises"
        },
        {
            name: "Finger Names",
            href: "/method/guitar/fingerRecognition"
        },
        {
            name: "Tabs to Fretboard",
            href: "/method/guitar/fretRecognition"
        },
        {
            name: "Find Note on String",
            href: "/method/guitar/findNoteOnString"
        },
        {
            name: "Note Recognition",
            href: "/method/guitar/noteRecognition"
        },
        {
            name: "Chord Recognition",
            href: "/method/guitar/chordRecognition"
        },
    ]

    const methodMapped = guitarMethodArray.map((x, i) =>
        <div>
            <div className={globalStyle.journey}>
                <Link
                    href={x.href}>
                    {i + 1}. {x.name}
                </Link>
            </div>
        </div>
    );


    return (
        <div className={globalStyle.center}>
            <h1>Guitar</h1><br />

            <Image
                src='/Guitar/guitar-pic.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={globalStyle.image}
                suppressHydrationWarning={true}
            />
            <div className={globalStyle.leftAlign}>
                <ul className={globalStyle.flexColumn}>
                    {methodMapped}
                </ul>
            </div>


        </div>
    )
}
