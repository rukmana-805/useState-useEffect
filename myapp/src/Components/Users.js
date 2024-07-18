// import React, { useEffect } from "react";

let Users = (props) => {

    // useEffect(()=>{
    //     alert("Props Updated");
    // },[props.name,props.userid]) //This is executed when the proprs get updated. 

    return(
        <div>
            <h2 style={{margin:"20px"}}>Here is the User Details</h2>
            <p>Name : {props.isshow ? props.name:""}</p>
            <p>User Id : {props.isshow ? props.userid:""}</p>
        </div>
    )
}

export default Users;