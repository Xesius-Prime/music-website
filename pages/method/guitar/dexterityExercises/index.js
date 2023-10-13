import React from 'react'
import globalStyle from '../../../../styles/Home.module.css';
import Image from 'next/image';
import Link from "next/link";

export default function index() {

    const guitarMethodArray = [
        {
            name: "Alternate Picking",
            href: "/method/guitar/dexterityExercises/alternatePicking"
        },
        {
            name: "Finger Picking",
            href: "/method/guitar/dexterityExercises/fingerPicking"
        },
        {
            name: "01234 321 Exercise",
            href: "/method/guitar/dexterityExercises/01234321Exercise"
        },
        {
            name: "Plucking Hand Exercise",
            href: "/method/guitar/dexterityExercises/pluckingHandExercise"
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
            <h1>Guitar</h1>
            <h2>Dexterity Exercises</h2><br />

            <iframe width="400" height="315" src="https://www.youtube.com/embed/kSV26DTHc6I?si=dukDmXjvLMpkdQkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe> <br /> <br /> <br />

            <div className={globalStyle.leftAlign}>
                <ul className={globalStyle.flexColumn}>
                    {methodMapped}
                </ul>
            </div>


        </div>
    )
}
