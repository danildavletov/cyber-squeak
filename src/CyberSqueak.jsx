import React, { useState } from 'react';
import cyberImg from "./assets/cyber-squeak.png"
import Message from "./components/Message/Message.jsx";

const phrases = [
  "Всё плохо, переделывай",
  "Супер, молодец!",
  "Не огорчайся, у тебя всё получится!",
  "Попробуй ещё раз"
];

const messages = [
    "Привет! Я Мышь-Помошник.",
    "Я помогу тебе оценить твой код :)"
]

const CyberSqueak = () => {
  const [randomPhrase, setRandomPhrase] = useState("");

  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setRandomPhrase(phrases[randomIndex]);
  };

  return (
    <div>
      <div className="message-div">
          {messages.map((item, i)=> {
              return (
                  <Message key={i}>{item}</Message>
              )
          })}
          <button onClick={getRandomPhrase}>Проверь мой код</button>
      </div>
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