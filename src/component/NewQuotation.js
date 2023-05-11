import React,{useState} from 'react'
import axios from "axios";
import '../Nav.css';
import '../quote.css';
import '../footer.css';
import '../Admindb.css';
import '../QuotationManagement.css';
import '../report.css';

export default function NewQuotation(){

  const [quotation_name, setQuotation_name] = useState("");
  const [service_type, setServiceValue] = useState(undefined);
  const [single_rooms, setSingle_rooms] = useState("");
  const [master_rooms, setMaster_rooms] = useState("");
  const [washrooms, setWashrooms] = useState('');
  const [livingrooms, setLivingrooms] = useState('');
  const [package_category, setPackageValue] = useState(undefined);
  const [vacuumCleaning, setVacuumCleaning] = useState(false);
  const [glassCleaning, setGlassCleaning] = useState(false);
  const [furnitureCleaning, setFurnitureCleaning] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

function sendData(e){
e.preventDefault();
  
const newQuotation = {

  quotation_name,
        service_type,
        single_rooms,
        master_rooms,
        washrooms,
        livingrooms,
        package_category,
        vacuumCleaning,
        glassCleaning,
        furnitureCleaning

}

axios.post("http://localhost:8090/Quotations/add",newQuotation).then(()=>{
alert("Quotation Add")



}).catch((err)=>{
  alert((err))
})

}

function handleSelectServiceChange(event) {
  setServiceValue(event.target.value);
}

function handleSelectPackageChange(event) {
  setPackageValue(event.target.value);
}



const handleImageUpload = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setImageSrc(reader.result);
  };
};



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
              <input type="text" id="Quotation Name" name="Quotation Name" placeholder="Quotation Name" 
              onChange={(e) =>{
                setQuotation_name(e.target.value);
              }} required /></tr>

              <tr><label htmlFor="service-type">Service Type</label>
              <select id="service-type" name="service-type" value={setServiceValue} onChange={handleSelectServiceChange} required>

              <option value="Home cleaning">Home cleaning</option>
                <option value="Office cleaning">Office cleaning</option>
                <option value="Flour cleaning">Flour cleaning</option>
                <option value="Apartment cleaning">Apartment cleaning</option>
              </select></tr>

              <tr><label htmlFor="single_rooms">Single Rooms</label>
              <input type="number" id="single_room" name="single_room" placeholder="no of rooms" 
              onChange={(e) =>{
                setSingle_rooms(e.target.value);
              }}/>

              <label htmlFor="Master_rooms">Master Rooms</label>
              <input type="number" id="Master_rooms" name="Master_rooms" placeholder="no of rooms" 
              onChange={(e) =>{
                setMaster_rooms(e.target.value);
              }}/></tr>

              <tr><label htmlFor="Washrooms">Washrooms</label>
              <input type="number" id="Washrooms" name="Washrooms" placeholder="no of rooms" 
              onChange={(e) =>{
                setWashrooms(e.target.value);
              }}/></tr>

              <tr><label htmlFor="Livingrooms">Livingrooms</label>
              <input type="number" id="Livingrooms" name="Livingrooms" placeholder="no of rooms" 
              onChange={(e) =>{
                setLivingrooms(e.target.value);
              }}/></tr>

              <tr><label htmlFor="Package-type">Package Type</label>
              <select id="Package-type" name="Package-type" value={setPackageValue} onChange={handleSelectPackageChange} required>

              <option value="">Sellect Package type</option>
                <option value="Regular">Regular</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
              </select></tr>
              
            </form></div>
            <div class="right1">
            <form id = "f4">
            <p id = "p1">Upload an Image</p>
            <form id = "image-btn">
                <img id = "uploaded-image" src={imageSrc} width={250} height={150} ></img>
                

                <label for="file-upload">Choose a file to upload:</label>
                <input type="file" id="file-upload" name="file-upload" onChange={handleImageUpload} />
                
                </form>
                
                <p id = "p1">Additional Options</p>
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
            <button id = "bt4" type="submit" onClick={sendData}>Create Quote</button>
            
            

            </div>
            </div>
          </div>
        </main>
        
          
      </div>
   
      )
   
        
    }

    
        
          
        
      