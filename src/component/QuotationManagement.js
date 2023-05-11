import React from 'react';
import '../Nav.css';
import '../quote.css';
import '../footer.css';
import '../Admindb.css';
import '../QuotationManagement.css';
import '../report.css';
import QuotationImage from '../Images/quotation3.gif';
import QuoteImage from '../Images/quote1.gif';
import reqImage from '../Images/req1.gif';

export default function QuotationManagement() {
  return (
    <div>
      <div id="content-container" >
        <div class = "qoutelaft">
        <div id="ad-sidebar" style={{ overflow: 'auto' }}>
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Customer Management</a></li>
            <li><a href="#">Quotation Management</a></li>
            <li><a href='/schedule'>Schedule Management</a></li>
            <li><a href='/AllEmployee'>Employee Management</a></li>
            <li><a href="#">Payment Management</a></li>
            <li><a href="#">Billing Management</a></li>
            <li><a href="#">Payroll Management</a></li>
            <li><a href="#">Inventory Management</a></li>
            <li><a href="#">Attendance Management</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </div>
        </div>
        <div className='quoteright'>
        <div id="content" style={{ overflow: 'auto', height: '100vh' }} >
          <h1>Quotation Management</h1>
          <p>Welcome to Quotation Management dashboard. Here you can manage your Quotations and settings.</p>
          <div id="content1" >
            <a href='/quote'>
              <div id="containerq1" >
                <h2>Quotes</h2>
                <img id ="Im1" src = {QuoteImage} width={170} height={150}></img>
              </div>
            </a>
            <a href='/quotations'>
              <div id="containerq1" >
                <h2>Quotations</h2>
                <img id ="Im1" src = {QuotationImage} width={200} height={190}></img>
              </div>
            </a>
            <a href='/requirements'>
              <div id="containerq1" >
                <h2>requirements</h2>
                <img id ="Im1" src = {reqImage} width={170} height={150}></img>
              </div>
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
