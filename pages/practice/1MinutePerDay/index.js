import React from 'react';
import styles from './practice.module.css';

export default function index() {
    return (
        <div className={styles.main}>
            <h1>1 Minute Per Day</h1>

            <div className={styles.p}>
                <iframe width="400px" height="300px" src="https://www.youtube.com/embed/xvCLBGlhhrE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <h2>Summary</h2>
                <p>The 1 minute challenge is when you hold yourself accountable for practicing your instrument for at least 1 minute per day.</p>
            </div>

            <ol className={styles.alignLeft}>
                <li>AT LEAST 1 minute a day, not AT MOST.</li>
                <p>1 minute usually leads to more than just 1 minute. It's all about just getting starting, and not having any excuse at all to do even just a little. Everyone has time for at least 1 minute.</p>

                <li>1 minute is better than no minute</li>
                <p>Self explanatory.</p>

                <li>1 minute per day helps build consistency, solidifies a daily habit, & re-excites neurons.</li>
                <p>By re-exciting the neurons, even for just 1 minute a day, you will be more likely to have it playing in the back of your mind. And when you think of practice, it's still a form of practice, because you can practice with just your mind.</p>
            </ol>
        </div>
    )
}
