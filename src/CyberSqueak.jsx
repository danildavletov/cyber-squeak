import React, { useState, useRef, useEffect } from 'react';
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
  "Я помогу тебе оценить код :) Ты готов?"
]

//основной элемент (мышь)
const CyberSqueak = () => {
  const [randomPhrase, setRandomPhrase] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const [haveAnswer, setHaveAnswer] = useState(false);
  const inputRef = useRef();

  //генерация рандомного ответа
  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setRandomPhrase(phrases[randomIndex]);
  };
  const handleSubmitResponse = () =>{
    console.log(inputRef.current);
    setMessages([
      ...messages,
      inputRef.current.value
    ])
    setHaveAnswer(true);
  }
  useEffect(()=>{
    if(haveAnswer){
      setMessages([
        ...messages,
        "Поняла, покажи тогда код!"
      ])
      setHaveAnswer(false);
    }
  }, [haveAnswer]);

  //блок страницы
  return (

    <div>
      <div className='message-list'>
      {messages.map((item, i) =>{
          return(
            <Message key={i} text={item} isUserMessage={i % 2 === 0 && i > 1} username={i % 2 === 0 && i > 1 ? "You" : "Cyber-squeak"} />
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