import { useEffect, useState } from "react"

export const Apply=()=>{
    const [jobs, setJobs]=useState([]);
    const [user,setUser]=useState("");
    useEffect(()=>{
        var job=JSON.parse(localStorage.getItem("forapply"));
        setJobs(job.job);
        setUser(job.user);
    },[])
    console.log(jobs)
    return <div    id="dashboard">
        <div ><h3>{jobs.title}</h3>
            <h2>{jobs.company}</h2>
            <p>{jobs.description}</p>
            <p>{jobs.location}</p>
            <p>{jobs.type}</p>
            <p>{jobs.salary}</p>
            <h3>User Applied For it: {user}</h3>
            </div>
    </div>
}