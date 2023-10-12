import React from 'react'
import globalStyle from '../../../styles/Home.module.css';
import Image from 'next/image';
import Link from "next/link";

export default function index() {

    const theoryMethodArray = [
        {
            name: "Why Learn Theory Over Just Tabs?",
            href: "/method/theory/whyLearnTheoryOverJustTabs"
        },
        {
            name: "Identify I, IV, V",
            href: "/method/theory/identify145"
        },
    ]

    const methodMapped = theoryMethodArray.map((x, i) =>
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
            <h1>Theory</h1><br />

            <img className={globalStyle.image} src="https://content.app-sources.com/s/28860800263691606/uploads/Stock_Images/student-studying-music-theory-guitar-sheet-music-1021596.png" alt="" />
            <div className={globalStyle.leftAlign}>
                <ul>
                    {methodMapped}
                </ul>
            </div><br /><br />


        </div>
    )
}
