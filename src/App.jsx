import { useState, useEffect } from "react";

const App = () => {
  const [value, setValue] = useState(null)
  const [message, setMessage] = useState(null)

  const options = {
    method: "POST",
    body: JSON.stringify({
      message: value
    }),
    headers: {
      "Content-Type": "aplication/json"
    }
  }
  const getMessages = async () =>{
    try {
      const response = await fetch("http://localhost:8000/completions", options)
      const data = await response.json()
      setMessage(data.choices[0].message)
    } catch (error) {
      console.error(error)
    }
  }
  console.log(message);
  return (
    <div className="app">
      <section className="side-bar">
        <button id="new-chat">+ Nuevo Chat</button>
        <ul className="history">
          <li>tester</li>
        </ul>
        <nav>
          <p>Hecho por Lenin Mendoza</p>
        </nav>
      </section>
      <section className="main">
        <h1>Chat-GPT Mendozalz</h1>
        <ul className="feed">
          <li>texto</li>
        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input value={value} onChange={(e)=> setValue(e.target.value)}/>
            <button id="submit" onClick={getMessages}>➢</button>
          </div>
          <p className="info">Chat GPT en REACT - Version 1.0</p>
        </div>
      </section>
    </div>
  );
}

export default App;
