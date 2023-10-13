import React from 'react';
import Link from "next/link";
import globalStyle from '../../../../styles/Home.module.css'

export default function index() {
    return (
        <div>
            <h1>Practice</h1>
            <h2>Practice Slow</h2>

            <img className={globalStyle.image3} src="https://churchillhead.files.wordpress.com/2016/10/tortoise_hare.jpg?w=676" alt="" />

            <div className={globalStyle.leftAlign}>
                <p>Its better to practice slow and exact, than it is to practice fast and with mistakes.</p>
                <p>This is because if you practice fast, you're more likely to make mistakes, and if you practice mistakes, then you'll get good at making mistakes.</p>
                <p><b>People say "Practice Makes Perfect!", but they're incorrect!!</b> because if you practice with mistakes, then you're practicing those mistakes!</p>
                <p>You are essentially downloading the pattern into your muscle memory. So if you are practicing with mistakes, then you are downloading those mistakes to the muscle memory of your hand.</p>
                <p>Trust me, you don't want to practice mistakes. What a waste of time that would be.</p>
                <p>However, if you practice slow and exactly, then you will download the exactly correct muscle memory into your hands.</p>
                <p><b>Don't worry about speed, you will INEVITABLY speed up, as you naturally become more comfortable with the pattern.</b> Inevitably means it's certain to happen.</p>
                <p>So basically play it slow and exact. It will naturally speed up as you become comfortable with the pattern, but it will be from a much more grounded space than if you tried to play it fast right away and practiced mistakes and bad habits.</p>

                <p>When you play slowly you're like Neo from the matrix. He's able to dodge the bullets, because he can slow down time.</p>
                <p>You can also slow down time with music, by just playing slower, and that will help you dodge the "bullets" of mistakes.</p>
            </div>
        </div>
    )
}
