import React, { useState } from 'react'
import globalStyle from '../../../styles/Home.module.css';
import Link from "next/link";




export default function index() {



    return (
        <div>
            <h1>Tools</h1>
            <h2>MuseScore</h2>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/g6l9_GolWS8?si=v1sDrAjf_0HPexW0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className={globalStyle.video}></iframe> <br /> <br /> <br />

            <button className={globalStyle.yellowButton}><Link href="https://musescore.org/en/download" target="_blank" className={globalStyle.blackText}>
                Click Here to <br />Download <br /> MuseScore for Free
            </Link></button> <br /> <br />

            <div className={globalStyle.titleDividerBackground}>
                <h1>Why Use MuseScore?</h1>
            </div>

            <h2>1. It's FREE</h2>
            <img src="https://img.grouponcdn.com/seocms/4RNJPE2urzF6WQs4JwdFLdUx9BU8/1080x648_hero_copy_6_Gift_Guide_KG_V2_jpg-1080x648" alt="" />


            <div className={globalStyle.leftAlign}>
                <p>Not only is it free but it's a highly valuable tool as a musician... Need I say more?</p>
                <p>It's like getting an awesome present from a friend who really knows you.</p>
            </div><br />

            <div className={globalStyle.divider}></div>


            <h2>2. Easier to Find EXACTLY <br /> What You're Looking For</h2>
            <img src="https://www.artzstudio.com/content/images/wordpress/2020/05/find-on-google-help-1-1024x768.jpg" alt="" />
            <div className={globalStyle.leftAlign}>
                <p>Like NetFlix for sheet music.</p>
                <p>It's obviously much more efficient to use NetFlix than to drive to a movie store. Similarly, it's much more efficient to use MuseScores massive library than to drive to a music store.</p>
                <p>MuseScore is a giant library of music, constantly being updated with new pieces. Many you might not even be able to find at the music store.</p>
            </div> <br />


            <div className={globalStyle.divider}></div>

            <h2>3. Easier to Rearrange & Edit</h2>
            <img src="https://www.essaytigers.com/img/edit-my-essay.jpg" alt="" />
            <div className={globalStyle.leftAlign}>
                <p><b>MuseScore is like the Microsoft Word of Music.</b></p>
                <p>Think about how much easier it is to edit your assignment using Microsoft Word, than it is to edit it on pen and paper.</p>
                <p>Easily rearrange from any other instrument to your instrument.</p>
                <p>Easily rearrange a piece thats too difficult, and make it playable at your level.</p>
                <p>Easily give all the notes their note names, so you dont even have to know how to recognize the notes!</p>
                <p>And MuseScore automatically translates notation into tablature! So that means for string players, like guitar or ukulele, you will be able to take ANY piece written on other instruments, and copy paste it for guitar, and it will automatically translate from notation into tablature.</p>
            </div> <br />

            <div className={globalStyle.divider}></div>

            <h2>4. Helps You Master Theory</h2>
            <img src="https://cdn.vectorstock.com/i/preview-1x/10/69/first-place-prize-champion-trophy-with-hand-vector-42231069.jpg" alt="" />
            <div className={globalStyle.leftAlign}>
                <p>Imagine all the benefits you get from knowing how to read and write.</p>
                <p>Now imagine all the benefits you could similarly get from knowing how to read and write music.</p>
                <p>By playing around with, and writting/ arranging in MuseScore, you will be indirectly familiarizing yourself with music theory principles, thereby enhancing your overall ability to read and write music.</p>
                <p>Because the program holds up certain frameworks, (such as the rhythm count within each bar for instance), it thereby familiarizes you with those foundational elements of theory, and you pick up on how it works almost indirectly, just by playing around with it.</p>
            </div><br />

            <div className={globalStyle.divider}></div>

            <h2>5. Learn Other Instruments Faster</h2>
            <img src="https://static.scientificamerican.com/sciam/cache/file/E2F0AAE0-B240-4FC8-9CAC6EB7FAB57A3A_source.jpg" alt="" />
            <div className={globalStyle.leftAlign}>
                <p>By learning Notation & Theory, you will be able to learn other instruments faster. This is because <b>by learning Notation and Theory for ONE instrument, you essentially learn it for ALL other instruments.</b> </p>
            </div>

            <br /><br /><br /><br /> <br />
        </div>
    )
}
