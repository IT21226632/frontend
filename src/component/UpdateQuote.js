import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../Nav.css';
import '../quote.css';
import '../footer.css';
import '../Admindb.css';
import '../QuotationManagement.css';
import '../report.css';

export default function QuoteUpdate() {
  const { id } = useParams();
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    address: '',
    date: ''
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8090/Quote/update/${id}`)
      .then((res) => {
        setValues({
          name: res.data.name,
          email: res.data.email,
          phone: res.data.phone,
          service: res.data.service,
          address: res.data.address,
          date: res.data.date
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^\S+@\S+\.\S+$/;

    // Phone validation
    const phoneRegex = /^\+?\d{10,}$/;

    // Validate email
    if (!emailRegex.test(values.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Validate phone number
    if (!phoneRegex.test(values.phone)) {
      alert('Please enter a valid phone number.');
      return;
    }

    axios
      .put(`http://localhost:8090/Quote/update/${id}`, values)
      .then((res) => {
        navigate('/quote');
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

    return (
      <div className="Quote_Form">
      <div className="form-container">
        <div class ="right">
      
                    </div>
                    
<div class = "quoteleft">
            <form onSubmit={handleSubmit} id = "f3">
              <h2>Update Quote</h2>
              <div>
              <tr><label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" value={values.name} required 
               onChange={handleChange}
              /></tr></div>

              <div>
              <tr><label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="example@gmail.com" value={values.email} required 
              onChange={handleChange}
              /></tr></div>
              
              <div>
              <tr><label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" placeholder="+94" value={values.phone} required 
              onChange={handleChange}
              /></tr></div>
              
              <div>
              <tr><label htmlFor="service-type">Service Type</label>
              <select id="service-type" name="service-type"  value={values.service} required 
              onChange={handleChange}>
              <option selected >select service type</option>
                <option value="Apartment cleaning" >Apartment cleaning</option>
                <option value="Office cleaning">Office cleaning</option>
                <option value="Floor cleaning">Floor cleaning</option>
                <option value="Home cleaning">Home cleaning</option>
                
              </select></tr></div>
              <div>
              <tr><label htmlFor="address">Address</label>
              <textarea id="address" name="address" value={values.address} onChange={handleChange}>
              
              </textarea></tr></div>

              <div>
              <tr><label htmlFor="date">Date</label>
              <input type="date" id="date" name="date" value={values.date} required 
              onChange={handleChange}
              /></tr></div>

              <tr><button type="submit">Update Quote</button></tr>
            </form></div>

      
    
            </div>

        </div>
      )
  }