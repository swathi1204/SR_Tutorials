import React from 'react';
import './SuperAdmin.css';
import {Link } from "react-router-dom";
import  { useState } from  "react";

function SuperAdmin2() {
    

    const[showPopup]=useState("hide")

    const popup = ()=>{
        showPopup('login-popup')
        setTimeout(()=>showPopup("hide"),3000)
    }
    return(
        <>
      
      <div className="form">
          <div className="form-body">
          <Link style={{textDecoration: 'none'}} to="register">
          <div className="btn1" onClick={popup}>Register
          </div>
          </Link>
          <Link style={{textDecoration: 'none'}} to="viewdet">
          <div className="btn2" onClick={popup}>View details</div>
          </Link>
          </div>
         
      </div>
      


      </> 

    )       
}
export default  SuperAdmin2;