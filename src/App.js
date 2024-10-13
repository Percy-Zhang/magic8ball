import logo from './8ball.webp';
import { useState } from 'react';
import './App.css';

const replies = [
  "It is certain",
  "Reply hazy, try again",
  "Don’t count on it",
  "It is decidedly so",
  "Ask again later",
  "My reply is no",
  "Without a doubt",
  "Better not tell you now",
  "My sources say no",
  "Yes definitely",
  "Cannot predict now",
  "Outlook not so good",
  "You may rely on it",
  "Concentrate and ask again",
  "Very doubtful",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes"
]

function App() {
  const [answer, setAnswer] = useState("")
  const [question, setQuestion] = useState("")

  function onClick() {
    if (question.trim() == "") {
      setAnswer("Ask a question!")
    } else {
      setAnswer(replies[Math.floor(Math.random() * (replies.length))])
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p className='byline'>Made by Percy</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          What question do you have for the magic 8 ball?
        </p>
        <input className="input" value={question} onChange={(e) => setQuestion(e.target.value)} />
        <button className='submit' onClick={onClick}>Ask</button>
        <p>{answer}</p>
      </header>
    </div>
  );
}

export default App;
