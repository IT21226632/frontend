import React,{useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";



export default function AllJob(){

 const[jobs, setJobs]= useState([]);

 useEffect(() =>  {
    function getJobs(){
        axios.get("http://localhost:8090/job/").then((res)   =>{
            console.log(res.data);
            setJobs(res.data);
            setInitJobs(res.data)
        }).catch((err)  => {
            alert(err.message);
        })
    }
       getJobs();
 },[])
 function handleDelete(id){
    console.log("delete me -", id);
    axios.delete(`http://localhost:8090/job/delete/${id}`)
    .then(()=>{ setJobs(jobs.filter((jobs)   => jobs._id   !==id));
    alert("Job deleted")
    }) 
 .catch((err)  => {
    alert(err.message);
 });
}
function handleUpdate(id){
    console.log("update me -", id);
    axios.update(`http://localhost:8090/job/update/${id}`)
    .then(()=>{ setJobs(jobs.filter((jobs)   => jobs._id   !==id));
    alert("job updated")
    }) 
 .catch((err)  => {
    alert(err.message);
 }); 
}

const handleJobClick = (id) => {
    const job = jobs.find((j) => j._id === id);
    console.log("Job clicked", job);
    // You can navigate to the JobDetails page with the job details here
  };
 

const [searchText, setSearchText] = useState("")
const [initJobs, setInitJobs] = useState([])
 
console.log("Search text ", searchText);

function searchHandler(){
    if(searchText.trim()){
        let searchResult 
        searchResult = jobs.filter((job)=>{
           return  job.name.toLowerCase().startsWith(searchText.trim().toLowerCase())
        })
        setJobs(searchResult)
    }
    else{
        setJobs(initJobs)
    }
}

useEffect(()=>{
    
        searchHandler()
    
    

},[searchText])
 



    return(
        <div> 

<div>
      <Link to='/AllEmployee/AddEmployee' className="btn-btn-primary">AddEmployee</Link>
          <Link to='/' className="btn-btn-primary">AllEmployee</Link>
          <Link to='/AllEmployee/AddCandidate' className="btn-btn-primary">AddCandidate</Link>
          <Link to='/AllEmployee/AllCandidate' className="btn-btn-primary">AllCandidate</Link>
          <Link to='/AllEmployee/AddJob' className="btn-btn-primary">AddJob</Link>
          <Link to='/AllEmployee/AllJob' className="btn-btn-primary">AllJob</Link>
          <Link to='/AllEmployee/Jobs' className="btn-btn-primary">View Jobs</Link>
      </div>
             
             <div className="background-image">
           <h1>All jobs<h2 className="attributes"><b> 200 jobs</b></h2></h1>
    {/* Your existing JSX code goes here */}


             
            

           
          {/* <Link to ='/AddEmployee' className="btn-btn-primary">AddEmployee</Link>*/}
           <div style={{ display: "flex", justifyContent: "center" }}>

           <input className="search-form"  placeholder="Search" id="search" width="12cm" onChange={(e)=> setSearchText(e.target.value)}/>
           <br></br><br></br></div> <table   
  
    className="table">
                <thead>
                    <tr>
                        
                        <th style={{ fontWeight: 'bold' ,color: 'white' }}>job_title</th>
                        <th style={{ fontWeight: 'bold' ,color: 'white'}}>description</th>
                        <th style={{ fontWeight: 'bold' ,color: 'white'}}>requirements</th>
                        <th style={{ fontWeight: 'bold' ,color: 'white'}}>date posted</th>
                        <th style={{ fontWeight: 'bold' ,color: 'white'}}>vacancies</th>
                        <th style={{ fontWeight: 'bold' ,color: 'white'}}>departnment</th>     
                        <th style={{ fontWeight: 'bold' ,color: 'white'}}>Update</th>
                        <th style={{ fontWeight: 'bold' ,color: 'white'}}>Delete</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job,i)  => (
                        <tr key={i}  >   
                            <td style={{ fontWeight: 'bold' ,color: 'white'}}>{job.job_title}</td>
                            <td style={{ fontWeight: 'bold' ,color: 'white'}}>{job.description}</td>
                            <td style={{ fontWeight: 'bold' ,color: 'white'}}>{job.requirements}</td>
                            <td style={{ fontWeight: 'bold' ,color: 'white'}}>{job.date_posted}</td>
                            <td style={{ fontWeight: 'bold' ,color: 'white'}}>{job.vacancies}</td>
                            <td style={{ fontWeight: 'bold' ,color: 'white'}}>{job.department}</td>
                           
                         
                           <td ><button className="btn-q"><Link to ={`/updateJob/${job._id}`} onClick={() => handleUpdate(job._id)}className="=btn-btn-info btn-sm">Update</Link></button></td>
                            <td ><button className="=btn-qp" onClick={() => handleDelete(job._id)} >Delete</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
            

            </div>

        </div>
    )
}