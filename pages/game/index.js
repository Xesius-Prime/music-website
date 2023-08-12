import React, { useState } from 'react';

export default function Index() {
    const array = [
        'Attack',
        'Block',
        'Move'
    ];

    const [result1, setResult1] = useState({ action: '', number: 0 });
    const [result2, setResult2] = useState({ action: '', number: 0 });
    const [result3, setResult3] = useState({ action: '', number: 0 });

    const [randomNumber1, setRandomNumber1] = useState(0);
    const [randomNumber2, setRandomNumber2] = useState(0);
    const [randomNumber3, setRandomNumber3] = useState(0);

    const handleRoll = () => {
        const randomNum = Math.floor(Math.random() * array.length);
        const randomAction = array[randomNum];
        const randomNumber = Math.floor(Math.random() * 11); // Random number between 0 and 10

        return { action: randomAction, number: randomNumber };
    };

    return (
        <div>
            <h1>Game</h1>

            <p>1. {result1.action} - {result1.number}</p>
            <p>2. {result2.action} - {result2.number}</p>
            <p>3. {result3.action} - {result3.number}</p>

            <p>Random Numbers:</p>
            <p>{randomNumber1}</p>
            <p>{randomNumber2}</p>
            <p>{randomNumber3}</p>

            <button onClick={() => {
                const roll1 = handleRoll();
                const roll2 = handleRoll();
                const roll3 = handleRoll();

                setResult1(roll1);
                setResult2(roll2);
                setResult3(roll3);

                setRandomNumber1(roll1.number);
                setRandomNumber2(roll2.number);
                setRandomNumber3(roll3.number);
            }}>Roll</button>
        </div>
    );
}
