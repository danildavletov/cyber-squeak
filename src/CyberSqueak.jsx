import React, { useState, useRef } from 'react';
import cyberImg from "./assets/cyber-squeak.png"
import Message from './components/Message/Message';


const phrases = [
  "Всё плохо, переделывай",
  "Супер, молодец!",
  "Не огорчайся, у тебя всё получится!",
  "Выкинь комп",
  "Давай я помогу!"
];

const initialMessages = [
  "Привет, я Мышь-Предсказатель!",
  "Я помогу тебе оценить код :)"
]

//основной элемент (мышь)
const CyberSqueak = () => {
  const [randomPhrase, setRandomPhrase] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const inputRef = useRef();

  //генерация рандомного ответа
  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setRandomPhrase(phrases[randomIndex]);
  };

  const handleSubmitResponse = () =>{
    console.log(inputRef.current);
    setMessages([
      inputRef.current.value
    ])
  }

  //блок страницы
  return (

    <div>
      <div className='message-list'>
        {messages.map((item, i) =>{
          return(
          <Message key={i} text="aa">{item}</Message>
          )
        })}

        <input type="text" ref={inputRef}/>
        <button onClick={handleSubmitResponse}>Ответить</button>

        <button onClick={getRandomPhrase}>Проверь мой код</button>
      </div>
      
      <div>
        <img
          src={cyberImg}
          alt="CyberSqueak"
        />
      </div>
      
      {randomPhrase && <p>{randomPhrase}</p>}
      {/* {randomPhrase} */}

    </div>
  );
};

export default CyberSqueak;