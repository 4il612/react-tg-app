import React, { useEffect } from "react";
import "./App.css";

declare const window: any;
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div className="App">
      worked!
      <button onClick={onClose}>CLOSE</button>
    </div>
  );
}

export default App;
