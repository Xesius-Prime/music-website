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

            <div>
                <h1>Why Teach?</h1>
                <h2>Can be a very nice way to make money.</h2>
                <div className={globalStyle.leftAlign}>
                    <p>When I was younger I used to wash dishes at different restaurants, and teaching is a lot better than washing dishes at a restaurant in my opinion, and it usually pays better.</p>
                    <br />
                </div>

                <h2>Pays Better than Minimum Wage</h2>
                <div className={globalStyle.leftAlign}>
                    <p>Even at base rates of $10, thats still $10 per half hour, which is $20 per hour, which is better than minimum wage.</p>
                    <br />
                </div>

                <h2>Improves Your Own Skills in Music</h2>
                <div className={globalStyle.leftAlign}>
                    <p>By helping your students learn the basics, it will help solidify and master the basics for you.</p>
                    <p>The basics at a high level of mastery is quite powerful.</p>
                    <p>For instance, when I started teaching piano, I wasn't the best with quick note recognition, but now that I've taught the basics day in and day out to so many students over the years, now those notes are mastered, and I can sight read much quicker.</p>
                    <br />
                </div>

                <h2>Teach Online via Zoom</h2>
                <div className={globalStyle.leftAlign}>
                    <p>To teach online there are definitely challenges, but there are also a lot of benefits.</p>
                    <p>If you teach online, then you can teach from anywhere theres a good internet, so it could free you up to travel.</p>
                    <p>Who doesn't like the idea of living in some tropical country for a bit, or for the winter, and just bringing your work with you?</p>
                    <p></p>
                    <br />
                </div>
            </div>

            <div className={globalStyle.divider}></div>

            <div>
                <h1>How?</h1>

                <h2>Key Questions</h2>
                <div className={globalStyle.leftAlign}>
                    <h3>How many Students?</h3>
                    <p>A good start is just 1, and you can always build from there.</p>
                    <br />

                    <h3>How much will you charge?</h3>
                    <p>You can try different market approaches. I started at $17 CAD per 30min lesson once a week, but I wanted to be sure I could get students so I could quit my job at the time, so maybe $20 is a better number.</p>
                    <br />
                </div>
                <br />

                <h2>Getting Students</h2>
                <div className={globalStyle.leftAlign}>
                    <h3>Facebook Business Page</h3>
                    <br />

                    <h3>Banner Ad</h3>
                    <p>If you go to <a className={globalStyle.highlightAndUnderline} href="https://www.canva.com/">Canva</a>, then you can make a banner ad.</p>
                    <p>Then you can use this on your Facebook Business page to get peoples attention</p>
                    <br />

                    <h3>Sales Pitch</h3>
                    <p>When people start asking for lessons, what will you say to them to sell them on your lessons?</p>
                    <br />

                    <h3>Website</h3>
                    <p>This can be useful perhaps as a resume, and as a means of sending people to a link where they can see an overview of who you are.</p>
                </div>
                <br /><br />



                <h2>Tools of the Trade</h2>
                <div className={globalStyle.leftAlign}>
                    <h3>MuseScore</h3>
                    <p>Super useful for various things. <a className={globalStyle.highlightAndUnderline} href="/method/tools/museScore">Click Here</a></p>
                    <br />

                    <h3>On Screen Piano</h3>
                    <br />

                    <h3>Zoom</h3>
                    <p>Or something with <b>Screen Share,</b> because you're going to want to share your screen.</p>
                    <br />
                </div><br />


                <h2>Dealing with Payment</h2>
                <div className={globalStyle.leftAlign}>
                    <h3>eTransfers for Payments in Country</h3>
                    <p>When you are teaching students that live in your country, you can likely just do an eTransfer.</p>
                    <br />

                    <h3>PayPal for International Payments</h3>
                    <p>When you are teaching students internationally, I have found PayPal to work quite well. If you know of a better payment processing platform feel free to use it, I just have personally found PayPal works great for international students, and for writing invoices in general.</p>
                    <br />

                    <h3>X Mind</h3>
                    <p>I use this to keep track of payments.</p>
                    <p>You can also use paper, but its easier to copy and paste, and make edits when its on the computer.</p>
                    <p>I just find its a nice easy, efficient, and organized way of tracking payments.</p>
                    <br />

                </div>





            </div>

        </div>
    )
}
