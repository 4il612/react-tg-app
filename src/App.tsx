import React, { useEffect } from "react";
import "./App.css";

declare const window: any;
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  return <div className="App">worked!</div>;
}

export default App;
