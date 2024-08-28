import React, { useState, useEffect } from 'react';
import globalStyle from '../../styles/Home.module.css';

export default function TextToSpeech() {
    const originalText = `Generating Static Params^!^
    The generateStaticParams function^!^ can be used in combination with dynamic route segments^!^ to statically generate routes at build time^!^ instead of on-demand at request time.`;

    const replacements = [
        ['E.g.', ' for example '],
        ['href', ' H-ref '],
        ['e.g.', ' for example '],
        ['e.g', ' for example '],
        ['()', ' function call '],
        [';', '  '],
        ['[', ' open-square-bracket '],
        [']', ' close-square-bracket '],
        ['.js', ' js '],
        ['.', ' dot '],
        ['"', ' quote '],
        [',', ' , '],
        ['|', ' or-pipe '],
        ['{', ' open-curly-brace '],
        ['}', ' close-curly-brace '],
        ['<!--', ' open-comment-tag '],
        ['-->', ' closed-comment-tag '],
        ['</', ' open-end-tag '],
        ['/*', ' open-multi-line-comment '],
        ['*/', ' close-multi-line-comment '],
        ['<', ' '],
        ['>', ' tag '],
        ['tag tag', ' tag '],
        ['?', ' question-mark '],
        ['`', ' back-tick '],
        ['/', ' slash '],
        [':', ' colon ']
    ];

    let filteredText = originalText;

    for (const [search, replacement] of replacements) {
        filteredText = filteredText.replaceAll(search, replacement);
    }


    const [textArray, setTextArray] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Split the text based on ',' and '.'
        const parts = filteredText.split("^!^");
        setTextArray(parts);
    }, []);

    useEffect(() => {
        // Speak the current part when currentIndex changes
        if (currentIndex < textArray.length) {
            const part = textArray[currentIndex];
            const value = new SpeechSynthesisUtterance(part);
            window.speechSynthesis.speak(value);
        }
    }, [currentIndex, textArray]);

    const handleNext = () => {
        if (currentIndex < textArray.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleRepeat = () => {
        if (currentIndex >= 0) {
            const part = textArray[currentIndex];
            const value = new SpeechSynthesisUtterance(part);
            window.speechSynthesis.speak(value);
        }
    };

    const handleUp = () => {
        setCurrentIndex(0); // Set the index to the beginning
    };

    const handleKeyPress = (e) => {
        if (e.key === 'ArrowRight' && currentIndex < textArray.length - 1) {
            handleNext();
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
            handlePrevious();
        } else if (e.key === 'Enter') {
            handleRepeat();
        } else if (e.key === 'ArrowUp') {
            handleUp();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [currentIndex]);

    return (
        <div className={globalStyle.center}>
            <h1>Text to Speech</h1>
            <p>{textArray[currentIndex]}</p>
            <br />
            <button onClick={handleUp}>Up</button>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleRepeat}>Repeat</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );
}
