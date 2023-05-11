import React,{useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './AllEmployee.css'
import moment from "moment"


export default function AllEmployee(){

 const[employees, setEmployees]= useState([]);

 useEffect(() =>  {
    function getEmployees(){
        axios.get("http://localhost:8090/employee/").then((res)   =>{
            console.log(res.data);
            setEmployees(res.data);
            setInitEmployees(res.data)
        }).catch((err)  => {
            alert(err.message);
        })
    }
       getEmployees();
 },[])
 function handleDelete(id){
    console.log("delete me -", id);
    axios.delete(`http://localhost:8090/employee/delete/${id}`)
    .then(()=>{ setEmployees(employees.filter((employees)   => employees._id   !==id));
    alert("Employee deleted")
    }) 
 .catch((err)  => {
    alert(err.message);
 });
}
function handleUpdate(id){
    console.log("update me -", id);
    axios.update(`http://localhost:8090/employee/update/${id}`)
    .then(()=>{ setEmployees(employees.filter((employees)   => employees._id   !==id));
    alert("Employee updated")
    }) 
 .catch((err)  => {
    alert(err.message);
 }); 
}
 

const [searchText, setSearchText] = useState("")
const [initEmployees, setInitEmployees] = useState([])
 
console.log("Search text ", searchText);

function searchHandler(){
    if(searchText.trim()){
        let searchResult 
        searchResult = employees.filter((employee)=>{
           return  employee.name.toLowerCase().startsWith(searchText.trim().toLowerCase())
        })
        setEmployees(searchResult)
    }
    else{
        setEmployees(initEmployees)
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
          <Link to='/AllEmployee/Table' className="btn-btn-primary">Department Report</Link>
      </div>
             
             <div className="background-image">
           <h1>All Employees<h2 className="attributes"><b> 200 Employees</b></h2></h1>
    {/* Your existing JSX code goes here */}


             
            

           
          {/* <Link to ='/AddEmployee' className="btn-btn-primary">AddEmployee</Link>*/}
           <div style={{ display: "flex", justifyContent: "center" }}>

           <input className="search-form"  placeholder="Search" id="search" width="12cm" onChange={(e)=> setSearchText(e.target.value)}/>
           <br></br><br></br></div> <table   
  
    className="table">
                <thead>
                    <tr>
                        
                        <th style={{ fontWeight: 'bold' ,color: 'white' }}>name</th>
                        <th style={{ fontWeight: 'bold' ,color: 'white'}}>age</th>
                        <th style={{ fontWeight: 'bold' ,color: 'white'}}>basic salary</th>
                        <th style={{ fontWeight: 'bold' ,color: 'white'}}>Address</th>
                        <th style={{ fontWeight: 'bold' ,color: 'white'}}>departnment</th>
                        <th style={{ fontWeight: 'bold' ,color: 'white'}}>gender</th>
                        <th style={{ fontWeight: 'bold' ,color: 'white'}}>job position</th>
                        <th style={{ fontWeight: 'bold' ,color: 'white'}}>Email</th>
                        <th style={{ fontWeight: 'bold' ,color: 'white'}}>Telephone</th>
                        <th style={{ fontWeight: 'bold' ,color: 'white'}}>id</th>
                        <th style={{ fontWeight: 'bold' ,color: 'white'}}>date of Birth</th>
                        <th style={{ fontWeight: 'bold' ,color: 'white'}}>Update</th>
                        <th style={{ fontWeight: 'bold' ,color: 'white'}}>Delete</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {employees.map((empolyee,i)  => (
                        <tr key={i}  className={i % 2 === 0 ? 'even-row' : 'odd-row'} >
                            <td style={{ fontWeight: 'bold' ,color: 'white'}}>{empolyee.name}</td>
                            <td style={{ fontWeight: 'bold' ,color: 'white'}}>{empolyee.age}</td>
                            <td style={{ fontWeight: 'bold' ,color: 'white'}}>{empolyee.basic_salary}</td>
                            <td style={{ fontWeight: 'bold' ,color: 'white'}}>{empolyee.address}</td>
                            <td style={{ fontWeight: 'bold' ,color: 'white'}}>{empolyee.department}</td>
                            <td style={{ fontWeight: 'bold' ,color: 'white'}}>{empolyee.gender}</td>
                            <td style={{ fontWeight: 'bold' ,color: 'white'}}>{empolyee.job_position}</td>
                            <td style={{ fontWeight: 'bold' ,color: 'white'}}>{empolyee.email}</td>
                            
                            <td style={{ fontWeight: 'bold' ,color: 'white'}}>{empolyee.telephone}</td>
                            <td style={{ fontWeight: 'bold' ,color: 'white'}}>{empolyee.id}</td>
                            <td style={{ fontWeight: 'bold' ,color: 'white'}}>{moment(empolyee.date_of_birth).format("L")}</td>
                            
                           
                         
                           <td ><button className="btn-q"><Link to ={`/AllEmployee/updateEmployee/${empolyee._id}`} onClick={() => handleUpdate(empolyee._id)}className="=btn-btn-info btn-sm">Update</Link></button></td>
                            <td ><button className="=btn-qp" onClick={() => handleDelete(empolyee._id)} >Delete</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
            

            </div>

        </div>
    )
}