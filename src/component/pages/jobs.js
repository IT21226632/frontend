import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8090/job/")
      .then((res) => {
        console.log(res.data);
        setJobs(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  useEffect(() => {
    if (searchText.trim()) {
      setJobs((prevJobs) =>
        prevJobs.filter((job) =>
          job.job_title
            .toLowerCase()
            .startsWith(searchText.trim().toLowerCase())
        )
      );
    } else {
      axios
        .get("http://localhost:8090/job/")
        .then((res) => {
          console.log(res.data);
          setJobs(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }, [searchText]);

  

  console.log("Search text ", searchText);


  


  return (
    <div>
      <div className="background-image">
        <h1>
          All jobs<h2 className="attributes"><b> 200 jobs</b></h2>
        </h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            className="search-form"
            placeholder="Search"
            id="search"
            width="12cm"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <br></br>
          <br></br>
        </div>
        <div>
          {jobs.map((job, i) => (
            <div key={i}>
              <Link to={`/job/${job._id}`}>
                <h2>{job.job_title}</h2>
              </Link>
              <h1>Job Details</h1>
      <ul>
        <li>Job Title: {job.job_title}</li>
        <li>Description: {job.description}</li>
        <li>Requirements: {job.requirements}</li>
        <li>Date Posted: {job.date_posted}</li>
        <li>Vacancies: {job.vacancies}</li>
        <li>Department: {job.department}</li>
      </ul>
      <Link to={`/AddCandidate`}>
                <button>Apply Now</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
