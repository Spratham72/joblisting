
import { Link } from 'react-router-dom';
import '../style/navbar.css';
export const Navbar=()=>{
    
    

    return<div id="nav"> 
       <Link to='/userlogin'><h2>User Login</h2></Link> 
       <Link to='/adminlogin'> <h2>Admin Login</h2></Link>
       <Link to='/dashboard'><h2>Dashboard</h2></Link>
       <Link to='/post'><h2>Post Job</h2></Link>
    </div>
}