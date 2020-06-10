import React from "react";
import "./App.css";
import Header from "./components/Header";
import "./styles/main.css";
import Home from "./components/Home";
import Experience from './components/Experience'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='main'>
      <Home></Home>
        {/*<Experience></Experience>*/}
        
      </div>
    </div>
  );
}

export default App;
