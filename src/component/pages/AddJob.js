import React, { useState } from "react";
import axios from 'axios';

function AddJob(){
     const[job_title, setjob_title]= useState("");
     const[description, setdescription]= useState("");
     const[requirements, setrequirements]= useState("");
     const[date_posted, setdate_posted]= useState("");
     const[vacancies, setvacancies]= useState("");
     const[departnment, setdepartnment]= useState("");
     
    
    
    function sendData(e){
        e.preventDefault();

        alert("inserted");
        console.log("Executed")

    
    
    
    const newJob ={
        job_title,
        description,
        requirements,
        date_posted,
        vacancies,
        departnment
        
    }
    console.log("new job " ,newJob);
       axios.post('http://localhost:8090/Job/add',newJob).then(() =>{
        alert("Job Added")
       }).catch((err)=>{
        alert((err))
       })
}   

console.log("NAme - ", job_title);

return(
<>
<div className="background-image-a"><h1><center>AddJob</center> </h1>
<div className="body">
    


</div>

<div className="container-v transparent">  
 <div>
    <form onSubmit={sendData}>
             <div class="form-group">



                <label for="job_title"><strong>job_title</strong></label>
                   <input type="string"
                    class="form-control" 
                    id="job_title"
                    placeholder="Enter job_title "
                    onChange={(e) =>  {
                     setjob_title(e.target.value);
                    }}/>
                   
            </div>
             
                <div class="form-group">
                <label for="description"><strong>description</strong></label>
                   <input type="String" 
                     class="form-control"
                      id="description"
                     placeholder="Enter description"
                     onChange={(e) =>  {
                        setdescription(e.target.value);
                       }}/>
                    </div>
                   
                <div class="form-group">
                     <label for="requirements"> <strong>requirements</strong> </label>
                        <input type="String" 
                            class="form-control"
                            id="requirements"
                            placeholder="Enter requirements"
                            onChange={(e) =>  {
                               setrequirements(e.target.value);
                         }}/>
                        </div> 
                        <div class="form-group">
                <label for="date_posted"><strong>date posted</strong></label>
                   <input type="date" 
                     class="form-control"
                      id="date_posted"
                     placeholder="Enter date posted"
                     onChange={(e) =>  {
                        setdate_posted(e.target.value);
                       }}/>
                    </div> 
               <div class="form-group">
                     <label for="vacancies"><strong>vacancies</strong> </label>
                        <input type="text" 
                            class="form-control"
                            id="vacancies"
                            placeholder="Enter vacancies"
                            onChange={(e) =>  {
                               setvacancies(e.target.value);
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

export default AddJob;