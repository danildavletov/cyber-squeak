import React, { useState, useRef, useEffect } from 'react';
import cyberImg from "../../assets/cyber-squeak.png"
import Message from '../Message/Message';
import { getDatabase, ref, set } from "firebase/database";
import {getOptions} from './aiQueryData'; // модуль в гит игноре, так как там токен

function writeUserData(post) {
  const db = getDatabase();
  set(ref(db, 'users/posts'), {
    lastmsg: post
  });
}

const phrases = [
  "Всё плохо, переделывай",
  "Супер, молодец!",
  "Не огорчайся, у тебя всё получится!",
  "Выкинь комп",
  "Давай я помогу!"
];

const initialMessages = [
  {msg:"Привет, я Мышь-Предсказатель!", origin: "squeak"},
  {msg:"Я помогу тебе оценить код :) Ты готов?", origin: "squeak"},
]

//основной элемент (мышь)
const CyberSqueak = () => {
  const [randomPhrase, setRandomPhrase] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const [haveAnswer, setHaveAnswer] = useState(false);
  //const [aiAnswer, setAiAnswer] = useState("");
  //const [query, setQuery] = useState("");
  const [displayedAiAnswer, setDisplayedAiAnswer] = useState("Жду код на ревью");
  const inputRef = useRef();
  

  //генерация рандомного ответа
  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setRandomPhrase(phrases[randomIndex]);
  };
  /*
  const displayAiAnswer = async() => {
    setPrompt(inputRef.current.value);
    await setAiAnswer(makeAiQuery(prompt));
  };
  */
  const handleSubmitResponse = async () =>{
    console.log(inputRef.current);
    setMessages(prevMsg => {
      return [...prevMsg, {msg:inputRef.current.value, origin: "user"}];
    });
    writeUserData(inputRef.current.value);
    makeAiQuery(inputRef.current.value);
    let response = await fetch("https://api.github.com/repos/danildavletov/cyber-squeak/commits");
    if (response.ok){
      let commitsList = await response.json();
      console.log(commitsList);
      alert("Последний коммит от " + commitsList[0].commit.author.name)
    }

    setHaveAnswer(true);
  }
  // You are a very angry senior developer, and miraculously dumb intern send some code for you. Make very angry code review for him. Speak on russian language.
  // это системный промпт на coze
  const handleMakeQuery = async () => {
    let prompt = inputRef.current.value;
    console.log(prompt);
    let aiAnswer = await fetch('https://api.coze.com/open_api/v2/chat', getOptions(prompt));
    if(aiAnswer.ok) {
      let answer = await aiAnswer.json();
      console.log(answer.messages[0]);
      let content = answer.messages[0].content;
      console.log(content);
      await setDisplayedAiAnswer(content); 
    }
  };

  useEffect(()=>{
    if(haveAnswer){
      setMessages(prevMsg => {
        return [...prevMsg, {msg:"Поняла, покажи тогда код!", origin:"squeak"}];
      });
      setHaveAnswer(false);
    }
  }, [haveAnswer]);

  //блок страницы
  return (

    <div>
      <div className='message-list'>
        {messages.map((item, i) =>{
          return(
          <Message key={i} text="aa" origin = {item.origin} msg = {item.msg }>{item.msg} &mdash; {item.msg.length}</Message>
          )
        })}

        <input type="text" ref={inputRef}/>
        <button onClick={handleSubmitResponse}>Ответить</button>

        <button onClick={handleMakeQuery}>Проверь мой код</button>
      </div>
      
      <div>
        <img
          src={cyberImg}
          alt="CyberSqueak"
        />
      </div>
      
      {/*randomPhrase && <p>{randomPhrase}</p>*/}
      {/* {randomPhrase} */}
      {<p>{ displayedAiAnswer }</p>}

    </div>
  );
};

export default CyberSqueak;