import React,{useState,useEffect} from 'react'
import axios from 'axios';
import '../Nav.css';
import '../quote.css';
import '../footer.css';
import '../Admindb.css';
import '../QuotationManagement.css';
import '../report.css';

export default function AllQuotations(){

    const [quotations, setQuotations] = useState([]);

    useEffect(() =>{
         function getQuotations(){

            axios.get("http://localhost:8090/Quotations/").then((res) =>{
                setQuotations(res.data);
                setsID(res.data);
        }).catch((err) => {
            alert(err.message);
        })
         }
         getQuotations();

    }, [] )

    function handleDelete(id) {
      axios
        .delete(`http://localhost:8090/Quotations/delete/${id}`)
        .then((res) => {
          alert('Quote deleted');
          setQuotations(quotations.filter((quotation) => quotation._id !== id));
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
        searchResult = quotations.filter((quotations) =>{
          return quotations.quotation_name.toLowerCase().startsWith(searchText.trim().toLowerCase())
        })
        setQuotations(searchResult)
      }
      else{
        setQuotations(sID)
      }
    }

    useEffect(()=> {
      searchHandler()
    },[searchText])

return(


  <div className = "quotationlist">
  <div className = "topic">
    <th1>Quotation List</th1>
  </div>
  <div class="search-container">
<form id = "q1">
  <input type="text" placeholder="Search quote" onChange={(e)=> setSearchText(e.target.value)}/>
</form>
<div className = "quobtn">
<a href='/quotations/add'><button class="add-quote-button">Add Quotation</button></a>
</div>
</div>

    <div class="grid">
        
        <table id = "td1">
  <thead>
    <tr>
      <th>ID</th>
      <th>Quotation Name</th>
      <th>Service Type</th>
      <th>Package Type</th> 
      <th>Action</th>
    </tr>
  </thead>
    <tbody>
    
        {quotations.map((quotation) => (
  <tr key={quotation._id}>  
      <td>{quotation._id}</td>
      <td>{quotation.quotation_name}</td>
      <td>{quotation.service_type}</td>
      <td>{quotation.package_category}</td>


      <td>
            <a href=""><i id="tb2" class="fa fa-info-circle" ></i></a>
            <a href={`/quotation/update/${quotation._id}`}><i id="tb2" class="fa fa-file" ></i></a>
            <a href=""><i onClick={() => handleDelete(quotation._id)} id="tb1" class="fa fa-trash"  ></i></a>
            
            
          </td>

    </tr>
  ))}
  </tbody>
</table>
        
  
      </div>
      </div>
    
 

)}