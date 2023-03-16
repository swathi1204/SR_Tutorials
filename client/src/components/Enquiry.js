import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Enquiry.css'

const Enquiry = () => {
  
  const[contact, setContact]=useState([])
  useEffect(() => {
    axios.get(
        "http://localhost:5000/contact"
    )
    .then(res => {
        setContact(res.data.contacts)
    })
    .catch(err => {
        console.log(err)
    })
}, [])

console.log(contact)
  return (
   
    <div className='enquiry_base'>
      <h1>Enquiry</h1>
        <div className='enq_content'>
          {
            contact.map((c,index) => (
              contact.length > 0 ? 
              <div className='record' key={c._id}>
                <div className='a'>
                id_no : {index+1}
              </div>

              <div className='a'>
              name: {c.name}
              </div>
              <div className='a'>
                 email: {c.email}
              </div>
              <div className='a'>
                 phone: {c.phone}
              </div>
              <div className='a'>
                 message: {c.message}
              </div>
              </div>
              
              :null
          ))}
        </div>
    </div>
    
  )
}

export default Enquiry