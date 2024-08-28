import React, { useState, useEffect } from 'react';
import globalStyle from '../../../styles/Home.module.css';

export default function TextToSpeech() {
    const originalText = `Static and dynamic routes^!^ are two different types of routes^!^ commonly used in web development and routing systems^!^ to define how URLs correspond to pages or views within a web application.^!^ Each type has its own characteristics and use cases:^!^

    Static Route:^!^
    
    Definition:^!^ A static route is a route where the URL pattern^!^ and the corresponding page or view are known^!^ and defined in advance.^!^ The URL structure is fixed and does not change based on user input.^!^
    Use Cases:^!^ Static routes are ideal for pages that have a predictable and unchanging URL structure.^!^ For example, an "About Us" page with a URL like "/about"^!^ is a static route because the URL is constant.^!^
    Dynamic Route:^!^
    
    Definition:^!^ A dynamic route, also known as a parameterized route,^!^ is a route where the URL contains variable segments that can change based on user input.^!^ These variable segments are typically indicated using placeholders or parameters in the URL.^!^
    Use Cases:^!^ Dynamic routes are useful for displaying content that varies based on user input.^!^ For example, a blog website might use dynamic routes to display individual blog posts with URLs^!^ like "/posts/1" and "/posts/2," ^!^where the numbers represent unique identifiers for different posts.^!^ In this case, the route parameter ^!^(the post ID)^!^ changes the content displayed on the page.^!^
    In many web frameworks and libraries,^!^ including Next.js for React applications,^!^ dynamic routes are defined using placeholders in the route pattern.^!^ These placeholders are indicated by square brackets^!^ []^!^ and can capture values from the URL^!^ to pass to the corresponding page component.^!^ For instance, in Next.js, you might define a dynamic route like this:`;

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
        ['"', ''],
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
