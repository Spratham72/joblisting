import { useState } from "react";
import '../style/post.css';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Posting,PostSuccess,PostError} from "../redux/action";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const Job=()=>{
    
    const data=useSelector(state=>state.job);
    console.log(data)
    const disptach=useDispatch();
    const [job,setJob]=useState({company:"",title:"",salary:0,description:"",location:"",type:""});
    const changeHandler=(e)=>{
        setJob({...job,[e.target.name]:e.target.value});
    }
    if(localStorage.getItem("user")===null){
        return <Navigate to="/adminlogin"></Navigate>
    }
    let type=(JSON.parse(localStorage.getItem("user"))).admin;
    console.log(type)
    if(!type){
        return <Navigate to="/adminlogin"></Navigate>
    }
    const clickHandler=()=>{
        disptach(Posting());
        fetch("http://localhost:3004/jobs",{
            method:"POST",
            body:JSON.stringify(job),
            headers:{"Content-Type": "application/json"}
        }).then(res=>res.json()).then(res=>{disptach(PostSuccess(res))}).catch(er=>disptach(PostError(er)));
       
    }
    
    return <>
    <Link to="/apply"><button >Look who applied for the job!</button></Link>
    <h4>Company :</h4>
    <input type="text" placeholder="company name" onChange={changeHandler} name="company"/>
    <h4>Title:</h4>
    <input type="text" placeholder="title" onChange={changeHandler} name="title"/>
    <h4>Salary Range:</h4>
    <input type="text" placeholder="salary" onChange={changeHandler} name="salary"/>
    <h4>Description:</h4>
    <input type="text" placeholder="description" onChange={changeHandler} name="description"/>
    <h4>Location:</h4>
    <input type="text" placeholder="location" onChange={changeHandler} name="location"/>
    <h4>Job Type: </h4>
    <input type="text" placeholder="job type" onChange={changeHandler} name="type"/><br></br>
    <button onClick={clickHandler}>Post Job</button>
    </>
}