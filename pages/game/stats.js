import React from 'react'
import styles from './mainGame.module.css';
import storyArray from './story.js';

export default function index() {

    const mappedStoryArray = storyArray.map(x =>
        <p><b>{x.date}</b> {x.note}</p>
    );

    return (
        <div className={styles.parentDiv}>

            <div className={styles.challenges1}>
                <h3 className={styles.challengesHeader}>Challenges</h3>
                <div className={styles.challenges2}>
                    <p>Enemy HP: <br />                                 <b>0</b></p>
                    <p>Quest Items: <br />                              <b>0/3</b></p>
                </div>
            </div>

            <div className={styles.powers1}>
                <h3 className={styles.powersHeader}>Powers</h3>
                <div className={styles.powers2}>
                    <p className={styles.item}>Vitamin: <br />          <b>0/1</b>used Aug 6</p>
                    <p className={styles.item}>Fire: <br />             <b>0/1</b></p>
                    <p className={styles.item}>Ice: <br />              <b>0/1</b>used Aug 6</p>
                    <p className={styles.item}>Water: <br />            <b>0/1</b>used Aug 6</p>
                    <p className={styles.item}>Bed Before 1am: <br />   <b>0/1</b>used Aug 6</p>
                    <p className={styles.item}>Meditation: <br />       <b>0/1</b></p>
                    <p className={styles.item}>Fasting: <br />          <b>0/1</b></p>
                    <p className={styles.item}>Sun: <br />              <b>0/1</b>used Aug 6</p>
                    <p className={styles.item}>Music: <br />            <b>1/1</b></p>
                    <p className={styles.item}>Reading: <br />          <b>0/1</b></p>
                    <p className={styles.item}>Cleaning: <br />         <b>0/1</b></p>
                    <p className={styles.item}>Finances: <br />         <b>1/1</b>used Aug 6</p>
                </div>
            </div>

            <div className={styles.mainStats1}>
                <h3 className={styles.mainStatsHeader}>Hero Stats</h3>
                <div className={styles.mainStats2}>
                    <p className={styles.item}>Hero HP: <br />          <b>1/5</b></p>
                    <p className={styles.item}>Till1p Heal: <br />      <b>0/3</b></p>
                    <p className={styles.item}>Armour: <br />           <b>0/0</b></p>
                    <p className={styles.item}>Endurance: <br />        <b>0/2</b></p>
                    <p className={styles.item}>DMG Boost: <br />        <b>0/2</b></p>
                    <p className={styles.item}>Hunger: <br />           <b>3/3</b></p>
                </div>
                <div className={styles.mainStats2}>
                    <p className={styles.item}>XP: <br />               <b>5/15</b></p>
                    <p className={styles.item}>Lvl: <br />              <b>5</b></p>
                </div>
            </div>

            <div className={styles.inventory}>
                <h3 className={styles.inventoryHeader}>Inventory:</h3>

                <div className={styles.equipped1}>
                    <h4 className={styles.shrinkPadding}>Equipped:</h4>
                    <div className={styles.equipped2}>
                        <p>Right Hand: <br /><b>Storm Hammer Blade</b></p>
                        <p>Outfit: <br /><b>Cloth</b></p>
                    </div>
                </div>

                <div className={styles.pouch1}>
                    <h4 className={styles.shrinkPadding}>In Pouch:</h4>
                    <div className={styles.pouch2}>
                        <p className={styles.item}>Gold:                <b>14</b></p>
                        <p className={styles.item}>Health Potion(s):    <b>0</b></p>
                        <p className={styles.item}>Food:                <b>7</b><br />5pm Aug 6</p>
                        <p className={styles.item}>Wood:                <b>0</b></p>
                    </div>
                </div>
            </div>

            <div className={styles.story}>
                <h3 className={styles.storyHeader}>Story</h3>
                <div className={styles.mainStats1}>
                    <h4>MAIN QUEST</h4>
                    <p>Have to go to Doom Gate to defeat Lazarok the Tyrant, and retrieve the Ruby Sword of Fire, which is one of the ancient artifacts which when brought together will help me to defeat Zephyrion the Dragonlord.</p>
                    <b>The 3 Artifacts:</b>
                    <div className={styles.flex}>
                        <div>Ruby Sword of Fire <br /> <b>(Lazarok the Tyrant)</b></div>
                        <div>Sapphire Crown of Intellect <br /> <b>(Malisar the Necromancer)</b></div>
                        <div>Emerald Amulet of Vitality <br /> <b>(Lysandra the Abyssal)</b></div>
                    </div>
                </div>

                <h4>JOURNAL:</h4>

                <div className={styles.width}>
                    {mappedStoryArray}
                </div>
            </div>

        </div>
    )
}
