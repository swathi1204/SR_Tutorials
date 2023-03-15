import React from 'react'
import {BrowserRouter as  Router, Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Errorpage from './components/Errorpage';
import Ptutor from './components/Parent';
import Superadmin from './components/Super/SuperAdmin';
import BranchAdmin from './components/Branch/BranchAdmin';
import SuperAdmin2 from './components/Super/SuperAdmin2';
import BranchAdmin2 from './components/Branch/BranchAdmin2';
import Logout from "./components/Logout";
import Tregister from './components/Branch/Tregister';
import Enquiry from './components/Enquiry';

import Sregister from './components/Branch/Sregister';

function App() {
  return (
  // <>
  

<Router>
<Navbar/>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/superadmin/SuperAdmin2/register" element={<Signup/>} />
        <Route path="/ptutor" element={<Ptutor/>} />
        <Route path="/superadmin" element={<Superadmin/>} />
        <Route path="/branchadmin" element={<BranchAdmin/>} />
        <Route path="/superadmin/superadmin2" element={<SuperAdmin2/>} />
        <Route path="/branchadmin/branchadmin2" element={<BranchAdmin2/>} />
        <Route path="/branchadmin/Branchadmin2/Enq" element={<Enquiry/>} />
        <Route path="/xyz" element={<Tregister/>} />
        <Route path="/Sreg" element={<Sregister/>} />

        <Route element={<Errorpage/>}></Route>
        
 </Routes>
 </Router>
  // </>
  );
}

export default App;

