
import './App.css';
import { Login } from './components/adminlogin';
import { Navbar } from './components/navbar';
import { Loginuser } from './components/userlogin';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Job } from './components/post';
import { Dashborad } from './components/dashboard';
import { Apply } from './components/apply';
function App() {
  return (
    <div className="App">
        
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<>HEllo</>}></Route>
        <Route path="/adminlogin" element={ <Login/>}></Route>
        <Route path="/userlogin" element={  <Loginuser/>}></Route>
        <Route path="/post" element={  <Job/>}></Route>
        <Route path="/dashboard" element={  <Dashborad/>}></Route>
        <Route path="/apply" element={  <Apply/>}></Route>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
