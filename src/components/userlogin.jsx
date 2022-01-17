import { useState } from "react";

export const Loginuser=()=>{
    const [form, stateform]=useState({username:"",password:"",admin:false});
    if(localStorage.getItem("user")===undefined){
        localStorage.setItem("user");
    }
    const changeHandler=(e)=>{
        stateform({...form,[e.target.name]:e.target.value})
    }
    const clickHandler=()=>{
        let user= localStorage.getItem("user");
        user=form;
        localStorage.setItem("user",JSON.stringify(user))
    }
    return <div>
        <h3>User:</h3> 
        <input type="text" placeholder="username" name="username" onChange={changeHandler}/>
        <input type="text" placeholder="password" name="password" onChange={changeHandler}/>
        <button onClick={clickHandler}>LOGIN</button>
    </div>
}