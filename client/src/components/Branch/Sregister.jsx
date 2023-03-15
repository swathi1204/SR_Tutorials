import React, { useState } from "react";
import "./Sregister.css";
import { useNavigate } from "react-router-dom";


const Sregister = () =>{

  const navigate= useNavigate();

  const[student,setStudent]= useState({
      name:"", email:"", password:"", cpassword:"" , board:"", classs:"", contactNumber:"", presentAddress:"", subjects:""});
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
  const {name, email, password, cpassword, board, classs, contactNumber, presentAddress,  subjects}= student;
  
   const res = await fetch("/studentregister",{
     method:"POST",
     headers:{
       "Content-type":"application/json"
     },
     body: JSON.stringify({
      name, email, password, cpassword, board, classs, contactNumber, presentAddress, subjects
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


// function Sregister() {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [Board, setBoard] = useState("");
//   const [contactNumber, setContactNumber] = useState("");
//   const [presentAddress, setPresentAddress] = useState("");
//   const [subjects, setSubjects] = useState([]);
//   const [addressProof, setAddressProof] = useState("");
//   const [errors] = useState({});
//   const [addressProofa, setAddressProofa] = useState('None');
//   const [Query, setQuery] = useState("");
//   const [classLevel, setClassLevel] = useState('1');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//  const formData = {
//       fullName,
//       email,
//       password,
//       confirmPassword,
//       Board,
//       contactNumber,
//       presentAddress,
     
//       subjects,
//       addressProof,
//     };

//     console.log(formData);
//   };

  return (
    <>
    
    <formabc>
    <h1>Student Registration</h1>      
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
        {/* {errors.email && <div className="error">{errors.email}</div>} */}
      </labelb>
      <labelb>
       <b>Password</b>
        <input
          type="password"
          name="password"
          value={student.password}
          onChange={handleInputs} required ="true"
        />
        {/* {errors.password && <div className="error">{errors.password}</div>} */}
      </labelb>
      <labelb>
        <b>Confirm Password</b>
        <input
          type="password"
          name="cpassword"
          value={student.cpassword}
          onChange={handleInputs} required ="true"></input>
        {/* {errors.confirmPassword && (
          <div className="error">{errors.confirmPassword}</div>
        )} */}
      </labelb>
      <labelb>
       <b>Board</b> 
        <input
          type="text"
          name="board"
          value={student.board}
          onChange={handleInputs} required ="true"
        />
        {/* {errors.education && <div className="error">{errors.education}</div>} */}
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
        {/* {errors.contactNumber && (
          <div className="error">{errors.contactNumber}</div>
        )} */}
      </labelb>
      <labelb>
        <b>Present Address</b>
        <textarea
          name="presentAddress"
          value={student.presentAddress}
          onChange={handleInputs} required="true"
        />
        {/* {errors.presentAddress && (
          <div className="error">{errors.presentAddress}</div>
        )} */}
      </labelb>
    
  
  <labelb>
    <b>Subject required</b>
    <input
      type="text"
      name="subjects"
      value={student.subjects}
      onChange={handleInputs} required="true"
    />
    {/* {errors.subjects && <div className="error">{errors.subjects}</div>} */}
  </labelb>
  <labelb>
        <b>Address Proof</b>
        <select value={student.addressProofa} onChange={handleInputs} required="true">
          <option value="Aadhar">Aadhar Card</option>
          {/* <option value="DL">Driving License</option> */}
          <option value="passport">Passport</option>
          
        </select>
      </labelb>
  {/* <labelb>
    <b>Address proof</b>
    
    <input
      type="file"
      onChange={handleInputs} required="true"
    />
    {errors.addressProof && (
      <div className="error">{errors.addressProof}</div>
    )}
   
  </labelb> */}
  
  <labelb>
        <b>Any Queries?</b>
        <textarea
        name="Query"
          value={student.Query}
          onChange={handleInputs} required="true"
        />
        {/* {errors.Query && (
          <div className="error">{errors.Query}</div>
        )} */}
      </labelb>

      <input type="submit" className='button contact_submit_button' value="Register" onClick={PostData}></input>
  {/* <button type="submit">Register</button> */}
</formabc>
</>
 );
}

export default Sregister;
