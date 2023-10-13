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



            <br /><br /><br />
        </div>
    )
}
