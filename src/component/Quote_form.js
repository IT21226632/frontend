import React,{useState} from 'react'
import axios from "axios";
import '../Nav.css';
import '../quote.css';
import '../footer.css';
import '../Admindb.css';
import '../QuotationManagement.css';
import '../report.css';

export default function Quote_Form(){

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [service, setSelectValue] = useState(undefined);
const [address, setAddress] = useState('');
const [date, setDate] = useState('');

function sendData(e){
e.preventDefault();

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?\d{10,14}$/;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid phone number.");
    return;
  }
  
const newQuote = {

  name,
  email,
  phone,
  service,
  address,
  date

}

axios.post("http://localhost:8090/Quote/add",newQuote).then(()=>{
alert("Quote Add")



}).catch((err)=>{
  alert((err))
})

}

function handleSelectChange(event) {
  setSelectValue(event.target.value);
}

function handleChange(event) {
  setAddress(event.target.value);
}

    return (
        <div className="Quote_Form">
          <div className="form-container">
            <div class ="right">
          <div class="phara">
                            <h2>Best & Trusted</h2>
                            <h2><span>Cleaning Service</span></h2>
                            <p>The best cleaning service of srilanka</p>
                            <a class="btn" href="">Explore Now</a>
                        </div>
                        </div>
            <div class = "left">
            <form onSubmit={sendData} id = "f3">
              <h2>Get a Quote</h2>
              <tr><label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required 
              onChange={(e) =>{
                setName(e.target.value);
              }} /></tr>

              <tr><label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="example@gmail.com" required 
              onChange={(e) =>{
                setEmail(e.target.value);
              }}/></tr>
              

              <tr><label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" placeholder="+94" required 
              onChange={(e) =>{
                setPhone(e.target.value);
              }}/></tr>
              

              <tr><label htmlFor="service-type">Service Type</label>
              <select id="service-type" name="service-type" value={setSelectValue} onChange={handleSelectChange} required >
              <option selected >select service type</option>
                <option value="Apartment cleaning" >Apartment cleaning</option>
                <option value="Office cleaning">Office cleaning</option>
                <option value="Floor cleaning">Floor cleaning</option>
                <option value="Home cleaning">Home cleaning</option>
                
              </select></tr>

              <tr><label htmlFor="address">Address</label>
              <textarea id="address" name="address" value={address} onChange={handleChange} >
              
              </textarea></tr>

              <tr><label htmlFor="date">Date</label>
              <input type="date" id="date" name="date"  required 
              onChange={(e) =>{
                setDate(e.target.value);
              }}/></tr>

              <tr><button type="submit">Get Quote</button></tr>
            </form></div>
          </div>
        </div>
      )
    }