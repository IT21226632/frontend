import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Nav.css';
import '../quote.css';
import '../footer.css';
import '../Admindb.css';
import '../QuotationManagement.css';
import '../report.css';


export default function AllQuotes(){

    const [quotes, setQuotes] = useState([]);
    

    useEffect(() =>{
         function getquotes(){

            axios.get("http://localhost:8090/Quote/").then((res) =>{
                setQuotes(res.data);
                setsID(res.data);
        }).catch((err) => {
            alert(err.message);
        })
         }
         getquotes();

    }, [] )

    function handleDelete(id) {
      axios
        .delete(`http://localhost:8090/Quote/delete/${id}`)
        .then((res) => {
          alert('Quote deleted');
          setQuotes(quotes.filter((quote) => quote._id !== id));
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
        searchResult = quotes.filter((quote) =>{
          return quote.name.toLowerCase().startsWith(searchText.trim().toLowerCase())
        })
        setQuotes(searchResult)
      }
      else{
        setQuotes(sID)
      }
    }

    useEffect(()=> {
      searchHandler()
    },[searchText])



  

return(

    <div className = "quotelist">
    <div className = "topic">
      <th1>Quote List</th1>
    </div>
    <div className='btnline'>
    <div class="search-container">
  <form id = "q1">
    <input type="text" placeholder="Search quote" onChange={(e)=> setSearchText(e.target.value)}/>
  </form>
  
  <div className = "quobtn">
  <a href='/quote/add'><button class="add-quote-button">Add Quote</button></a>
  <a href='/quote/generate'><button class="generate-button" >Generate Report</button></a>
  </div>
  
  
</div>
</div>
    
    <div class="grid">
        
        
        <table id = "td1">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Service</th>
      <th>Address</th>
      <th>Date</th>
      <th>Action</th>
    </tr>
  </thead>
    <tbody>
    
        {quotes.map((quote) => (
  <tr key={quote._id}>  
      <td>{quote._id}</td>
      <td>{quote.name}</td>
      <td>{quote.email}</td>
      <td>{quote.phone}</td>
      <td>{quote.service}</td>
      <td>{quote.address}</td>
      <td>{quote.date}</td>
      <td>
          <Link to = {`/quote/update/${quote._id}`}> update </Link>
          <a href=""><i onClick={() => handleDelete(quote._id)} id="tb1" class="fa fa-trash"  ></i></a>
          <a href="/quote/location"><i id="tb1" class="fa fa-map-marker"  ></i></a>
          
            
          </td>

    </tr>
  ))}
  </tbody>
</table>
        
  
      </div>
      </div>
    
 

)}