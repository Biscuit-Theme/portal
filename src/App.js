import React from 'react';
import './App.css';
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="biscuit-portal">
      <div className="glossy-box">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Biscuit.</h1>
        <button className="button">Click Me</button>
      </div>
    </div>
  );
}

export default App;
