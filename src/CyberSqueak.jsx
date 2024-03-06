import React, { useState } from 'react';
import cyberImg from "./assets/cyber-squeak.png"

const phrases = [
  "Всё плохо, переделывай",
  "Супер, молодец!",
  "Не огорчайся, у тебя всё получится!",
  "Hello"
];

const CyberSqueak = () => {
  const [randomPhrase, setRandomPhrase] = useState("");

  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setRandomPhrase(phrases[randomIndex]);
  };

  return (
    <div>
      <div>
        <img
          src={cyberImg}
          alt="CyberSqueak"
          onClick={getRandomPhrase}
          style={{ cursor: 'pointer' }}
        />
      </div>
      {randomPhrase && <p>{randomPhrase}</p>}
    </div>
  );
};

export default CyberSqueak;
