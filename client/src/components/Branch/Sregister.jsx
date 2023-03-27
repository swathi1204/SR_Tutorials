import React, { useState } from "react";
import "./Sregister.css";
import { useNavigate } from "react-router-dom";


const Sregister = () =>{

  const navigate= useNavigate();

  const[student,setStudent]= useState({
      name:"", email:"", password:"", cpassword:"" , board:"", classs:"", contactNumber:"", presentAddress:"",primelocation:"", subjects:""});
    let name, value;
    const handleInputs=(e)=>{
    console.log(e);
    name= e.target.name;
    value= e.target.value;
  
    setStudent({...student, [name]:value});
  
  }

const PostData = async (e) => {
  e.preventDefault();
console.log(e)
  const {name, email, password, cpassword, board, classs, contactNumber, presentAddress, primelocation, subjects}= student;
  
   const res = await fetch("/studentregister",{
     method:"POST",
     headers:{
       "Content-type":"application/json"
     },
     body: JSON.stringify({
      name, email, password, cpassword, board, classs, contactNumber, presentAddress,primelocation, subjects
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

     navigate("/");
    }
}

  return (
    <>
    
    <formabc>
    <h1a>Student Registration</h1a>      
      <labelx>
        <b>Full Name</b>
        <input
          type="text"
          name= "name"
          value={student.name}
          onChange={handleInputs} required ="true"/>
      </labelx>
      <labelb>
        <b>Email</b>
        <input
          type="string"
          name="email"
          value={student.email}
          onChange={handleInputs} required ="true"
        />

      </labelb>
      <labelb>
       <b>Password</b>
        <input
          type="string"
          name="password"
          value={student.password}
          onChange={handleInputs} required ="true"
        />
      </labelb>
      <labelb>
        <b>Confirm Password</b>
        <input
          type="string"
          name="cpassword"
          value={student.cpassword}
          onChange={handleInputs} required ="true"></input>
       
      </labelb>
      <labelb>
       <b>Board</b> 
        <input
          type="text"
          name="board"
          value={student.board}
          onChange={handleInputs} required ="true"
        />
  
      </labelb>
      <labelb>
        <b>Class</b>
        <select name="classs" value={student.classs} onChange={handleInputs} required ="true">
          {Array.from({ length: 12 }, (_, index) => index + 1).map((number) => (
            <option value={number} key={number}>
              {number}
            </option>
          ))}
        </select>
      </labelb>



      <labelb>
       <b>Contact Number</b> 
        <input
          type="number"
          name="contactNumber"
          value={student.contactNumber}
          onChange={handleInputs} required="true"
        />
        
      </labelb>
      <labelb>
        <b>Present Address</b>
        <textarea
          name="presentAddress"
          value={student.presentAddress}
          onChange={handleInputs} required="true"
        />
        
      </labelb>
      <labelb>
        <b>Prime Location</b>
        <input
          type="string"
          name="primelocation"
          value={student.primelocation}
          onChange={handleInputs} required="true"
        />
        
      </labelb>
    
  
  <labelb>
    <b>Subject required</b>
    <input
      type="text"
      name="subjects"
      value={student.subjects}
      onChange={handleInputs} required="true"
    />
  </labelb>
  <labelb>
        <b>Address Proof</b>
        <select name="addressProofa" value={student.addressProofa} onChange={handleInputs} required="true">
          <option value="Aadhar">Aadhar Card</option>
  
          <option value="passport">Passport</option>
          
        </select>
      </labelb>
  <labelb>
    <b>Address proof</b>
    
    <input
      type="file"
      name="addressProof"
      // value={student.addressProof}
      onChange={handleInputs} required="true"
    />
   
  
  </labelb>
  
  <labelb>
        <b>Any Queries?</b>
        <textarea
        name="Query"
          value={student.Query}
          onChange={handleInputs} required="true"
        />
       
      </labelb>

      <input type="submit" className='button contact_submit_button' value="Register" onClick={PostData}></input>
</formabc>
</>
 );
}

export default Sregister;
