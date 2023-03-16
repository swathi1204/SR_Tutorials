import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink, Link } from 'react-router-dom';
import logo from "../images/logo.jpeg";
import "./Navbar.css";


// import { Route } from 'react-router-dom';
// import {NavLink} from "react-router-dom";
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';

const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
      <img src={logo} alt='logo'/>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse-navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/"><i class="zmdi zmdi-home material-icons-name"></i>  Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about"><i class="zmdi zmdi-info material-icons-name"></i>  About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/contact"><i class="zmdi zmdi-account-box-phone material-icons-name"></i>  Contact</NavLink>
        </li>


        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/signup">Register</NavLink>
        </li> */}

        {/* <i className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
    
        </li>l */}
        {/* <div class="dropdown">
    <li class="dropbtn">Login
      <i class="fa fa-caret-down"></i>
    </li> */}
    <div className="dropdown">
          <button class="dropbtn">  Login</button>
    
        
    <div class="dropdown-content">
        
    <Link style={{textDecoration: 'none'}} to="/Parent">
          <div className="btnabc">Parent </div>
          </Link>
    <Link style={{textDecoration: 'none'}} to="/Tutor">
          <div className="btnabc">Tutor </div>
          </Link>
    <Link style={{textDecoration: 'none'}} to="/superadmin">
          <div className="btnabc">Super Admin</div>
          </Link>
    <Link style={{textDecoration: 'none'}} to="/branchadmin">
          <div className="btnabc">Branch Admin </div>
          </Link>
</div>  
        </div> 
        
        <li className="nav-logout">
          <NavLink className="nav-link" to="/logout">Logout</NavLink>
        </li>
    
   
        
      
    
       
      </ul>
      
    </div>
    
  </div>
  
</nav>

    </>
  )
}

export default Navbar