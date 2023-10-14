import React from 'react'
import Link from "next/link";
import globalStyle from '../styles/Home.module.css'

export default function NavBar() {
    return (
        <div>

            <div className={globalStyle.textLessonAd}>
                <h1>Become One of My Students!</h1>

                <div className={globalStyle.leftAlign}>
                    <p></p>
                </div>
                <button><a href="/method"><h2>Click Here!</h2></a></button>

                <div className={globalStyle.divider}></div>

                <h2>The Deal</h2>

                <div className={globalStyle.divider}></div>

                <h2>Why You Need A Teacher</h2>
                <br />
                <h3>It's not absolutely necessary, but...</h3>
                <div className={globalStyle.leftAlign}>
                    <p>Chairs aren't absolutely necessary, but they're definitely useful and nice to have. Windows aren't absolutely necessary, but they are also quite a blessing to have the fresh air and sunlight. etc etc...</p>
                    <p>The first people who started learning music didn't need it, right? Unless the aliens taught it to them, but then again, who taught it to the aliens?</p>
                    <p>It depends on what you want to learn. If all you want to do is play a few simple chords around the campfire, and you're self disciplined, then you probably don't need a teacher for that.</p>
                    <p>The more you want to learn, the more a good teacher is beneficial.</p>
                    <p>It's like any human discovery. Through the tens of thousands of years of human evolution, people have struggled to make discoveries. It would be crazy of us to disregard all they discovered, just so we can go through all the trouble they went through, to rediscover what they already discovered.</p>
                    <p>Same with music, it's better to stand on the shoulders of the discoveries of countless lives before us, so we can go even further than they could've.</p> <br />

                    <h3>YouTube:</h3>
                    <p>Youtube is a GREAT resource for learning music, but it's all one way... From the screen to the viewer.</p>
                    <p>You can't show Youtube what you're working on and have it watch and listen to you, and give you advice based for your level and general profile.</p>
                </div>
                <h3></h3>
            </div>
            <br /> <br /> <br />
        </div>
    )
}
