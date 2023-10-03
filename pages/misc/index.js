import React, { useState } from 'react';
import globalStyle from "../../styles/Home.module.css";
import Link from "next/link";

export default function Index() {

    const guitarMethodArray = [
        {
            name: "Left Hand Right Hand",
            href: "/misc/leftHandRightHand"
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
            <h1>Misc</h1><br />

            <img className={globalStyle.image} src="https://twimgs.com/nojitter/gama/image/dT4Azx7Te.gif?width=828&quality=80&disable=upscale" alt="" />

            <div className={globalStyle.leftAlign}>
                <ul className={globalStyle.flexColumn}>
                    {methodMapped}
                </ul>
            </div>
        </div>
    );
}
