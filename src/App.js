import React from "react";
import "./App.css";
import Header from "./components/Header";
import "./styles/main.css";
import Intro from "./components/Introduction";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='main'>
        <Intro></Intro>
      </div>
    </div>
  );
}

export default App;
