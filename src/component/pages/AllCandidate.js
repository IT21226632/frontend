import React,{useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment"

export default function AllCandidate(){

 const[candidates, setCandidates]= useState([]);

 useEffect(() =>  {
    function getCandidates(){
        axios.get("http://localhost:8090/candidate/").then((res)   =>{
            console.log("candidates",res.data);
            setCandidates(res.data);
            setInitCandidates(res.data)
        }).catch((err)  => {
            alert(err.message);
        })
    }
       getCandidates();
 },[])

 function handleDelete(id){
    console.log("delete me -", id);
    axios.delete(`http://localhost:8090/candidate/delete/${id}`)
    .then(()=>{ setCandidates(candidates.filter((candidatess)   => candidates._id   !==id));
    alert("Candidate deleted")
    }) 
 .catch((err)  => {
    alert(err.message);
 });
}
function handleUpdate(id){
    console.log("update me -", id);
    axios.update(`http://localhost:8090/candidate/update/${id}`)
    .then(()=>{ setCandidates(candidates.filter((candidates)   => candidates._id   !==id));
    alert("Employee updated")
    }) 
 .catch((err)  => {
    alert(err.message);
 });
}
const [searchText, setSearchText] = useState("")
const [initCandidates, setInitCandidates] = useState([])
 
console.log("Search text ", searchText);

function searchHandler(){
    if(searchText.trim()){
        let searchResult 
        searchResult = candidates.filter((employee)=>{
           return  candidates.name.toLowerCase().startsWith(searchText.trim().toLowerCase())
        })
        setCandidates(searchResult)
    }
    else{
        setCandidates(initCandidates)
    }
}

useEffect(()=>{
    
        searchHandler()
    
    

},[searchText])
 


 

 


    return(
        <div className="background-image-c">

<div>
      <Link to='/AllEmployee/AddEmployee' className="btn-btn-primary">AddEmployee</Link>
          <Link to='/' className="btn-btn-primary">AllEmployee</Link>
          <Link to='/AllEmployee/AddCandidate' className="btn-btn-primary">AddCandidate</Link>
          <Link to='/AllEmployee/AllCandidate' className="btn-btn-primary">AllCandidate</Link>
          <Link to='/AllEmployee/AddJob' className="btn-btn-primary">AddJob</Link>
          <Link to='/AllEmployee/AllJob' className="btn-btn-primary">AllJob</Link>
          <Link to='/AllEmployee/Jobs' className="btn-btn-primary">View Jobs</Link>
      </div>
         <div>


       
                       <h1>All Candidate</h1>
                              

                                    <div style={{ display: "flex", justifyContent: "center" }}>

                        <input className="search-form"  placeholder="Search" id="search" width="12cm" onChange={(e)=> setSearchText(e.target.value)}/>
                        <br></br><br></br></div>   
                                           <table  width= "100%" 
  
                                    border-collapse= 'collapse' className="table">
                <thead>
                    <tr>
                        
                        <th style={{ fontWeight: 'bold' ,color: 'black' }}>name</th>
                        <th style={{ fontWeight: 'bold' ,color: 'black' }}>age</th>
                        <th style={{ fontWeight: 'bold' ,color: 'black' }}>Address</th>
                        <th style={{ fontWeight: 'bold' ,color: 'black' }}>date Of Birth</th>
                        <th style={{ fontWeight: 'bold' ,color: 'black' }}>basic salary</th>
                        <th style={{ fontWeight: 'bold' ,color: 'black' }}>Email</th>
                        <th style={{ fontWeight: 'bold' ,color: 'black' }}>gender</th>
                        <th style={{ fontWeight: 'bold' ,color: 'black' }}>department</th>
                        <th style={{ fontWeight: 'bold' ,color: 'black' }}>Telephone</th>
                        <th style={{ fontWeight: 'bold' ,color: 'black' }}>job position</th>
                        <th style={{ fontWeight: 'bold' ,color: 'black' }}>id</th>
                        <th style={{ fontWeight: 'bold' ,color: 'black' }}>Update</th>
                        <th style={{ fontWeight: 'bold' ,color: 'black' }}>Delete</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {candidates.map((candidate,i)  => (
                        <tr key={i}>
                            <td style={{ fontWeight: 'bold' ,color: 'black' }}>{candidate.name}</td>
                            <td style={{ fontWeight: 'bold' ,color: 'black' }}>{candidate.age}</td>
                            <td style={{ fontWeight: 'bold' ,color: 'black' }}>{candidate.address}</td>
                            <td style={{ fontWeight: 'bold' ,color: 'black' }}>{moment(candidate.date_of_birth).format("L")}</td>
                            <td style={{ fontWeight: 'bold' ,color: 'black' }}>{candidate.basic_salary}</td>
                            <td style={{ fontWeight: 'bold' ,color: 'black' }}>{candidate.email}</td>
                            <td style={{ fontWeight: 'bold' ,color: 'black' }}>{candidate.gender}</td>
                            <td style={{ fontWeight: 'bold' ,color: 'black' }}>{candidate.department}</td>
                            <td style={{ fontWeight: 'bold' ,color: 'black' }}>{candidate.telephone}</td>
                            <td style={{ fontWeight: 'bold' ,color: 'black' }}>{candidate.job_position}</td>
                            <td style={{ fontWeight: 'bold' ,color: 'black' }}>{candidate.id}</td>
                           
                           
                            
                           <td><Link to ={`/updateCandidate/${candidate._id}`} onClick={() => handleUpdate(candidate._id)}className="=btn-btn-info btn-sm">Update</Link></td>
                            <td><button onClick={() => handleDelete(candidate._id)} className="=btn-btn-danger btn-sm">Delete</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
            

              </div>         
        </div>
    )
}