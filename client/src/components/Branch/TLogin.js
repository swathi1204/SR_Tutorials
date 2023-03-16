import React, {useState} from 'react'
import {  NavLink ,useNavigate} from 'react-router-dom'

const TLogin = () => {
//   const { path } = props;

  //const { pathProp } = props.url;
    // const[showPopup]=useState("hide")

  const navigate= useNavigate();
 const [email, setEmail]= useState('')
 const [password, setPassword]= useState('');

 const loginuser= async (e)=>{
  e.preventDefault();

  const res= await fetch('./signin_tutor',{ 
    method : "POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  const data = res.json();

  if(res.status===400 || !data){
    window.alert("Invalid credentials");
    console.log("Invalid credentials");
  }else{
   
    window.alert("successful login");
    console.log("successful login");

    navigate("/");
 
    }

 }

  return (
    <>
    <section className='signin'>
      <div className='container mt-5'>
        <div className='signin-content'>
        
            <div className='signup-form'>
            <h2 className='form-title'>TUTOR LOGIN</h2>
            <form  method= "POST" className='register-form' id="register-form">
            <div className='form-group'>
                <label htmlFor='email'>
                <i class="zmdi zmdi-email material-icons-name"></i>
                </label>
                <input type="text" name='email' id='email' autoComplete='off'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='Your Email'></input>
              </div>

              <div className='form-group'>
                <label htmlFor='password'>
                <i class="zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input type="password" name='password' id='password' autoComplete='off'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='Your Password'></input>
              </div>

              <div className='form-group form-button'>
                <input type="submit" name="signin" id="signin" className='form-submit'
                value="Log in"
                onClick={loginuser}
                />
              </div>
              </form>
              <div>
              <NavLink to="/signup">Create an account</NavLink>
            </div>
              </div>
         
        </div>
      </div>

    </section>


    </>
  )  
}

export default TLogin

