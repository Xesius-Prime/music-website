import React from 'react'
import Link from "next/link";
import globalStyle from '../../../../styles/Home.module.css';
import Image from 'next/image';

export default function index() {

    const guitarMethodArray = [
        {
            name: "*",
            href: "/method/piano/improvisation"
        },

    ]

    const methodMapped = guitarMethodArray.map((x, i) =>
        <div key={i}>
            <div className={globalStyle.journey}>
                <Link
                    href={x.href}>
                    {i + 1}. {x.name}
                </Link>
            </div>
        </div>
    );


    return (
        <div>
            <h1>Improvisation</h1><br />
            <img src="https://assets.eyefilm.nl/images/programme-item/_1024x512_crop_center-center_none/campagnebeeld-All-That-Jazz.jpg" alt="" />



            <ul className={globalStyle.leftAlign}>
                {methodMapped}
            </ul>

            <h1>Improvisation Exercise</h1>
            <h2>C# Minor, Romantic Era</h2> <br />

            <iframe width="560" height="315" src="https://www.youtube.com/embed/MrQrlsDA1G0?si=Aw3fWpLD4RctC73Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <h2>Arpeggio<br /> (Left Hand) <br />C# Minor</h2>

            <div className={globalStyle.leftAlign}>
                <p>This is the left hand arpeggio part.</p>
                <p>Again the numbers represent the recommended fingers.</p>
                <p>First start by playing the arpeggio with the left hand by itself.</p>
                <p>It goes 5, 3, 1, 2</p>

            </div>

            <Image
                src='/Piano/Arpeggio/Csharpminor Arpeggio Left hand.png'
                width={300}
                height={200}
                alt=""
                className={globalStyle.image3}
                suppressHydrationWarning={true}
            /> <br /> <br />
            <Image
                src='/Piano/Arpeggio/Csharpminor Arpeggio Left hand notation.png'
                width={300}
                height={200}
                alt=""
                className={globalStyle.image3}
                suppressHydrationWarning={true}
            />

            <div className={globalStyle.leftAlign}>
                <p>Just above you can see the noation, and the finger suggestion numbers underneath.</p>
            </div>



            <br /> <br /> <br />

            <h2>Scale <br /> (Right Hand) <br />C# Minor</h2>

            <div className={globalStyle.leftAlign}>
                <p>Here is the C# minor scale.</p>
                <p>The numbers are the recommended fingers, for each note.</p>
                <p>You want to practice it with the correct fingering, because it makes it more efficient to play.</p>
                <p>Play it with just the right hand first, until you're used to it.</p>
                <p>Play from left to right (ascending), <br /> and then right to left (descending).</p>
            </div>

            <Image
                src='/Piano/Scales/Minor/CsharpMinor scale.png'
                width={300}
                height={200}
                alt=""
                className={globalStyle.image3}
                suppressHydrationWarning={true}
            /> <br /> <br />
            <Image
                src='/Piano/Scales/Minor/Csharpminor scale notation.png'
                width={300}
                height={200}
                alt=""
                className={globalStyle.image3}
                suppressHydrationWarning={true}
            />

            <div className={globalStyle.leftAlign}>
                <p>Just above in the notation, you can see the names of the notes, and the numbers again represent the recommended fingering.</p>
            </div>

            <br /> <br /> <br />

            <h2>Both Hands</h2>
            <div className={globalStyle.leftAlign}>
                <p>Once you've played both hands individually, then now try to do both hands together.</p>
                <p>The left hand plays 5, 3 , 1, 2, so right when the left hand plays it's first note (5), thats when you play a note in the scale with the right hand.</p>
            </div>

            <Image
                src='/Piano/Improvisation/improvisation game c sharp minor romantic era.png'
                width={300}
                height={200}
                alt=""
                className={globalStyle.image3}
                suppressHydrationWarning={true}
            />

            <div className={globalStyle.leftAlign}>
                <p>The first level of the improvisation game is as you see above.</p>
                <p>The first note of the left hand is when the right hand plays one note of the scale, at the same time.</p>
            </div>



            <br /><br /><br /><br />
        </div>
    )
}
