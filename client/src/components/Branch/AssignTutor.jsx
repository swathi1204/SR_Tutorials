import React, { useState } from "react";
import './assign.css';

const Assigntutor = () => {
  const [query, setQuery] = useState("");
  const [query2, setQuery2] = useState("");
  const [results, setResults] = useState([]);
  const [result2, setResults2]= useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    console.log(event.target.value);
  };

  const handleInputChange2 = (event2) => {
    setQuery2(event2.target.value);
    console.log(event2.target.value);
  };

  const handleSearch2 = (event2) => {
    event2.preventDefault();

    fetch(`http://localhost:5000/studentregister?primelocation=${query}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data:", data.students);
        setResults2(data.students);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  console.log("results:", result2);

  const handleSearch = (event) => {
    event.preventDefault();

    fetch(`http://localhost:5000/tutorregister?primelocation=${query}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data:", data.tutors);
        setResults(data.tutors);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  console.log("results:", results);

  return (
    <div>
    <div>
      <form onSubmit={handleSearch}>
        <div className="xyz">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          name="query"
          onChange={handleInputChange}
        /></div>

        <button type="submit">Search</button>
      </form>
      <div className="abc">
        {results.length > 0 &&
          results.map((result, index) => (
            <div key={index}>
              <div >Name: {result.name}</div>
              <div>Email: {result.email}</div>
              <div>Education: {result.education}</div>
              <div>Contact number: {result.contactNumber}</div>
              <div>Prime Location: {result.primelocation}</div>
              <div>Subjects: {result.subjects}</div>
            </div>
          ))}
      </div>
    </div>

  <div>
<form onSubmit={handleSearch2}>
  <div className="xyz">
  <input
    type="text"
    placeholder="Search..."
    value={query2}
    name="query2"
    onChange={handleInputChange2}
  /></div>

  <button type="submit">Search</button>
</form>
<div className="abc">
  {result2.length > 0 &&
    result2.map((result, index) => (
      <div key={index}>
        <div >Name: {result.name}</div>
        <div>Email: {result.email}</div>
        <div>Education: {result.education}</div>
        <div>Contact number: {result.contactNumber}</div>
        <div>Prime Location: {result.primelocation}</div>
        <div>Subjects: {result.subjects}</div>
      </div>
    ))}
</div>
</div>
</div>
  );
};

export default Assigntutor;
