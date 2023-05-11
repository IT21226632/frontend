import React,{useEffect, useState} from 'react'
import '../Nav.css';
import '../quote.css';
import '../footer.css';
import '../Admindb.css';
import '../QuotationManagement.css';
import '../report.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function UpdateQuotation(){

    const {id} = useParams();
    const[values, setValues] = useState({
      id: id,
      quotation_name: '',
      service_type: '',
      single_rooms: '',
      master_rooms: '',
      washrooms: '',
      livingrooms: '',
      package_category: '',
      vacuumCleaning: '',
      glassCleaning: '',
      furnitureCleaning: ''

    })

    useEffect(()=> {

        axios.get('http://localhost:8090/Quotations/update/'+id)
        .then(res => {
          setValues({...values, quotation_name: res.data.quotation_name, service_type: res.data.service_type, single_rooms: res.data.single_rooms, master_rooms: res.data.master_rooms, washrooms: res.data.washrooms
            ,livingrooms: res.data.livingrooms, package_category: res.data.package_category, vacuumCleaning: res.data.vacuumCleaning, glassCleaning: res.data.glassCleaning, furnitureCleaning: res.data.furnitureCleaning})
        })
        .catch(err => console.log(err))

      },[])

      const navigate = useNavigate()
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8090/Quotations/update/'+id, values)
        .then(res => {
          alert('Quotation Updated');
          navigate('/quotations');
        })
        .catch(err => console.log(err))
      }

      

    return (

        <div class="grid-container">

        
        <main class="main-container">
          <div class="main-title">
            <h2>Quotation Management</h2>
          </div>

        <div className="Quote_Form">
          <div className="form-container4">
            <div className="f2-container">
            <div class = "left">
            <form id = "f0">
              
            <tr><label htmlFor="Quotation Name">Quotation Name</label>
              <input type="text" id="Quotation Name" name="Quotation Name" placeholder="Quotation Name" value={values.quotation_name} required 
              onChange={e => setValues({...values, quotation_name: e.target.value})}/></tr>

              <tr><label htmlFor="service-type">Service Type</label>
              <select id="service-type" name="service-type" value={values.service_type} onChange={e => setValues({...values, service_type: e.target.value})} required>

                <option value="Home cleaning">Home cleaning</option>
                <option value="Office cleaning">Office cleaning</option>
                <option value="Flour cleaning">Flour cleaning</option>
                <option value="Apartment cleaning">Apartment cleaning</option>
              </select></tr>

              <tr><label htmlFor="single_rooms">Single Rooms</label>
              <input type="number" id="single_room" name="single_room" placeholder="no of rooms" value={values.single_rooms}
              onChange={e => setValues({...values, single_rooms: e.target.value})}/>

              <label htmlFor="Master_rooms">Master Rooms</label>
              <input type="number" id="Master_rooms" name="Master_rooms" placeholder="no of rooms" value={values.master_rooms}
              onChange={e => setValues({...values, master_rooms: e.target.value})}/></tr>

              <tr><label htmlFor="Washrooms">Washrooms</label>
              <input type="number" id="Washrooms" name="Washrooms" placeholder="no of rooms" value={values.washrooms}
              onChange={e => setValues({...values, washrooms: e.target.value})}/></tr>

              <tr><label htmlFor="Livingrooms">Livingrooms</label>
              <input type="number" id="Livingrooms" name="Livingrooms" placeholder="no of rooms" value={values.livingrooms}
              onChange={e => setValues({...values, livingrooms: e.target.value})}/></tr>

              <tr><label htmlFor="Package-type">Package Type</label>
              <select id="Package-type" name="Package-type" value={values.package_category} onChange={e => setValues({...values, package_category: e.target.value})} required>

                <option value="">Sellect Package type</option>
                <option value="Regular">Regular</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
              </select></tr>
              
            </form></div>
            <div class="right1">
            <form id = "f4">
            <p id = "p1">Upload an Image</p>
                <img src = "../Images" width={250} height={150} ></img>
                

                <label for="file-upload">Choose a file to upload:</label>
                <input type="file" id="file-upload" name="file-upload" />
                
                <p id = "p1">Additional Options</p>
            <table>
            <tr><td>Vacuum Cleaning &nbsp; &nbsp; &nbsp; &nbsp;</td><td> <input type="checkbox" id="vacuum-cleaning" name="vacuum-cleaning" value={values.vacuumCleaning} onChange={e => setValues({...values, vacuumCleaning: e.target.value})}/></td></tr>
            <tr><td></td> <td></td> </tr>
            <tr><td></td> <td></td> </tr>
            <tr><td>Glass Cleaning</td><td><input type="checkbox" id="glass-cleaning" name="glass-cleaning" value={values.glassCleaning} onChange={e => setValues({...values, glassCleaning: e.target.value})}/></td></tr>
            <tr><td></td> <td></td> </tr>
            <tr><td></td> <td></td> </tr>
            <tr><td>Furniture Cleaning</td><td><input type="checkbox" id="furniture-cleaning" name="furniture-cleaning" value={values.furnitureCleaning} onChange={e => setValues({...values, furnitureCleaning: e.target.value})}/></td></tr>
            </table>
              
            </form></div>
            <button id = "bt4" type="submit" onClick={handleSubmit}>Update Quotation</button>
            
            

            </div>
            </div>
          </div>
        </main>
        
          
      </div>
   
      )
   
        
    }

    
        
          
        
      