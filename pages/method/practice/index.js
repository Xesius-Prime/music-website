import React from 'react';
import Link from "next/link";
import globalStyle from '../../../styles/Home.module.css'

export default function index() {

    const navItemsArray = [
        {
            link: "/method/practice/whyPractice",
            name: "Why Master Practice?"
        },
        {
            link: "/method/practice/whatShouldYourPracticeLookLike",
            name: "What Should Your Practice Look Like?"
        },
        {
            link: "/method/practice/practiceSlow",
            name: "Practice Slow"
        },
        {
            link: "/method/practice/1MinutePerDay",
            name: "The At Least 1 Minute Per Day Challenge"
        },
        {
            link: "/method/practice/differentWaysToPractice",
            name: "Different Ways to Practice"
        },
        {
            link: "/method/practice/reasonsWhyStudentsDontPractice",
            name: "Reasons Why Students Don't Practice"
        },
        {
            link: "/method/practice/tipsToHelpYouPractice",
            name: "Tips to Help You Practice"
        },
        {
            link: "/method/practice/practiceWithAMetronome",
            name: "Practice with a Metronome"
        },
    ]

    const mappedNavItemsArray = navItemsArray.map(x => {
        return (
            <li>
                <Link
                    href={x.link}>
                    {x.name}
                </Link>
            </li>
        )
    })

    return (
        <div>
            <h1>Practice</h1><br />

            <img className={globalStyle.image3} src="https://www.willanacademy.com/wp-content/uploads/2017/07/guitar-kids-with-music-stand.jpg" alt="" />

            <ol className={globalStyle.leftAlign}>
                {mappedNavItemsArray}

            </ol>

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
            <br /><br />

            <h2>The Real Piece & the Imagined One</h2>
            <div className={globalStyle.leftAlign}>
                <p>Sometimes when my students are playing a piece, I notice that they play certain patterns incorrectly, as if they weren't actually looking at the page of music. This is even when they are looking directly at the music.</p>
                <p>I couldn't quite put my finger on it, but I think I've come to understand, and can now elucidate, what'd going on here.</p>
                <p>There is the real piece. This is the one that is on the actual page infront of the students.</p>
                <p>But there is also an imagined piece. This is the one that exists in their minds as a mental representation of the real piece.</p>
                <p>The problem comes when they are paying more attention to the imagined piece, rather than the real piece.</p>
                <p>If the imagined piece was exactly the same as the real piece, then there wouldn't be a problem,</p>
                <p>but unfortunately the imagined piece in the mind of a player, is likely to not be the same as the real one on the page.</p>
                <p>Sometimes we can be look directly at the real piece on the page, but the imagined piece is so strong in our minds that it overlays the real piece, hence why students can sometimes be looking at the real page, but not actually seeing it.</p>
                <p>It's hard to know when you are doing this sometimes, and thats partly why a teacher can be so useful, to help their students break the spell of the imagined piece, so that the student can see the real piece.</p>
                <div className={globalStyle.indentOne}>
                    <p>But at least calling it out is a good first step. <br />From here all one can really do is: </p>
                    <br />

                    <p>1. Keep an ear out for things that seem to sound wrong.</p>
                    <p>This is because if it sounds wrong, I likely is. Although some songs just sound wrong, but its on purpose, but those are usually more modern songs, so if you're playing older era music, then they are more likely to have consonant sounds.</p>
                    <p>Although the problem with this alone is that some mistakes will sound good. You Might hit a wrong note, but it actually sounds good, so you never think to check it or fix it.</p>
                    <br />

                    <p>2. Just be hyper vigilant.</p>
                    <p>Knowing that the mind is susceptible to these tricks, you can just be more vigilant when playing, and double check, or make sure, instead of guessing.</p>
                </div>
                <p>I think one of the main reasons peoples minds are susceptible to this trickery, is because people want to read the music with flow, and being hyper vigilant, to be sure they have the right note, stifles that flow more than just quickly guessing.</p>
            </div>

            <br /><br /><br />
        </div>
    )
}
