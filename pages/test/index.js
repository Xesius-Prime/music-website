import React, { useState, useEffect } from 'react';
import { useSpeech } from 'react-speech-kit';

const TextReader = ({ text }) => {
    const [sentenceIndex, setSentenceIndex] = useState(0);
    const { speak, speaking, cancel } = useSpeech();

    useEffect(() => {
        // Read the current sentence when sentenceIndex changes
        if (sentenceIndex < text.length) {
            speak({ text: text[sentenceIndex] });
        }
    }, [sentenceIndex, speak, text]);

    // Handle keyboard events
    const handleKeyDown = (e) => {
        if (e.key === 'ArrowRight') {
            // Move to the next sentence
            setSentenceIndex((prevIndex) => Math.min(prevIndex + 1, text.length - 1));
        } else if (e.key === 'ArrowLeft') {
            // Repeat the current sentence
            if (sentenceIndex > 0) {
                cancel();
                setSentenceIndex((prevIndex) => prevIndex - 1);
            }
        }
    };

    return (
        <div onKeyDown={handleKeyDown} tabIndex={0}>
            <div>
                {text.map((sentence, index) => (
                    <div key={index} className={index === sentenceIndex ? 'highlighted' : ''}>
                        {sentence}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TextReader;
