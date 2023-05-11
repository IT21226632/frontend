import React, { useState } from "react";
import axios from 'axios';
import './AddEmployee.css'
function AddEmployee(){
     const[name, setName]= useState("");
     const[age, setage]= useState("");
     const[address, setaddress]= useState("");
     const[date_Of_Birth, setdate_Of_Birth,]= useState("");
     const[basic_salary, setbasic_Salary]= useState("");
     const[email, setemail]= useState("");
     const[gender, setgender]= useState("");
     const[job_Position, setjob_Position]= useState(""); 
     const[telephone, settelephone]= useState("");
     const[department, setdepartnment]= useState("");
    
    
    function sendData(e){
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?\d{10,14}$/;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!phoneRegex.test(telephone)) {
    alert("Please enter a valid phone number.");
    return;
  }

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
         department,
        telephone,
        job_Position,
        
    }
    console.log("new emoloyee " ,newEmployee);
       axios.post('http://localhost:8090/Employee/add',newEmployee).then(() =>{
        alert("Employee Added")
       }).catch((err)=>{
        alert((err))
       })
}   

console.log("NAme - ", name);



return(
<>
<div className="background-image-a"><h1><center>AddEmploye</center> </h1>
<div className="body">
    


</div>

<div className="container-v transparent">  
 <div>
    <form onSubmit={sendData}>
             <div class="form-group">



                <label for="name"><strong>Employee Name</strong></label>
                   <input type="string"
                    class="form-control" 
                    id="name"
                    placeholder="Enter Employee Name "
                    onChange={(e) =>  {
                     setName(e.target.value);
                    }}/>
                   
            </div>
             
                <div class="form-group">
                <label for="age"><strong>Employee age</strong></label>
                   <input type="Number" 
                     class="form-control"
                      id="age"
                     placeholder="Enter Employee Age"
                     onChange={(e) =>  {
                        setage(e.target.value);
                       }}/>
                    </div>

                    <div class="form-group">
                     <label for="address"><strong>Employee Address</strong> </label>
                        <input type="text" 
                            class="form-control"
                            id="address"
                            placeholder="Enter Employee Address"
                            onChange={(e) =>  {
                               setaddress(e.target.value);
                         }}/>
                        </div> 

                        <div class="form-group">



                        <label for="dateOfBirth"><strong>Employee date_Of_Birth</strong> </label>
                        <input type="Date" 
                            class="form-control"
                            id="dateOfBirth"
                            placeholder="Enter Employee Dtae Of Birth"
                            onChange={(e) =>  {
                                setdate_Of_Birth(e.target.value);
                            }}/>
                        </div> 


                <div class="form-group">
                     <label for="basic_salary"> <strong>Employee basic_salary</strong> </label>
                        <input type="Number" 
                            class="form-control"
                            id="basic_salary"
                            placeholder="Enter Employee Basic Salary"
                            onChange={(e) =>  {
                               setbasic_Salary(e.target.value);
                         }}/>
                        </div>  

                        <div class="form-group">
                            <label for="email"> <strong>Employee Email</strong> </label>
                            <input type="string" 
                                class="form-control"
                                id="email"
                                placeholder="Enter Employee Email"
                                onChange={(e) =>  {
                                    setemail(e.target.value);
                                }}/>
                            </div>


                            <div class="form-group">



                                <label for="gender"> <strong>Employee gender</strong></label>
                                <input type="string" 
                                    class="form-control"
                                    id="gender"
                                    placeholder="Enter Employee Gender"
                                    onChange={(e) =>  {
                                        setgender(e.target.value);
                                    }}/>
                                </div> 

                            
                
                        <div class="form-group">
                     <label for="departnment"><strong>Employee departnment</strong>  </label>
                         <input type="string" 
                            class="form-control"
                            id="departnment"
                            placeholder="Enter Employee departnment"
                             onChange={(e) =>  {
                              setdepartnment(e.target.value);
                                }}/>
                         </div> 

                         <div class="form-group">

                            <label for="telephone"> <strong>Employee Telephone</strong> </label>
                            <input type="Number" 
                                class="form-control"
                                id="telephone"
                                placeholder="Enter Employee Telephone "
                                onChange={(e) =>  {
                                    settelephone(e.target.value);
                                }}/>
                            </div>


                            <div class="form-group">



                            <label for="job_position"> <strong>Employee job_Position</strong> </label>
                            <input type="string" 
                                class="form-control"
                                id="job_position"
                                placeholder="Enter Employee Job_Position"
                                onChange={(e) =>  {
                                    setjob_Position(e.target.value);
                                }}/>
                            </div>         






 
                               


                <center>
                <button type="submit"  class="btn-primary" >Submit</button>
                </center>
                                    

                </form>
                </div>
                </div>
                </div>

</>
);
};

export default AddEmployee;