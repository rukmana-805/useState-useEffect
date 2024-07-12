import './App.css';
import React from 'react';
import {useState} from "react";

function App() {

  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  return (
    <div className="App">
      <h2 style={{margin:"10px"}}>Count so far : {count}</h2>
      <h2 style={{margin:"10px"}}>Data so far : {data}</h2>
    </div>
  );
}

export default App;
