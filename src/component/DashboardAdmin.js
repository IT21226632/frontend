import React from 'react';
import '../Nav.css';
import '../quote.css';
import '../footer.css';
import '../Admindb.css';
import '../QuotationManagement.css';
import '../report.css';

export default function DashboardAdmin() {
  return (
    <div style={{ display: 'flex' }}>
      <div id="ad-sidebar" style={{ overflow: 'auto' }}>
        <p id = "ad-name"><th3>YAMINI</th3></p>
        <th6 id = "id-name">Cleaning Service</th6>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Customer Management</a></li>
          <li><a href="#">Quotation Management</a></li>
          <li><a href="#">Schedule Management</a></li>
          <li><a href="#">Employee Management</a></li>
          <li><a href="#">Payment Management</a></li>
          <li><a href="#">Billing Management</a></li>
          <li><a href="#">Payroll Management</a></li>
          <li><a href="#">Inventory Management</a></li>
          <li><a href="#">Attendance Managemen</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </div>
      <div id="content-container" style={{ overflow: 'auto' }}>
        <div id="nav-ad">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div id="content">
          <h1>Dashboard</h1>
          <p>Welcome to your admin dashboard. Here you can manage your users and settings.</p>
        </div>
      </div>
    </div>
  );
}
