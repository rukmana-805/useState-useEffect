import React, { useState } from "react";

let Users = (props) => {

    return(
        <div>
            <h2 style={{margin:"20px"}}>Here is the User Details</h2>
            <p>Name : {props.name}</p>
            <p>User Id : {props.userid}</p>
        </div>
    )
}

export default Users;