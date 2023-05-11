import React, { useState } from "react";
import axios from 'axios';

function AddCandidate(){
     const[name, setName]= useState("");
     const[age, setage]= useState("");
     const[address, setaddress]= useState("");
     const[date_Of_Birth, setdate_Of_Birth,]= useState();
     const[basic_salary, setbasic_Salary]= useState("");
     const[email, setemail]= useState("");
     const[gender, setgender]= useState("");
     const[department, setdepartment]= useState(undefined);
     const[telephone, settelephone]= useState("");
     const[job_position, setjob_position]= useState(""); 
    
     
    
    
    function sendData(e){
        e.preventDefault();

        alert("inserted");
        console.log("Executed")

    
    
    
    const newCandidate ={
         name,
         age,
        address,
        date_Of_Birth,
         basic_salary,
         email,
         gender,
         department,
        telephone,
        job_position,
        
    }
    console.log("new candidate " ,newCandidate);
       axios.post('http://localhost:8090/candidate/add',newCandidate).then(() =>{
        alert("Employee Added")
       }).catch((err)=>{
        alert((err))
       })
}   

console.log("NAme - ", name);


function handleDepartment(event){
   setdepartment(event.target.value);
}

return(
<>
<div className="background-image-a"><h1><center>AddEmploye</center> </h1>
<div className="body">
    


</div>

<div className="container-v transparent">  
 <div></div>
<h1>AddCandidate</h1>

 <div>
    <form onSubmit={sendData}>
             <div class="form-group">



                <label for="name"> Name</label><br></br>
                   <input type="string"
                    class="form-control" 
                    id="name"
                    placeholder="Enter  Name "
                    onChange={(e) =>  {
                     setName(e.target.value);
                    }}/>
                   
            </div>
             
                <div class="form-group">
                <label for="age"> Age</label><br></br>
                   <input type="Number" 
                     class="form-control"
                      id="age"
                     placeholder="Enter Age"
                     onChange={(e) =>  {
                        setage(e.target.value);
                       }}/>
                    </div>
                    <div class="form-group">
                     <label for="address">  Address </label><br></br>
                        <input type="text" 
                            class="form-control"
                            id="address"
                            placeholder="Enter Employee Address"
                            onChange={(e) =>  {
                               setaddress(e.target.value);
                         }}/>
                        </div> 
                        <div class="form-group">
<label for="date_Of_Birth">Date Of Birth </label><br></br>
   <input type="Date" 
       class="form-control"
       id="date_Of_Birth"
       placeholder="Enter  Dtae Of Birth"
       onChange={(e) =>  {
        setdate_Of_Birth(e.target.value);
    }}/>
</div> 
                <div class="form-group">
                     <label for="basic_salary"> Basic Salary </label><br></br>
                        <input type="Number" 
                            class="form-control"
                            id="basic_salary"
                            placeholder="Enter Basic Salary"
                            onChange={(e) =>  {
                               setbasic_Salary(e.target.value);
                         }}/>
                        </div> 
                        <div class="form-group">
<label for="email">  Email </label><br></br>
   <input type="string" 
       class="form-control"
       id="email"
       placeholder="Enter Email"
       onChange={(e) =>  {
          setemail(e.target.value);
    }}/>
</div> 
<div class="form-group">
<label for="gender"> Gender</label><br></br>
   <input type="string" 
       class="form-control"
       id="gender"
       placeholder="Enter Employee Gender"
       onChange={(e) =>  {
          setgender(e.target.value);
    }}/>
</div> 
              
                        <div class="form-group">
                     <label for="departnment">  Departnment </label>
                     <select id = "department-type" name="department-type" value={setdepartment} onChange = {handleDepartment} required>
                        <option value = "HR Management">HR Management</option>
                        <option value ="Finance">Finance</option>
                        <option value="IT">IT</option>
                        <option value="Quality Management">Quality Management</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Mangement">Management</option>
                        </select>
                        <input type="string" 
       class="form-control"
       id="department"
       placeholder="Enter Employee department"
       onChange={(e) =>  {
          setdepartment(e.target.value);
    }}/><br></br>
                         
                         </div>   
                         <div class="form-group">
<label for="telephone">  Telephone </label><br></br>
   <input type="Number" 
       class="form-control"
       id="telephone"
       placeholder="Enter Telephone "
       onChange={(e) =>  {
          settelephone(e.target.value);
    }}/>
</div>      
<div class="form-group">
<label for="job_position"> Job position </label><br></br>
   <input type="string" 
       class="form-control"
       id="job_position"
       placeholder="Enter Job_Position"
       onChange={(e) =>  {
          setjob_position(e.target.value);
    }}/>
</div>         




                               


<center>
<button type="submit" class="btn --primary" >Submit</button>
</center>
                       

   </form>
</div>
</div>
</div>
</>
);
};

export default AddCandidate;