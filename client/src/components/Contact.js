import React ,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


const contact = () => {
    const navigate= useNavigate();

  const[contact,setContact]= useState({
    name:"", email:"", phone:"", message:""});
  let name, value;
  const handleInputs=(e)=>{
  console.log(e);
  name= e.target.name;
  value= e.target.value;

  setContact({...contact, [name]:value});

}

const PostData = async (e) => {
  e.preventDefault();
console.log(e)
  const {name,email,phone,message}= contact;
  
   const res = await fetch("/contact",{
     method:"POST",
     headers:{
       "Content-type":"application/json"
     },
     body: JSON.stringify({
     name,email,phone,message
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
    <div className='main2'>
    <div className='contact_info'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-10 offset-lg-1 d-flex justify-content-between'>
                    {/* {/phone number/} */}
                    <div className='contact_info_item d-flex justify-content-start align-items-center'>
                        <img src ="https://img.icons8.com/office/24/000000/iphone/png" alt = "phone"/>
                    
                        <div className='contact_info_content'>
                        <div className='contact_info_title'>
                           PHONE 
                        </div>
                        <div className='contact_info_text'>
                           +91 1111 543 2198
                        </div>
                        </div>
                    
                    </div>

                    {/* {/Email/} */}
                    <div className='contact_info_item d-flex justify-content-start align-items-center'>
                        <img src ="https://img.icons8.com/office/24/000000/iphone/png" alt = "phone"/>
                    
                        <div className='contact_info_content'>
                        <div className='contact_info_title'>
                           EMAIL
                        </div>
                        <div className='contact_info_text'>
                           srtutorials @gmail.com
                        </div>
                        </div>
                    
                    </div>

                    {/* {/Address/} */}
                    <div className='contact_info_item d-flex justify-content-start align-items-center'>
                        <img src ="https://img.icons8.com/office/24/000000/iphone/png" alt = "phone"/>
                    
                        <div className='contact_info_content'>
                        <div className='contact_info_title'>
                           ADDRESS 
                        </div>
                        <div className='contact_info_text'>
                           Dharwad, Karnataka
                        </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
      
      </div>

      {/* {/contact us form/} */}

      <div className='contact_form'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-10 offset-lg-1'>
                    <div className='contact_form_container py-5'>
                       <div className='contact_form_title'>
                        GET IN TOUCH
                        </div> 
                        <form id='contact_form'>
                            <div className='contact_form_name d-flex justify-content-between align-items-between'>
                              
                              <input type="text" name="name" id ="contact_form_name" 
                              className='contact_form_name input_field '
                              value={contact.name}
                              
                              onChange={handleInputs}
                              placeholder='Your Name' required="true" />

                              <input type="text" name="email" id ="contact_form_email" 
                              className='contact_form_email input_field '
                                 value={contact.email}
                              onChange={handleInputs}
                              placeholder='Your Email' required="true" />

                              <input type="number" name="phone" id ="contact_form_phone" 
                              className='contact_form_phone input_field '
                                 value={contact.phone}
                              onChange={handleInputs}
                              placeholder='Your Phone Number' required="true" />

                            </div>

                            <div className='contact_form_text mt-5'>
                                <textarea  name="message" className='text_field contact_form_message'
                                   value={contact.message}
                              onChange={handleInputs}
                                placeholder='Message' cols="30" rows='10'></textarea>
                            </div>
                            <div className='contact_form_button'>
                                <input type='Submit' className='button contact_submit_button' 
                                 value="send message" onClick={PostData}></input>
                                
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </div>

    </>
  );
}

export default contact;