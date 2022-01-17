import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom";
import '../style/dashboard.css'
export const Dashborad=()=>{
    
 const [jobs, setjobs]=useState([]);
    useEffect(()=>{
        const getData=()=>{
            fetch("http://localhost:3004/jobs").then(res=>res.json()).then(res=>{setjobs(res)});
        }
        getData();
    },[])
   
    if(localStorage.getItem("user")===null){
        return <Navigate to="/adminlogin"></Navigate>
    }
  const save=(e)=>{
    
    var applied=(JSON.parse(localStorage.getItem("user"))).username;
    fetch(`http://localhost:3004/jobs/${e.target.parentNode.id}`).then(res=>res.json()).then(res=>{
         let jobsApplied={user:applied,job:res};
    if(localStorage.getItem("forapply")===null){
        localStorage.setItem("forapply",JSON.stringify([]));
        }
    var a=JSON.parse(localStorage.getItem("forapply"));
        a.push(JSON.stringify(jobsApplied))
        
        localStorage.setItem("forapply",a)
    
  });
  }
    const sortlocation=()=>{
        fetch("http://localhost:3004/jobs?_sort=location").then(res=>res.json()).then(res=>{setjobs(res)});
       
    }
    return <>
    <button onClick={sortlocation}>Sort Location</button>
    <div    id="dashboard">
        
        {jobs.map(el=><div id={el.id}><h3>{el.title}</h3>
            <h2>{el.company}</h2>
            <p>{el.description}</p>
            <p>{el.location}</p>
            <p>{el.type}</p>
            <p>{el.salary}</p>
            <button onClick={save}>Apply</button>
            </div>)}

    </div>
    </>
}