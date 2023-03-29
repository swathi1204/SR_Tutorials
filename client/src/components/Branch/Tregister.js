import React, { useState } from "react";
import "./Tregister.css";
import { useNavigate } from "react-router-dom";



const Tregister = () =>{

    const navigate= useNavigate();

    const[tutor,setTutor]= useState({
        name:"", email:"", password:"", cpassword:"" , education:"", contactNumber:"", presentAddress:"", permanentAddress:"", subjects:""});
      let name, value;
      const handleInputs=(e)=>{
      console.log(e);
      name= e.target.name;
      value= e.target.value;
    
      setTutor({...tutor, [name]:value});
    
    }

const PostData = async (e) => {
    e.preventDefault();
  console.log(e)
    const {name, email, password, cpassword, education, contactNumber, presentAddress, permanentAddress, subjects, primelocation}= tutor;
    
     const res = await fetch("/tutorregister",{
       method:"POST",
       headers:{
         "Content-type":"application/json"
       },
       body: JSON.stringify({
        name, email, password, cpassword, education, contactNumber, presentAddress, permanentAddress, subjects, primelocation
       })
     });
     const data = await res.json();
     console.log(data)
     if (data.status === 422 || !data) {
       window.alert("Information not filled");
       console.log("Information not filled");
     }else{
       window.alert("successfully received");
       console.log("successfully received");
  
       navigate("/branchadmin/branchadmin2");
      }
  }


  return (
    <>
    
    <formtutor >
    <h1a>Tutor Registration</h1a>      
      <labela>
        <b>Full Name</b>
        <input
          type="text"
          name="name"
          value={tutor.name}
          onChange={handleInputs} required ="true"
        />
      </labela>
      <labelt>
        <b>Email</b>
        <input
          type="string"
          name="email"
          value={tutor.email}
          onChange={handleInputs} required="true"
        />
      </labelt>
      <labelt>
       <b>Password</b>
        <input
          type="string"
          name="password"
          value={tutor.password}
          onChange={handleInputs} required="true"
        />
      </labelt>
      <labelt>
        <b>Confirm Password</b>
        <input
          type="string"
          name="cpassword"
          value={tutor.cpassword}
          onChange={handleInputs} required="true"
        />
      </labelt>
      <labelt>
       <b>Education</b> 
        <input
          type="string"
          name="education"
          value={tutor.education}
          onChange={handleInputs} required="true"
        />
      </labelt>
      <labelt>
       <b>Contact Number</b> 
        <input
          type="number"
          name="contactNumber"
          value={tutor.contactNumber}
          onChange={handleInputs} required="true"
        />
      </labelt>
      <labelt>
        <b>Present Address</b>
        <textarea
        name="presentAddress"
          value={tutor.presentAddress}
          onChange={handleInputs} required="true"
        />
      </labelt>
      <labelt>
       <b>Permanent Address</b> 
        <textarea
          name="permanentAddress"
          value={tutor.permanentAddress}
          onChange={handleInputs} required="true"
        />
  </labelt>
  <labelt>
    <b>Subject interested to teach</b>
    <input
      type="string"
      name="subjects"
      value={tutor.subjects}
      onChange={handleInputs} required="true"
    />
    </labelt>
    <labelt>
       <b>Prime Location</b> 
        <input
          type="string"
          name="primelocation"
          value={tutor.primelocation}
          onChange={handleInputs} required="true"
        />


  </labelt>
  
  <labelt>
    <b>Address proof</b>
    <input
      type="file"
      onChange={handleInputs} required="true"
    />
    Aadhar/ voter-id / DL
  </labelt>
  <input type="submit" className='button contact_submit_button' value="Register" onClick={PostData}></input>
</formtutor>
</>
 );
}

export default Tregister;