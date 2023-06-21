const App = () => {
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
        <ul className="fedd">
          <li>texto</li>
        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input/>
            <button id="submit">➢</button>
          </div>
          <p className="info">Chat GPT en REACT - Version 1.0</p>
        </div>
      </section>
    </div>
  );
}

export default App;
