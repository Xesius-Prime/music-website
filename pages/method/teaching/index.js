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


        </div>
    )
}
