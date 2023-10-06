import React from 'react';
import Link from "next/link";
import globalStyle from '../../../styles/Home.module.css'

export default function index() {

    return (
        <div>
            <h1>Teaching</h1><br />

            <img className={globalStyle.image3} src="https://classplusapp.com/growth/wp-content/uploads/2023/09/Simulated-teaching-strategy-390x290.jpg" alt="" />

            <ul className={globalStyle.leftAlign}>
                <li>
                    <Link
                        href="/method/teaching">
                        *
                    </Link>
                </li>
            </ul>

            <h2>Why Teach?</h2>
            <h3>1. Can be a very nice way to make money.</h3>
            <div className={globalStyle.leftAlign}>
                <p>When I was younger I used to wash dishes at different restaurants, and teaching is a lot better than washing dishes at a restaurant in my opinion, and it usually pays better.</p>
            </div>

            <h3>2. Pays Better than Minimum Wage</h3>
            <div className={globalStyle.leftAlign}>
                <p>Even at base rates of $10, thats still $10 per half hour, which is $20 per hour, which is better than minimum wage.</p>
            </div>

            <h3>3. Improves Your Own Skills in Music</h3>
            <div className={globalStyle.leftAlign}>
                <p>By helping your students learn the basics, it will help solidify and master the basics for you.</p>
                <p>The basics at a high level of mastery is quite powerful.</p>
                <p>For instance, when I started teaching piano, I wasn't the best with quick note recognition, but now that I've taught the basics day in and day out to so many students over the years, now those notes are mastered.</p>
            </div>

            <h3>4. Teach Online via Zoom</h3>
            <div className={globalStyle.leftAlign}>
                <p>To teach online there are definitely challenges, but there are also a lot of benefits.</p>
                <p>If you teach online, then you can teach from anywhere theres a good internet, so it could free you up to travel.</p>
                <p>Who doesn't like the idea of living in some tropical country for a bit, or for the winter, and just bringing your work with you?</p>
                <p></p>
            </div>


        </div>
    )
}
