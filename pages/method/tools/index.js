import React from 'react'
import globalStyle from '../../../styles/Home.module.css';
import Image from 'next/image';
import Link from "next/link";

export default function index() {

    const guitarMethodArray = [
        {
            name: "MuseScore",
            href: "/method/tools/museScore"
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

            <img src="https://images.squarespace-cdn.com/content/v1/58faa30ee6f2e151cda11af0/1549995019857-QKKKI8L5HBDOUKDLG43J/ToolsOf_the_Trade.jpg" alt="" />

            <div className={globalStyle.leftAlign}>
                <ul className={globalStyle.flexColumn}>
                    {methodMapped}
                </ul>
            </div>


        </div>
    )
}
