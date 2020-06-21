import React from "react";
import { Provider } from "react-redux";
import store from './redux/store'
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Experience from "./components/Experience";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header></Header>
        <Home></Home>
        {/*<Experience></Experience>*/}
      </div>
    </Provider>
  );
}

export default App;
