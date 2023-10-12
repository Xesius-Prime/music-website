import React, { useState } from 'react'
import globalStyle from '../../../../styles/Home.module.css';
import Image from 'next/image';



export default function index() {






    return (
        <div>
            <h1>Theory</h1>
            <h2>Why Double Sharps and Flats</h2><br />

            <h3>Ahh.. Nice Alphabetical Order</h3>
            <Image
                src='/Theory/explaining why double sharps and double flats etc.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={globalStyle.image2}
                suppressHydrationWarning={true}
            />
            <div className={globalStyle.leftAlign}>
                <p>Look how nice the picture above looks.</p>
                <p>It's very alphabetical. ABCDEFG kinda thing. <br /> Nice and easy to read when its like that.</p>
                <p>It's an A sharp minor scale.</p>
                <p>In A sharp minor scale, all the notes are sharp.</p>
                <p>If we want to make this an A sharp <b>harmonic</b> minor scale, then we have to sharpen the 7th note (in this case the 7th is G#).</p>
                <p>But how are we supposed to sharpen a note that is already sharp?</p>
            </div><br />

            <h3>Wrong!</h3>
            <Image
                src='/Theory/explaining why double sharps and double flats etc part 2.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={globalStyle.image2}
                suppressHydrationWarning={true}
            />
            <div className={globalStyle.leftAlign}>
                <p>If we sharpened the G# and just called it A natural, that comes before the final A#, then it would look bad.</p>
                <p>It's no longer alphabetical.</p>
                <p>Also constantly having to make the distinction between A and A# in the bars while playing or writing is a bit cumbersome.</p>
                <p>This is why we use things like double sharps, or double flats, so we can retain the alphabetical and diatonic order of the notes, so it's easier to make sense of, and thereby easier to play, and write the music.</p>
            </div><br />

            <h3>Ahha! Double sharp hath restored order to our kingdom!</h3>
            <Image
                src='/Theory/explaining why double sharps and double flats etc part 3.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={globalStyle.image2}
                suppressHydrationWarning={true}
            />
            <div className={globalStyle.leftAlign}>
                <p>As you can see above, when we turn the G#, into a Gx (double sharp), it helps us retain the order for ease of reading, playing, writing, and generally making sense of the music.</p>
            </div>

        </div>
    )
}
