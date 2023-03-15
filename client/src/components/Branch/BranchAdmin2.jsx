import React from 'react';
import './Branch.css';
import {Link } from "react-router-dom";
import  { useState } from  "react";
function BranchAdmin2() {
    const [showPopupa, setShowPopupa] = useState(false);

    const handleButtonClick = () => {
      setShowPopupa(true);
    };
  
    const handlePopupClosea = () => {
      setShowPopupa(false);
    };


    const[showPopup]=useState("hide")

    const popup = ()=>{
        showPopup('login-popup')
        setTimeout(()=>showPopup("hide"),3000)
    }
    return(
        <>
      <div className="forms">
          <div className="form-body">
          <Link style={{textDecoration: 'none'}} to="Enq">

          <div className="btna" onClick={popup}>Enquiries </div>
          </Link>
          <div className='btnb'
          
           onClick={handleButtonClick}>Register
          </div>

          {/* <Link  style={{textDecoration: 'none'}}to="Reg">
          <div className="btnb" onClick={popup}>Registration</div>
          </Link> */}
          <Link   style={{textDecoration: 'none'}}to="Ass">
          <div className="btnb" onClick={popup}>Assign Tutors</div>
          </Link>
          <Link style={{textDecoration: 'none'}} to="Fee">
          <div className="btnb" onClick={popup}>Fees</div>
          </Link>
          <Link  style={{textDecoration: 'none'}}to="Rep">
          <div className="btnb" onClick={popup}>Report</div>
          </Link>
          <Link style={{textDecoration: 'none'}} to="Acc">
          <div className="btnb" onClick={popup}>Accounts</div>
          </Link>
          </div>
         
          {
          showPopupa && (
        
        <div className="popup-container">
          <div className="popup-box">
            <button className="close-button" onClick={handlePopupClosea}>
              X
            </button>
            <Link to="/xyz"><p1>Tutor</p1>  </Link><br /><br />
            <Link to="/Sreg"><p2>Student</p2>  </Link>
            {/* <a href="https://www.google.com">Link 1</a> */}
            {/* <a href="https://www.facebook.com">Link 2</a> */}
          </div>
        </div>
      )}
    </div>
      
      


      </> 

    )       
}
export default  BranchAdmin2;