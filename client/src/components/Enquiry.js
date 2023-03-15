import React, { useState } from "react";
import axios from "axios";



function Enquiry() {
//   // const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);


// fetch(`/contact`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setResults(data);
//       })

//       .catch((error) => {
//         console.error("Error:", error);
//       });

//  axios.get("http://localhost:5000/contact")
//  .then(function(response){
//   console.log(response);

// response.data.forEach(function(data){
 
//   console.log(data);
  

//   })
// })

axios
  .get("http://localhost:5000/contact")
  .then(function (response) {
    console.log(response);
  });

    }  
    export default Enquiry;
  
