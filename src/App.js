import React from "react";
import { Provider } from "react-redux";
import store from './redux/store'
import "./App.css";
import Header from "./components/Header";
import "./styles/main.css";
import Home from "./components/Home";
import Experience from "./components/Experience";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header></Header>
        <div className="main">
          <Home></Home>
          {/*<Experience></Experience>*/}
        </div>
      </div>
    </Provider>
  );
}

export default App;
