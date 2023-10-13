import React from 'react';
import Link from "next/link";
import globalStyle from '../../../../styles/Home.module.css'

export default function index() {
    return (
        <div>
            <h1>Practice</h1><br />
            <h2>Different Ways to Practice</h2>

            <img className={globalStyle.image3} src="https://blog.4d.com/wp-content/uploads/2017/11/ManyWays.jpg" alt="" />

            <div className={globalStyle.divider}></div>

            <h3>1. IMAGINING</h3>
            <img src="https://cdn.britannica.com/53/180553-050-FE609C89/Thinker-Auguste-Rodin-Museum-Paris-1904.jpg" alt="" />

            <div className={globalStyle.leftAlign}>
                <p>This is when you just close your eyes and you imagine yourself playing.</p>
                <p>Yes this is actually a viable way to practice.</p>
                <p>People think that there is only one instrument, but really there are two. There's the one in real life, and theres the one in your mind. I call the one in my mind the ghost piano or ghost guitar etc.</p>
                <p>Try imagining this ghost instrument and playing some songs on it in your head as if you were playing a real instrument.</p>
                <p>The benefit of doing this is you can be laying down getting ready to sleep, but also practicing as you drift off to sleep.</p>
                <p>Not only does a ghost instrument exist, but a ghost notation or tab also exists.</p>
                <p>So you can imagine a piece of music, and then also imagine playing it with the ghost instrument.</p>

            </div>

            <div className={globalStyle.divider}></div>

            <h3>2. READING & IMAGINING</h3>
            <img src="https://img.freepik.com/premium-vector/child-reading-book-imagining-things_59690-13.jpg?w=2000" alt="" />
            <div className={globalStyle.leftAlign}>
                <p>The difference between just imagining and reading and imagining, is that for just imagining, one isn't looking at anything except the ghost instrument in their mind, whereas with reading and imagining, you would be looking at notation or tabs and imagining yourself playing the notes you are reading on a real page.</p>
                <p>I once went to a show and the Harpsichord player was doing awesome. I later commented that the harpsichord player was really good to the guy who organized the show, and he said the harpsichord player doesnt even have a keyboard at his house, but that he just looks at the sheet music and imagines himself playing the piece.</p>
            </div>

            <div className={globalStyle.divider}></div>

            <h3>3. READING & PLAYING</h3>
            <img src="https://musiprof.com/wp-content/uploads/2020/03/Boy-reading-piano.jpg" alt="" />
            <div className={globalStyle.leftAlign}>
                <p>This is when you read the music, usually from a piece of paper in front of you, and then play on an actual instrument.</p>
                <p>Even though you are playing on real instrument and looking at a real piece, the ghost instruments will still exist to some extent. For example, it's considered good technique to look at the page and not look down at your instrument, so the way you "look down" at your instrument while keeping your eyes on the page, is you keep looking at the page, but in your minds eye you see the ghost instrument.</p>
            </div>

            <div className={globalStyle.divider}></div>

            <h3>4. PLAY BUT NOT READING</h3>
            <img src="https://improviseforreal.com/sites/default/files/wc_bass_music_colors_960x540.jpg" alt="" />
            <div className={globalStyle.leftAlign}>
                <p>When you play but arent reading, you are not looking at any piece of music in front of you. Your eyes might even be closed. You might be looking at a piece in your mind, or you might not be thinking of a piece at all, and moreso just going with the flow.</p>
            </div>
            <br />
        </div>
    )
}
