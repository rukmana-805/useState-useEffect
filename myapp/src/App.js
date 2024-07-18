import './App.css';
import React from 'react';
import {useState,useEffect} from "react";
import Users from './Components/Users';
import Form from './Components/Form';
import StatewithObject from './Components/StatewithObject';

function App() {

  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  const [name,setName] = useState("");
  const [userid,setId] = useState("");
  const [isshow,setShow] = useState(false);

  // if i write normally like this then no metter what key i pressed each time it executed because useEffect
  //run when a sate change, a props change and also when page refresh. but you can give condition also here

  // useEffect(()=>{
  //   alert("Update when each state changes, Does't metter what button clicked because there is no condition");
  // })

  //conditional useEffect --> run when count state changes.
  useEffect(()=>{
    alert("Count updated by one");
  },[count]) //here we can specify a array [item1,item2,...,item n] and the effect only work on that particular state 

  //conditional useEffact --> run when data get updated
  useEffect(()=>{
    alert("Data updated by one");
  },[data])// here when data updated by one then only this alert show otherwise this will never show


  // CONCLUSION :-> useEffect are like if-else statement with respect of state, props or page refresh context.
  //                you can give a condition and with respect of that the data get excuted. 
  function getName(event){
    setName(event.target.value);
    setShow(false);
  }
  function getUserid(event){
    setId(event.target.value);
    setShow(false);
  }

  return (
    <div className="App">
      <h1 style={{margin:"10px"}}>Welcome to UseEffect Tutorial</h1>
      <h2 style={{margin:"10px"}}>Count so far : {count}</h2>
      <h2 style={{margin:"10px"}}>Data so far : {data}</h2>
      <button onClick={()=>{setCount(count+1)}} style={{padding:"10px",backgroundColor:"grey",margin:"5px",color:"white",border:"1px"}}>Update Count</button>
      <button onClick={()=>{setData(data+1)}} style={{padding:"10px",backgroundColor:"grey",margin:"5px",color:"white",border:"1px"}}>Update Data</button>

      <h2 style={{margin:"10px"}}>Fill the User Details</h2>
      <input onChange={getName} style={{margin:"10px",padding:"10px"}} placeholder="Enter Username" type="text" />
      <input onChange={getUserid} style={{margin:"10px",padding:"10px"}} placeholder="Enter Userid" type="text" /> <br />
      <button onClick={()=>{setShow(true)}} style={{padding:"10px",backgroundColor:"grey",margin:"5px",color:"white",border:"1px"}}>Update Data</button>

      <Users name = {name} userid = {userid} isshow={isshow} />
      <Form/>
      <StatewithObject/>
    </div>
  );
}

export default App;
