import React from 'react'
import Image from 'next/image';
import globalStyle from "../../../../styles/Home.module.css"

function index() {
    return (
        <div>
            <h1>Vamsi</h1>

            <h2>Oct 11 2023</h2><br />

            <h3>Pieces: <br />Book: Lesson Book 4, Piano Adventures.</h3>
            <div className={globalStyle.leftAlign}>
                <p>Grand Central Station and Nocturn. We didn't play it on this lesson, because Vamsi was very interested in learning more about theory.</p>
            </div>

            <div className={globalStyle.divider}></div>

            <h3>Double Flats and Double Sharps, and Why.</h3>
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
            </div>
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
            </div>
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


            <div className={globalStyle.divider}></div>

            <h3>Diatonic vs Chromatic for understanding why we use double flats and double sharps</h3>

            <div className={globalStyle.divider}></div>

            <h3>What Are Semitones?</h3>
            <Image
                src='/Theory/semitones and chromatic scale.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={globalStyle.image2}
                suppressHydrationWarning={true}
            />

            <div className={globalStyle.leftAlign}>
                <p>As you can see above, a semitone is when you move to the very next note.</p>
                <p>When moving from E to F, there is no black key inbetween, so thats why E to F is considered a semitone.</p>
                <p>Whereas if you look at C, to the next note up will be C#, a black key. This is because the black key is the next note after C.</p>
            </div>

            <div className={globalStyle.divider}></div>

            <h3>Tones and Semitones</h3>
            <Image
                src='/Theory/Tones and Semitones Natural Notes.png'
                width={300}
                height={300}
                alt="Picture Test"
                className={globalStyle.image2}
                suppressHydrationWarning={true}
            />
            <div className={globalStyle.leftAlign}>
                <p>B to C, and E to F, are the only notes that have no black key inbetween them. That is why <b>they are Semitone, because it moves only one note up to get from E to F.</b> </p>
                <p>Whereas A to B, there is a black key inbetween them, so to go from A to B you have to go up two notes, and not one like B to C, or E to F, and so therefore is a Tone, and not a Semitone.</p>
            </div>
            <br />



        </div>
    )
}

export default index