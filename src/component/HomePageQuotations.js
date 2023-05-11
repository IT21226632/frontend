import React,{useState,useEffect} from 'react'
import axios from 'axios';
import homequo from '../Images/new23.gif';

import '../homequotation.css';

export default function HomePageQuotations(){

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


  <div className = "quotationlist2" >

{quotations.map((quotation) => (
    <div class="homequotation">
    <div className="quotationimage">
<img src={homequo} alt="Background" width={300} height={150}></img>
</div>


        <div className='inner-home'>
        <div className = "home-table">
            <table id = "td5">
  
    <tbody>
    
        
  <tr key={quotation._id}>  
      
      <tr>Quotation Name : {quotation.quotation_name}</tr>
      <tr>Service Type : {quotation.service_type}</tr>
      <tr>Package Type : {quotation.package_category}</tr>
      <tr>Master Rooms: {quotation.master_rooms}</tr>
      <tr>Single Rooms: {quotation.single_rooms}</tr>
      <tr>Washrooms: {quotation.washrooms}</tr>
      <tr>Livingn Rooms: {quotation.livingrooms}</tr>


      <tr>
            <a href=""><div className='Homeqoute-button3'>Purchase</div></a>
            
            
            
          </tr>

    </tr>
 
  </tbody>
</table>
</div>





        </div>
      </div>
      ))}
      </div>
    
 

)}