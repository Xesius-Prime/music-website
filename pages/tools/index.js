import React from 'react'
import globalStyle from '../../styles/Home.module.css';
import Image from 'next/image';
import Link from "next/link";

export default function index() {

    const guitarMethodArray = [
        {
            name: "MuseScore",
            href: "/tools/museScore"
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
            <h1>Tools</h1><br />

            <img src="https://www.lawpracticetipsblog.com/wp-content/uploads/sites/557/2019/07/Tools.jpg" alt="" />

            <div className={globalStyle.leftAlign}>
                <ul className={globalStyle.flexColumn}>
                    {methodMapped}
                </ul>
            </div>


        </div>
    )
}
