import React, { useState } from "react";
import axios from 'axios';



function UpdateEmployee(){
    const[name, setName]= useState("");
    const[age, setage]= useState("");
    const[address, setaddress]= useState("");
    const[date_Of_Birth, setdate_Of_Birth,]= useState("");
    const[basic_salary, setbasic_Salary]= useState("");
    const[email, setemail]= useState("");
    const[gender, setgender]= useState("");
    const[job_Position, setjob_Position]= useState(""); 
    const[telephone, settelephone]= useState("");
    const[departnment, setdepartnment]= useState("");

    const id = "64422d0aafa57954f6ed9c70"
   
   
   function sendData(e){
       e.preventDefault();

       alert("inserted");
       console.log("Executed")

   
   
   
   const newEmployee ={
        name,
        age,
       address,
       date_Of_Birth,
        basic_salary,
        email,
        gender,
        departnment,
       telephone,
       job_Position,
       
   }
   console.log("new emoloyee " ,newEmployee);
      axios.put(`http://localhost:8090/Employee/get/${id}`,newEmployee).then(() =>{
       alert("Employee updated")
      }).catch((err)=>{
       alert((err))
      })
}   

console.log("NAme - ", name);

return(
<>
<h1>Update Employee</h1>
<div className="container ">
<div>
   <form onSubmit={sendData}>
            <div class="form-group">



               <label for="name">Employee Name</label><br></br>
                  <input type="string"
                   class="form-control" 
                   id="name"
                   placeholder="Enter Employee Name "
                   onChange={(e) =>  {
                    setName(e.target.value);
                   }}/>
                  
           </div>
            
               <div class="form-group">
               <label for="age">Employee Age</label><br></br>
                  <input type="Number" 
                    class="form-control"
                     id="age"
                    placeholder="Enter Employee Age"
                    onChange={(e) =>  {
                       setage(e.target.value);
                      }}/>
                   </div>
               <div class="form-group">
                    <label for="basic_salary"> Employee Basic Salary </label><br></br>
                       <input type="Number" 
                           class="form-control"
                           id="basic_salary"
                           placeholder="Enter Employee Basic Salary"
                           onChange={(e) =>  {
                              setbasic_Salary(e.target.value);
                        }}/>
                       </div>  
              <div class="form-group">
                    <label for="address"> Employee Address </label><br></br>
                       <input type="text" 
                           class="form-control"
                           id="address"
                           placeholder="Enter Employee Address"
                           onChange={(e) =>  {
                              setaddress(e.target.value);
                        }}/>
                       </div> 
                       <div class="form-group">
                    <label for="departnment"> Employee Departnment </label><br></br>
                        <input type="string" 
                           class="form-control"
                           id="departnment"
                           placeholder="Enter Employee departnment"
                            onChange={(e) =>  {
                             setdepartnment(e.target.value);
                               }}/>
                        </div>        
<div class="form-group">



<label for="job_position"> Job_Position </label><br></br>
  <input type="string" 
      class="form-control"
      id="job_position"
      placeholder="Enter Employee Job_Position"
      onChange={(e) =>  {
         setjob_Position(e.target.value);
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



<label for="dateOfBirth">Dtae Of Birth </label><br></br>
  <input type="Date" 
      class="form-control"
      id="dateOfBirth"
      placeholder="Enter Employee Dtae Of Birth"
      onChange={(e) =>  {
       setdate_Of_Birth(e.target.value);
   }}/>
</div> 

<div class="form-group">

<label for="telephone"> Employee Telephone </label><br></br>
  <input type="Number" 
      class="form-control"
      id="telephone"
      placeholder="Enter Employee Telephone "
      onChange={(e) =>  {
         settelephone(e.target.value);
   }}/>
</div> 
                              
<div class="form-group">
<label for="email"> Employee Email </label><br></br>
  <input type="string" 
      class="form-control"
      id="email"
      placeholder="Enter Employee Email"
      onChange={(e) =>  {
         setemail(e.target.value);
   }}/>
</div>

<center>
<button type="submit" class="btn --primary" >Submit</button>
</center>
                      

  </form>
</div>
</div>
</>
);
};
    
 

export default UpdateEmployee;