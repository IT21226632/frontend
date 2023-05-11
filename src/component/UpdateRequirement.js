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


export default function RequirementUpdate(){

    const {id} = useParams();
    const[values, setValues] = useState({
      id: id,
      single_Rooms: '',
      master_Rooms: '',
      washRooms: '',
      livingRooms: '',
      vacuumCleaning: '',
      glassCleaning: '',
      furnitureCleaning: ''

    })
      useEffect(()=> {

        axios.get('http://localhost:8090/Requirements/update/'+id)
        .then(res => {
          setValues({...values, single_Rooms: res.data.single_Rooms, master_Rooms: res.data.master_Rooms, washRooms: res.data.washRooms, livingRooms: res.data.livingRooms, vacuumCleaning: res.data.vacuumCleaning, glassCleaning: res.data.glassCleaning, furnitureCleaning: res.data.furnitureCleaning})
        })
        .catch(err => console.log(err))

      },[])


      const navigate = useNavigate()
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8090/Requirements/update/'+id, values)
        .then(res => {
          navigate('/requirements');
        })
        .catch(err => console.log(err))
      }

    return (
        <div className="Quote_Form">
          <div className="form-container1">
            <div className="f2-container">
            <div class = "left">
            <form onSubmit={handleSubmit}  id = "f0">
              
              <tr><label htmlFor="single_rooms">Single Rooms</label>
              <input type="number" id="single_room" name="single_room" placeholder="no of rooms"
              onChange={e => setValues({...values, single_Rooms: e.target.value})}/>

              <label htmlFor="Master_rooms">Master Rooms</label>
              <input type="number" id="Master_rooms" name="Master_rooms" placeholder="no of rooms" 
              onChange={e => setValues({...values, master_Rooms: e.target.value})}/></tr>

              <tr><label htmlFor="Washrooms">Washrooms</label>
              <input type="number" id="Washrooms" name="Washrooms" placeholder="no of rooms" 
              onChange={e => setValues({...values, washRooms: e.target.value})}/></tr>

              <tr><label htmlFor="Livingrooms">Livingrooms</label>
              <input type="number" id="Livingrooms" name="Livingrooms" placeholder="no of rooms" 
              onChange={e => setValues({...values, livingRooms: e.target.value})}/></tr>
              
            </form></div>
            <div class="right1">
            <form onSubmit={handleSubmit} id = "f1">
                <p id = "p1">Advance Cleaning Options</p>

            <table>
            <tr><td>Vacuum Cleaning &nbsp; &nbsp; &nbsp; &nbsp;</td><td> <input type="checkbox" id="vacuum-cleaning" name="vacuum-cleaning" onChange={e => setValues({...values, vacuumCleaning: e.target.checked})}/></td></tr>
            <tr><td></td> <td></td> </tr>
            <tr><td></td> <td></td> </tr>
            <tr><td>Glass Cleaning</td><td><input type="checkbox" id="glass-cleaning" name="glass-cleaning" onChange={e => setValues({...values, glassCleaning: e.target.checked})}/></td></tr>
            <tr><td></td> <td></td> </tr>
            <tr><td></td> <td></td> </tr>
            <tr><td>Furniture Cleaning</td><td><input type="checkbox" id="furniture-cleaning" name="furniture-cleaning" onChange={e => setValues({...values, furnitureCleaning: e.target.checked})}/></td></tr>
            </table>
              
            </form></div>
            <button id = "bt2" type="submit">Hire Incpector</button>
            <button id = "bt1" onClick={handleSubmit}>Update Quote</button>
            

            </div>
            </div>
          </div>
        
      )
    }