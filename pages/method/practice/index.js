import React from 'react';
import Link from "next/link";
import globalStyle from '../../../styles/Home.module.css'

export default function index() {
    return (
        <div>
            <h1>Practice</h1><br />

            <img className={globalStyle.image3} src="https://www.willanacademy.com/wp-content/uploads/2017/07/guitar-kids-with-music-stand.jpg" alt="" />

            <ul className={globalStyle.leftAlign}>
                <li>
                    <Link
                        href="/method/practice/whyPractice">
                        Why Master Practice?
                    </Link>
                </li>
                <li>
                    <Link
                        href="/method/practice/whatShouldYourPracticeLookLike">
                        What Should Your Practice Look Like?
                    </Link>
                </li>
                <li>
                    <Link
                        href="/method/practice/practiceSlow">
                        Practice Slow
                    </Link>
                </li>
                <li>
                    <Link
                        href="/method/practice/1MinutePerDay">
                        1 Minute Per Day
                    </Link>
                </li>
                <li>
                    <Link
                        href="/method/practice/differentWaysToPractice">
                        Different Ways to Practice
                    </Link>
                </li>
                <li>
                    <Link
                        href="/method/practice/reasonsWhyStudentsDontPractice">
                        Reasons Why Students Don't Practice
                    </Link>
                </li>
                <li>
                    <Link
                        href="/method/practice/tipsToHelpYouPractice">
                        Tips to Help You Practice
                    </Link>
                </li>
            </ul>

            <div className={globalStyle.divider}></div>

            <h2>Record Yourself <br />& Put It On Youtube</h2>
            <div className={globalStyle.leftAlign}>
                <p>If you record yourself now and then when you practice and put it on Youtube, then you can do many interesting things like:</p>
                <br />

                <h3>Chronologically track your progress.</h3>
                <p>You will have a large compilation of videos you can go back to and watch when you're older, and see how far you've progressed with your music.</p>
                <br />

                <h3>Share the link with family and friends.</h3>
                <p>It's a good, easy way to show a kids Grandparents how their Grandchildren are doing with music.</p>
                <p>Also you can send cool songs you play to your friends, to show them what you do, and maybe inspire them to play as well.</p>
                <br />

                <h3>Get better at playing pieces for an audience, and in general.</h3>
                <p>By playing for the camera, it's like a live performance, so it gets you more prepared for when you play infront of people.</p>
                <p>But also, it can incentivize you to really master a piece, so you can play it really well for your performance, just like a recital. It's like a mini recital.</p>
                <br />

                <h3>Gain insight from a different perspective.</h3>
                <p>By watching the video you make of yourself playing a song or practicing, you can see and hear yourself from the outside perspective.</p>
                <p>This can help you become better at certain things, as you will be able to get insights into your practicing, that you may not have been able to get while IN the practice itself.</p>
            </div>

            <br /><br /><br />
        </div>
    )
}
