import React, { useState } from 'react';
import globalStyle from "../../../../styles/Home.module.css";
import Link from "next/link";
import Image from 'next/image';


export default function Index() {



    return (
        <div>
            <h1>Left Hand & Right Hand</h1>
            <h2>Lesson</h2><br />

            <Image
                src='/Game/leftHandRightHandGame/left hand right hand practice black and white.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={globalStyle.image}
                suppressHydrationWarning={true}
            /> <br /> <br /> <br />

            <div className={globalStyle.divider}></div>

            <Image
                src='/Game/leftHandRightHandGame/left hand red.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={globalStyle.image}
                suppressHydrationWarning={true}
            />

            <p>This is the <b>LEFT HAND</b> coloured in <b>RED</b>.</p><br /><br />

            <div className={globalStyle.divider}></div>

            <Image
                src='/Game/leftHandRightHandGame/right hand red.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={globalStyle.image}
                suppressHydrationWarning={true}
            />

            <p>This is now the <b>RIGHT HAND</b> coloured in <b>RED</b>.</p><br /><br /> <br /> <br /> <br />

            <div className={globalStyle.flex}>
                <button><Link href="/method/misc">Back to: <br />Misc<br /> Overview</Link></button>
                <button><Link href="/method/misc/leftHandRightHand/game">Continue to: <br />Left Hand & <br /> Right Hand Game</Link></button>
            </div> <br /> <br /> <br />
        </div>
    );
}
