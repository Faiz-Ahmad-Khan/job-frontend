import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DashboardPage() {
  const [jobs, setJobs] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {                                                                                                                                                                                                                               
    const fetchData = async () => {                                                                                                                                                                                                             
      try {                                                                                                                                                                                                                                     
        const response = await axios.get('http://localhost:5000/jobs');                                                                                                                                                                         
        setJobs(response.data);                                                                                                                                                                                                                 
      } catch (error) {                                                                                                                                                                                                                         
        console.error(error);                                                                                                                                                                                                                   
      }                                                                                                                                                                                                                                         
    };                                                                                                                                                                                                                                          
    fetchData();                                                                                                                                                                                                                                
  }, []);   

  const handleApply = async (job) => {                                                                                                                                                                                                            
    try {                                                                                                                                                                                                                                       
      const response = await axios.post('http://localhost:5000/jobs/apply', { jobId: job.id });                                                                                                                                                 
      // Update user and jobs state accordingly                                                                                                                                                                                                 
    } catch (error) {                                                                                                                                                                                                                           
      console.error(error);                                                                                                                                                                                                                     
    }                                                                                                                                                                                                                                           
  }; 

  return (
    <div>
      <h1>Dashboard</h1>
      {jobs.map((job) => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <p>{job.description}</p>
          <button onClick={() => handleApply(job)}>Apply</button>
        </div>
      ))}
    </div>
  );
}

export default DashboardPage;
