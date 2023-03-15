// import { set } from 'mongoose';
import React, {useState} from 'react'
import { NavLink , useNavigate} from 'react-router-dom'


const Signup = () => {
  const navigate= useNavigate();

  const[user,setUser]= useState({
    name:"", email:"", phone:"", dateofbirth:"", password:"", cpassword:""
  });
  let name, value;
  const handleInputs=(e)=>{
  console.log(e);
  name= e.target.name;
  value= e.target.value;

  setUser({...user, [name]:value});

}

const PostData = async (e) => {
  e.preventDefault();

  const {name,email,phone,dateofbirth,password,cpassword}= user;
  
   const res = await fetch("/register",{
     method:"POST",
     headers:{
       "content-type":"application/json"
     },
     body: JSON.stringify({
     
       name,email,phone,dateofbirth,password,cpassword
     })
   });
   const data = await res.json();
   if (data.status === 422 || !data) {
     window.alert("Invalid Registration");
     console.log("Invalid Registration");
   }else{
     window.alert("successful Registration");
     console.log("successful Registration");

     navigate("/");
    }
 }

  return (
    <>
    <section className='signup'>
      <div className='container mt-5'>
        <div className='signup-content'>
          <div className='signup-form'>
            <h2 className='form-title'>Sign Up</h2>
            <form method ="POST" className='register-form' id="register-form">
              <div className='form-group'>
                <label htmlFor='name'>
                <i class="zmdi zmdi-assignment-account material-icons-name"></i>
                </label>
                <input type='text' name='name' id='name' autoComplete='off'
                value={user.name}
                onChange={handleInputs}
                placeholder='Your Name'></input>
              </div>

              <div className='form-group'>
                <label htmlFor='email'>
                <i class="zmdi zmdi-email material-icons-name"></i>
                </label>
                <input type="text" name='email' id='email' autoComplete='off'
                value={user.email}
                onChange={handleInputs}
                placeholder='Your Email'></input>
              </div>
              
              <div className='form-group'>
                <label htmlFor='phone'>
                <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                </label>
                <input type="number" name='phone' id='phone' autoComplete='off'
                value={user.phone}
                onChange={handleInputs}
                placeholder='Your Phone Number'></input>
              </div>
              
              <div className='form-group'>
                <label htmlFor='dateofbirth'>
                <i class="zmdi zmdi-calendar material-icons-name"></i>
                </label>
                <input type="date" name='dateofbirth' id='dateofbirth' autoComplete='off'
                value={user.dateofbirth}
                onChange={handleInputs}
                placeholder='Your Date of Birth'></input>
              </div>

              <div className='form-group'>
                <label htmlFor='password'>
                <i class="zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input type="password" name='password' id='password' autoComplete='off'
                value={user.password}
                onChange={handleInputs}
                placeholder='Your Password'></input>
              </div>
              
              <div className='form-group'>
                <label htmlFor='cpassword'>
                <i class="zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input type="password" name='cpassword' id='cpassword' autoComplete='off'
                value={user.cpassword}
                onChange={handleInputs}
                placeholder='Confirm Your Password'></input>
              </div>

              <div className='form-group form-button'>
                <input type="submit" name="signup" id="signup" className='form-submit'
                value="register" onClick={PostData}
                />
              </div>
              
            </form>
            
            <div>
              <NavLink to="/login">I am already registered</NavLink>
            </div>
            </div>
         
        </div>
      </div>

    </section>
    </>
  )
}

export default Signup