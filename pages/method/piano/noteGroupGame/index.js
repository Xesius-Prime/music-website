'use client';
import { useState, useEffect } from "react";
import styles from './noteGroupGame.module.css';

export default function Home() {
    const [imageIndex, setImageIndex] = useState(1); // Random image index between 1-4
    const [correct, setCorrect] = useState(0); // Count of correct answers
    const [wrong, setWrong] = useState(0); // Count of wrong answers

    // Sound URLs (instantiate once)

    // List of image objects corresponding to each label
    const images = [
        { index: 1, src: "/Piano/FACE.png", label: "FACE" },
        { index: 2, src: "/Piano/EGBDF.png", label: "EGBDF" },
        { index: 3, src: "/Piano/ACEG.png", label: "ACEG" },
        { index: 4, src: "/Piano/GBDFA.png", label: "GBDFA" },
    ];

    // Generate a random image index
    const generateRandomImage = () => {
        const randomImageIndex = Math.floor(Math.random() * images.length) + 1;
        setImageIndex(randomImageIndex);
    };

    const handleClick = async (clickedIndex) => {
        if (clickedIndex === imageIndex) {
            setCorrect(correct + 1);
            try {
                await victorySound.play(); // Play victory sound asynchronously
            } catch (error) {
                console.error('Error playing victory sound:', error);
            }
        } else {
            setWrong(wrong + 1);
            try {
                await failureSound.play(); // Play failure sound asynchronously
            } catch (error) {
                console.error('Error playing failure sound:', error);
            }
        }
        generateRandomImage();
    };

    useEffect(() => {
        generateRandomImage();
    }, []);

    return (
        <div className={styles.container}>
            <h1>Music Note Game</h1>

            {/* Display the randomly selected image */}
            <div className={styles.imageContainer}>
                <img
                    src={images.find(img => img.index === imageIndex)?.src}
                    alt="Music Note"
                    className={styles.image}
                />
            </div>

            {/* Button options */}
            <div className={styles.buttonContainer}>
                {images.map((option) => (
                    <button
                        key={option.index}
                        onClick={() => handleClick(option.index)}
                        className={styles.button}
                    >
                        {option.label}
                    </button>
                ))}
            </div>

            {/* Score display */}
            <div className={styles.score}>
                <p>Correct: {correct}</p>
                <p>Wrong: {wrong}</p>
            </div>
        </div>
    );
}
