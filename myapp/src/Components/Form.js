import "../StyleComponents/Form.css";
import { useEffect, useState } from "react";

let Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRe_Password] = useState("");
  const [checkpassword, setCheckpassword] = useState(true);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [checkgender, setCheckgender] = useState(true);
  const [intrest, setIntrest] = useState("");
  
  function handleSubmit(e){
    e.preventDefault();
    if(password !== re_password){
        alert("Re-enytered Password doesn't match with original password.")
    }
    if(gender !== "Male" || gender !== "Female"){
      setCheckgender(false);
    }
    if(password === re_password && checkgender === true && checkgender === true && checkpassword === true && username !== "" && password !== ""){
        alert("Register Successfully");
    }
  }

  function passwordCheck(e){
    let item = e.target.value;
    setPassword(item);
    if(password.length < 5 && password !== ""){
        setCheckpassword(false);
    }
    else{
        setCheckpassword(true);
    }
  }

  function passwordRe_Check(e){
    let item = e.target.value;
    setRe_Password(item)
    if(re_password.length < 4 && re_password !== ""){
        setCheckpassword(false);
    }
    else{
        setCheckpassword(true);
    }
  }

  
  return (
    <div>
      <h2 style={{ margin: "20px" }}>New Candidate Register Here</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder="Enter Your Name" /> <br />
        <input onChange={(e)=>{setAge(e.target.value)}} type="number" placeholder="Enter Your Age" />
        <br />
        <input onChange={passwordCheck} type="password" placeholder="Create a Password" /> <br/>
        {checkpassword ? "" : <span style={{color:"red"}}>Enter a valid password</span> } 
        {checkpassword ? "" : <br/> }
        <input onChange={passwordRe_Check} type="text" placeholder="Re-enter Your Password" />
        <br />
        <span className="gender">Gender</span>
        <span>Male</span>
        <input onChange={(e)=>{setGender(e.target.value)}} type="radio" name="gender" value="Male" />
        <span>Female</span>
        <input onChange={(e)=>{setGender(e.target.value)}} type="radio" name="gender" value="Female" />
        <br />
        {checkgender ? "" : <span style={{color:"red",margin:"10px"}}>Please select gender</span>}<br/>

        <select onChange={(e)=>{setIntrest(e.target.value)}}>
          <option>Select Intrest</option>
          <option>Marvel Movies</option>
          <option>DC Commic</option>
          <option>The Boys TV Show</option>
        </select>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
