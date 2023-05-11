import React,{useState,useEffect} from 'react'
import axios from 'axios';
import '../Nav.css';
import '../quote.css';
import '../footer.css';
import '../Admindb.css';
import '../QuotationManagement.css';
import '../report.css';

export default function AllRequirements(){

    const [requirements, setRequirement] = useState([]);

    useEffect(() =>{
         function getrequirements(){

            axios.get("http://localhost:8090/Requirements/").then((res) =>{
                setRequirement(res.data);
                setsID(res.data);
        }).catch((err) => {
            alert(err.message);
            
        })
         }
         getrequirements();

    }, [] )

    function handleDelete(id) {
      axios
        .delete(`http://localhost:8090/Requirements/delete/${id}`)
        .then((res) => {
          alert('Requirement deleted');
          setRequirement(requirements.filter((requirement) => requirement._id !== id));
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    const [searchText, setSearchText] = useState("")
    const [sID, setsID] = useState([])

    console.log("Search text", searchText);

    function searchHandler(){
      if(searchText.trim()){
        let searchResult
        searchResult = requirements.filter((requirements) =>{
          return requirements._id.toLowerCase().startsWith(searchText.trim().toLowerCase())
        })
        setRequirement(searchResult)
      }
      else{
        setRequirement(sID)
      }
    }

    useEffect(()=> {
      searchHandler()
    },[searchText])

return(

  <div className = "quotelist">
    <div className = "topic">
      <th1>Requirement List</th1>
    </div>
    <div class="search-container">
  <form id = "q1">
    <input type="text" placeholder="Search quote" onChange={(e)=> setSearchText(e.target.value)}/>
  </form>
  <div className = "quobtn">
  <a href='requirements/add'><button class="add-quote-button">Add Requirement</button></a>
  
  </div>
</div>

    <div class="grid">
 
        <table id = "td1">
  <thead>
    <tr>
      <th>ID</th>
      <th>Single Rooms</th>
      <th>Master Rooms</th>
      <th>WashRooms</th>
      <th>LivingRooms</th>
      <th>vacuumCleaning</th>
      <th>glassCleaning</th>
      <th>furnitureCleaning</th> 
      <th>Action</th>
    </tr>
  </thead>
    <tbody>
    
        {requirements.map((requirement) => (
  <tr key={requirement._id}>  
      <td>{requirement._id}</td>
      <td>{requirement.single_Rooms}</td>
      <td>{requirement.master_Rooms}</td>
      <td>{requirement.washRooms}</td>
      <td>{requirement.livingRooms}</td>
      <td>{requirement.vacuumCleaning}</td>
      <td>{requirement.glassCleaning}</td>
      <td>{requirement.furnitureCleaning}</td>


      <td>
            <a href={`/requirements/update/${requirement._id}`}><i id="tb2" class="fa fa-file" ></i></a>
            <a href=""><i onClick={() => handleDelete(requirement._id)} id="tb1" class="fa fa-trash"  ></i></a>
            
          </td>

    </tr>
  ))}
  </tbody>
</table>
        
  
      </div></div>
    
 

)}