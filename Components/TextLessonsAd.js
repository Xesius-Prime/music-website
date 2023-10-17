import React from 'react'
import globalStyle from '../styles/Home.module.css'
import EmailForLessons from "../Components/EmailForLessons"

export default function TextLessonsAd() {

    return (
        <div>

            <div className={globalStyle.textLessonAd}><br />
                <h1>Interested in Lessons with Me?</h1><br />

                <h2>I have a <b>highly affordable</b> <br /> new method for teaching, <br /> and theres a <b>free trial!</b></h2><br />

                <h2>Send me a message!</h2>

                <EmailForLessons />

                <div className={globalStyle.divider}></div>

                <h2>The Deal</h2><br />
                <h3></h3>
                <h3>Why Choose Lessons with Me?</h3>
                <div className={globalStyle.leftAlign}>
                    <p>(Make Video of Content Below)</p><br />
                    <p>Who Am I?:</p>
                    <p>Hello! Nice to meet you, my name is William Devonshire. :)</p>
                    <p>- I've Obtained My Grade 8 Guitar, Grade 6 Piano, and Grade 9 Theory all with the Royal Conservatory of Music.</p>
                    <p>- I Have 14 Years of Teaching Experience.</p>
                    <p>- I've Guided Hundreds of Students from Complete Beginner to Highly Advanced Levels.</p>
                    <p>- I'm a Prolific Composer, Song-Writer, and Berklee Graduate for Music Production.</p>
                    <p>- and a Professional Performing Artist, Playing Cafes, Pubs, Private Parties and Restaurants.</p>
                </div>

                <br />

                <h3>What I Can Teach</h3>
                <div className={globalStyle.flex}>
                    <div className={globalStyle.leftAlign}>
                        <p>Instruments: <br />
                            - Guitar <br />
                            - Piano <br />
                            - Ukulele</p>
                    </div>
                    <div className={globalStyle.leftAlign}>
                        <p>Topics: <br />
                            - Repertoire/ Pieces <br />
                            - Performance <br />
                            - Sight Reading <br />
                            - Technique <br />
                            - Improvisation <br />
                            - Theory <br />
                            - Composition <br />
                            - History</p>
                    </div>
                </div>

                <div className={globalStyle.divider}></div>

                <h3>How Lessons Work:</h3> <br />
                <div className={globalStyle.leftAlign}>
                    <h3>1. Assess</h3>
                    <p>When we first start lessons I must assess the student.</p>
                    <div className={globalStyle.flex}>
                        <img src="https://static.wixstatic.com/media/440b2a_a02366df197c490d8d65c34a6ec10699~mv2.jpg/v1/fill/w_682,h_452,al_c,lg_1,q_80,enc_auto/male-doctor-writing-on-medical-document_jpg_s%3D612x612%26w%3D0%26k%3D20%26c%3DDEliLjpb5b9GuMHF3gyS8tLqa.jpg" alt="" />
                        <p>- What are their goals? <br />
                            - What's their preferred instrument? <br />
                            - Do they know anything about <br /> the instrument already? etc etc. </p>
                    </div>

                    <br />

                    <h3>2. Lesson</h3>
                    <p>Once I've assessed the student, I will give specific resources, which I think are exactly what they need to progress.</p>
                    <div className={globalStyle.flex}>
                        <p>This will be in the form of: <br />
                            - Conversations with Me<br />
                            - Texts <br />
                            - Videos <br />
                            - Pictures<br />
                            - PDF Files<br />
                            - Games <br />
                            - Etc etc Relevent Resources</p>
                        <img src="https://st4.depositphotos.com/1782112/40317/i/450/depositphotos_403172532-stock-photo-white-jigsaw-puzzle-pieces-gray.jpg" alt="" />
                    </div>
                    <p>Essentially whatever it takes to help the student progress.</p>
                    <br />

                    <h3>3. Assignment</h3> <br />
                    <div className={globalStyle.flex}>
                        <img src="https://static.wixstatic.com/media/440b2a_2b507038de544ddc821eec7bb4e6f2c1~mv2.jpg/v1/crop/x_0,y_0,w_400,h_223/fill/w_460,h_257,al_c,lg_1,q_80,enc_auto/caucasian-woman-playing-guitar-live-on-a-smartphone-the-girl-leads-a-music-video-blog-stoc.jpg" alt="" />
                        <p>After the student has digested the material I supplied for them in the lessons portion, I then give them an assignment which helps them better understand, further master and solidify their new found knowledge.</p>
                        <p>This might be in the form of them recording themselves playing a song for instance, and sending it to me so I can see and hear them in action and give more specific feedback.</p>
                    </div>
                </div>

                <div className={globalStyle.divider}></div>

                <h3>Testimonial</h3> <br />
                <iframe width="560" height="315" src="https://www.youtube.com/embed/iu4uP4aL5E0?si=iaYotmfR64PEdLCJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className={globalStyle.video}></iframe>


                <div className={globalStyle.divider}></div>

                <h2>Why You Need A Teacher</h2>
                <br />
                <iframe width="560" height="315" src="https://www.youtube.com/embed/H-T477uVtl8?si=tgR3Ij4WcmyYw_Kq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className={globalStyle.video}></iframe>
                <br /> <br />
                <h3>It's not absolutely necessary, but...</h3>
                <div className={globalStyle.leftAlign}>
                    <p>Chairs aren't absolutely necessary, but they're definitely useful and nice to have. Windows aren't absolutely necessary, but they are also quite a blessing to have the fresh air and sunlight. etc etc...</p>

                    <p>The first people who started learning music didn't need it, right? Unless the aliens taught it to them, but then again, who taught it to the aliens?</p>

                    <p>It depends on what you want to learn. If all you want to do is play a few simple chords around the campfire, and you're self disciplined, then you probably don't need a teacher for that.</p>

                    <p>The more you want to learn, the more a good teacher is beneficial.</p>

                    <p>It's like any human discovery. Through the tens of thousands of years of human evolution, people have struggled to make discoveries. It would be crazy of us to disregard all they discovered, just so we can go through all the trouble they went through, to rediscover what they already discovered.</p>

                    <p>Same with music, it's better to stand on the shoulders of the discoveries of countless lives before us, so we can go even further than they could've.</p>
                    <br />

                    <h3>Alternatives to a Teacher:</h3>

                    <h4>- YouTube <br />- Method Books <br />- Yousician</h4>


                    <h3>The problem with these ways:</h3>
                    <p>The problem with these ways though is they tend to be ONE WAY.</p>

                    <p>It's a great tool to help teach the fundamentals, but its quite one directional and doesnt do everything and therefore doesnt replace a teacher lets look more into why.</p>

                    <p>The computer doesnt listen to you and watch how you play like a teacher who's been teaching for 13 years, and playing for 22 years, and give you personalized feedback.</p>

                    <p>You cant ask the computer questions and get personalized feedback (yet).</p>

                    <p>I’ve taught many YouTube learners, people that tried it for a few years. They all can play a few famous intros, but have no idea how to count, where the notes on the fretboard are, theory concepts etc..</p>

                    <p>Also a teacher teaches how to use new music learning tech to your benefit. The teacher can encompass all the technologies, whereas the technologies neither encompass all of the other technologies, nor the teacher.</p>

                    <p>A teacher can be more subtle and flexible in their approach, whereas technologies can be rigid.</p>

                    <p>The RIGHT teacher will see your likes, listen to your aspirations, offer inspiration in different directions, and spot/correct subtle things that can hurt your playing. You will make more progress, and develop fewer bad habits.</p>

                    <p>I'm not against online by any means, and am self taught to a degree, but have had a lifetime of learning music, from many experts as well.</p>

                    <p>Teachers can see and hear things that computers cant... yet... <br /> They're... listening.... to... us...!</p>

                    <br />
                    <br />
                </div>

                <h3>Is there a better way to learn <br /> then a personalized and qualified mentor?</h3>
                <div className={globalStyle.leftAlign}>
                    <p>If money wasn't an issue and you had the choice to learn alone or with a expert teacher/ mentor, then what would you prefer?</p>
                    <p>If you had the choice between a robot, a book, or a seasoned, personalized and qualified mentor what would you choose?</p>
                    <p>The benefits of having a teacher are immeasurable as compared to self-directed studies. Is this not self evident?</p>
                    <p>You dont just want a teacher you want a GREAT teacher.</p>
                    <p>I've taught hundreds and hundreds of students for 14 (written in 2023) years now.
                        I'd have to be an ostrich not to notice a pattern of success.
                        Heck I wouldn't have been able to teach so long, and so many happy students. I'dve been fired if they werent getting results.</p>
                    <p>Isn't it important to have have a mentor in anything you wish to excel at?! Or are you happy to take lessons from a pickle?!
                        Is that what you want?! A pickle for a teacher?!</p>
                    <br />

                    <h4>Great Players tend to Have Great Teachers:</h4>
                    <p>I know a guy who has a masters degree in music, been playing professionally for 30 years. Has his own book out.... and HE STILL STUDIES with masters from different genres.</p>
                    <p>Bach, (considered to be one of the greatest composers who ever lived) then a young man of twenty, walked from Arnstadt to Lübeck, a distance of more than 400 kilometres (250 miles), and stayed nearly three months to hear the Abendmusik, meet the pre-eminent Lübeck organist, hear him play, and, as Bach explained, "to comprehend one thing and another about his art".</p>
                    <p>Yes on your own is cheaper (not necessarily in terms of the time you might spend messing about), and you do what you can do with what you have, but are you telling me that if the musician you most look up to offered to give you weekly lessons for free you wouldnt take it?</p>
                </div>
                <br />

                <h3>Teachers give structure</h3>

                <h3>Theres no such thing as not having a teacher. <br /> You're always learning from someone</h3>
                <div className={globalStyle.leftAlign}>
                    <p>Even Jimi Hendrix, though many know him as self taught, learnt from people throughout his life. Different band members or guys he knew who knew stuff, they would show him this or that, and he was able to collect it all in little lessons from them here and there.</p>
                </div>
                <br />

                <h3>Save time, save money, and save yourself <br /> from the frustration, confusion, and self doubt <br />that comes from learning alone.</h3>
                <div className={globalStyle.leftAlign}>
                    <p>Time is money, and it generally takes more time to learn alone than with a teacher, for obvious reasons.</p>
                    <p>Have you ever seen those kids who can play music better than you can? Do you think most of them reached that level on their own?</p>
                    <p>Wouldn't it be nice to have someone who knows your goals, and will tell you if you're actually on the right path to them, as opposed to you just stumbling around confused and frustrated wasting time?</p>
                    <p>Imagine putting time and effort into learning and practicing something that will eventually turn out to be wrong. And then you will struggle to unlearn it and then RElearn it properly.</p>
                    <p>Now instead imagine almost giving up on something important, but your teacher, knowing how important it is, encourages you to continue. You didnt even know it was important, or you deemed it "too hard", and were ready to just give up.</p>
                    <p>Would you rather poke around for hours on the internet looking for what you should do next, confused, frustrated, and distracted, or just have someone hear your goals, and hear how you play, and offer you direct and immediate personalized information, in small chunked actionable steps, all while holding you accountable?</p>
                    <p>It’s about productivity and knowledge. For productivity- you could spend 30 minutes trying to find something to haphazardly learn on YouTube. Then another 30 minutes to learn it. In that hour you could have been practicing exercises that will move you forward, being more productive with your time.</p>

                    <p>An expert teacher can get you from A to Z generally quicker, and more efficiently, then doing it alone.</p>
                    <p>A few years with a teacher can go a long way. In some cases you can save yourself years.</p>
                    <p>One can spend YEARS trying to figure out something on their own, that a teacher could have corrected in ONE LESSON!</p>
                    <p>You dont wanna tell people your self taught for five years, and be worse than someone that's played for one year with a teacher.</p>
                    <p>Save countless hrs doing unproductive guitaring.</p>
                    <p>Expert teachers are also aware of a lot of inexpensive, or free technology, and resources that can supplement and amplify your success.</p>
                    <p>I dont plan on teaching my students forever, I plan on empowering them to take their learning into their own hands more.</p>
                    <p>Teachers can use technology but tech cant use teachers... dun dun dun! Or can they!?</p>
                    <p></p>
                    <br />

                    <h3></h3>

                </div>

                <br />
            </div>
            <br /> <br /> <br />
        </div>
    )
}
