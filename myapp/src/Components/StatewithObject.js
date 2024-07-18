import React,{useState} from 'react'

export default function StatewithObject() {
  
  const [data,setData] = useState({name:"Akash",age:20});//Passing a Object with State

  return (
    <div>
      <h2>Here we learn about State with Object</h2>
      <p>Your Name is : {data.name}</p>
      <p>Your Age is : {data.age}</p>

      {/* (e)=>{setData({name:e.target.value})} --> The problem of writing this is, In object when name value updated
      it pretend another value of objecct that is age is blanck and it assign the value of age as null. So when you
      try to update name then age disappear and when you want to update age then name disappear.*/}

      {/*To prevent from this problm we assign value to the object like -> setData({...data,age:e.target.value}) 
      here (...<name of object>) specify that the remaining value asign as it is.*/ }
      
      <input onChange={(e)=>{setData({...data,name:e.target.value})}} value={data.name} style={{padding:"8px"}} type="text" placeholder="Enter Name" />
      <input onChange={(e)=>{setData({...data,age:e.target.value})}} value={data.age} style={{padding:"8px"}} type="number" placeholder="Enter Age" /> <br />
      <button style={{padding:"8px"}}>Update User</button>
      
    </div>
  )
}
