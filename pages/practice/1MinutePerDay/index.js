import React from 'react';
import styles from './practice.module.css';
import globalStyle from "../../../styles/Home.module.css"

export default function index() {
    return (
        <div className={styles.main}>
            <h1>Practice</h1>
            <h2>One Minute Per Day</h2>


            <div className={styles.p}>
                <iframe width="400px" height="300px" src="https://www.youtube.com/embed/xvCLBGlhhrE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className={globalStyle.divider}>
                <h2><b>Summary</b></h2>
                <p>The 1 minute challenge <br /> is when you hold yourself accountable <br /> for practicing your instrument <br /> for at least 1 minute per day.</p>
            </div>


            <div className={globalStyle.divider}>
                <p><b>AT LEAST 1 minute a day, (not AT MOST).</b></p>
                <p>1 minute usually leads to more than just 1 minute. <br />
                    It's all about just getting starting, <br /> and not having any excuse at all <br /> to do even just a little. <br /><br /> Everyone has time for at least 1 minute.</p>
            </div>

            <div className={globalStyle.divider}>
                <p><b>1 Minute is GREATER than No Minute</b></p>
                <p>Self explanatory.</p>
            </div>


            <div className={globalStyle.divider}>
                <p><b>Consistency</b></p>

                <p>1 minute per day helps build consistency, <br /> solidifies a daily habit, & re-excites neurons.</p>
                <p>By re-exciting the neurons, <br /> even for just 1 minute a day, <br /> you will be more likely to have it playing <br /> in the back of your mind, <br /> <br /> and <b>when you think of practice, <br /> it's still a form of practice,</b>  <br /> because you can practice <br /> with just your mind.</p> <br /> <br />
            </div>


        </div>
    )
}
