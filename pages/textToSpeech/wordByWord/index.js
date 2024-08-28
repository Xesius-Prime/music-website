import React, { useState, useEffect } from 'react';
import globalStyle from '../../../styles/Home.module.css';

export default function TextToSpeech() {
    const originalText = `This water-limits.js program is simple but let’s break it down into its parts:

    At the top of the file, the function celsiusToFahrenheit() is declared. When given a value in Celsius, it will return the value converted to Fahrenheit. Both input and output will be a number.
    Below, freezingPointC and boilingPointC are assigned the known values 0 and 100, respectively.
    Using these values and the function celsiusToFahrenheit(), the additional values freezingPointF and boilingPointF are calculated.
    Lastly, these values are printed to the console.
    Executing this file using Node would look something like this:`;


    const filter1 = originalText.replaceAll('(', ' open-parenthesis ');
    const filter2 = filter1.replaceAll(')', ' close-parenthesis ');
    const filter3 = filter2.replaceAll(';', ' semi-colon ');
    const filter4 = filter3.replaceAll('[', ' open-square-bracket ');
    const filter5 = filter4.replaceAll(']', ' close-square-bracket ');
    const filter6 = filter5.replaceAll('.', ' dot ');
    const filter7 = filter6.replaceAll('"', ' quote ');
    const filter8 = filter7.replaceAll(',', ' comma ');
    const filter9 = filter8.replaceAll('|', ' or-pipe ');
    const filter10 = filter9.replaceAll('{', ' open-curly-brace ');
    const filter11 = filter10.replaceAll('}', ' close-curly-brace ');
    const filter12 = filter11.replaceAll('<!--', ' open-comment-tag ');
    const filter13 = filter12.replaceAll('-->', ' closed-comment-tag ');
    const filter14 = filter13.replaceAll('</', ' open-end-tag ');
    const filter15 = filter14.replaceAll('/*', ' open-multi-line-comment ');
    const filter16 = filter15.replaceAll('*/', ' close-multi-line-comment ');
    const filter17 = filter16.replaceAll('<', ' open-tag ');
    const filter18 = filter17.replaceAll('>', ' close-tag ');
    const filter19 = filter18.replaceAll('?', ' question-mark ');
    const filter20 = filter19.replaceAll('`', ' back-tick ');
    const filter21 = filter20.replaceAll('/', ' forward-slash ');
    const filter22 = filter21.replaceAll(':', ' colon ');



    const [textArray, setTextArray] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Split the text based on ',' and '.'
        const partsArray = filter22.split(/[ ]/);
        const trimmedPartsArray = partsArray.map(str => str.trim());
        const filteredPartsArray = trimmedPartsArray.filter(str => str.trim() !== '');
        setTextArray(filteredPartsArray);
    }, []);

    useEffect(() => {
        // Speak the current part when currentIndex changes
        if (currentIndex < textArray.length) {
            const part = textArray[currentIndex];
            const value = new SpeechSynthesisUtterance(part);
            value.rate = 2.0;
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
            value.rate = 2.0;
            window.speechSynthesis.speak(value);
        }
    };

    const handleUp = () => {
        setCurrentIndex(0); // Set the index to the beginning
    };

    const handlePreviousDot = () => {
        if (currentIndex > 0) {
            for (let i = currentIndex - 1; i >= 0; i--) {
                if (textArray[i] === 'dot') {
                    setCurrentIndex(i);
                    break;
                }
            }
        }
    };

    const handleNextDot = () => {
        if (currentIndex < textArray.length - 1) {
            for (let i = currentIndex + 1; i < textArray.length; i++) {
                if (textArray[i] === 'dot') {
                    setCurrentIndex(i);
                    break;
                }
            }
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'ArrowRight' && currentIndex < textArray.length - 1) {
            if (e.ctrlKey) { // Check if the Control key is also pressed
                handleNextDot();
            } else {
                handleNext();
            }
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
            if (e.ctrlKey) { // Check if the Control key is also pressed
                handlePreviousDot();
            } else {
                handlePrevious();
            }
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
