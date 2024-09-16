import React from 'react'
import Link from "next/link";
import globalStyle from '../../../styles/Home.module.css';
import Image from 'next/image';

export default function index() {

    const guitarMethodArray = [
        {
            name: "Finger Names",
            href: "/method/piano/fingerNames"
        },
        {
            name: "Clef Recognition",
            href: "/method/piano/clefRecognition"
        },
        {
            name: "Note Group Recognition",
            href: "/method/piano/noteGroupGame"
        },
        {
            name: "Key Recognition",
            href: "/method/piano/keyRecognition"
        },
        {
            name: "Notation",
            href: "/method/piano/notation"
        },
        {
            name: "Improvisation",
            href: "/method/piano/improvisation"
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
        <div>
            <h1>Piano</h1><br />

            <Image
                src='/Piano/piano-pic.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={globalStyle.image}
                suppressHydrationWarning={true}
            />

            <ul className={globalStyle.leftAlign}>
                {methodMapped}
            </ul>
        </div>
    )
}
