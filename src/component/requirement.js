import React,{useState} from 'react'
import axios from "axios";
import '../Nav.css';
import '../quote.css';
import '../footer.css';
import '../Admindb.css';
import '../QuotationManagement.css';
import '../report.css';

export default function Req_Form(){

  const [single_Rooms, setSingle_Rooms] = useState("");
  const [master_Rooms, setMaster_Rooms] = useState("");
  const [washRooms, setWashRooms] = useState("");
  const [livingRooms, setLivingRooms] = useState('');
  const [vacuumCleaning, setVacuumCleaning] = useState(false);
  const [glassCleaning, setGlassCleaning] = useState(false);
  const [furnitureCleaning, setFurnitureCleaning] = useState(false);
  
  
  function sendData(e){
  e.preventDefault();
    
  const newRequirement = {
  
    single_Rooms,
    master_Rooms,
    washRooms,
    livingRooms,
    vacuumCleaning,
    glassCleaning,
    furnitureCleaning
  
  }

  axios.post("http://localhost:8090/Requirements/add",newRequirement).then(()=>{
  alert("Requirement Add")



}).catch((err)=>{
  alert((err))
})

}

    return (
        <div className="Quote_Form">
          <div className="form-container1">
            <div className="f2-container">
            <div class = "left">
            <form onSubmit={sendData}  id = "f0">
              
              <tr><label htmlFor="single_rooms">Single Rooms</label>
              <input type="number" id="single_room" name="single_room" placeholder="no of rooms"
              onChange={(e) => {
                const value = e.target.value;
                if (value === "" || /^\d+$/.test(value)) {
                  setSingle_Rooms(value);
                }
              }} />

              <label htmlFor="Master_rooms">Master Rooms</label>
              <input type="number" id="Master_rooms" name="Master_rooms" placeholder="no of rooms" 
              onChange={(e) =>{
                setMaster_Rooms(e.target.value);
              }}/></tr>

              <tr><label htmlFor="Washrooms">Washrooms</label>
              <input type="number" id="Washrooms" name="Washrooms" placeholder="no of rooms" 
              onChange={(e) =>{
                setWashRooms(e.target.value);
              }}/></tr>

              <tr><label htmlFor="Livingrooms">Livingrooms</label>
              <input type="number" id="Livingrooms" name="Livingrooms" placeholder="no of rooms" 
              onChange={(e) =>{
                setLivingRooms(e.target.value);
              }}/></tr>
              
            </form></div>
            <div class="right1">
            <form onSubmit={sendData} id = "f1">
                <p id = "p1">Advance Cleaning Options</p>

            <table>
            <tr><td>Vacuum Cleaning &nbsp; &nbsp; &nbsp; &nbsp;</td><td> <input type="checkbox" id="vacuum-cleaning" name="vacuum-cleaning" onChange={(e) => setVacuumCleaning(e.target.checked)}/></td></tr>
            <tr><td></td> <td></td> </tr>
            <tr><td></td> <td></td> </tr>
            <tr><td>Glass Cleaning</td><td><input type="checkbox" id="glass-cleaning" name="glass-cleaning" onChange={(e) => setGlassCleaning(e.target.checked)}/></td></tr>
            <tr><td></td> <td></td> </tr>
            <tr><td></td> <td></td> </tr>
            <tr><td>Furniture Cleaning</td><td><input type="checkbox" id="furniture-cleaning" name="furniture-cleaning" onChange={(e) => setFurnitureCleaning(e.target.checked)}/></td></tr>
            </table>
              
            </form></div>
            <button id = "bt2" type="submit">Hire Incpector</button>
            <button id = "bt1" onClick={sendData}>Get Quote</button>
            

            </div>
            </div>
          </div>
        
      )
    }