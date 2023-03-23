import React, { useState } from "react";
import './assign.css';

const Assigntutor = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    console.log(event.target.value);
  };

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
  );
};

export default Assigntutor;
