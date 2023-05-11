import React from 'react'
import '../Nav.css';
import '../quote.css';
import '../footer.css';
import '../Admindb.css';
import '../QuotationManagement.css';
import '../report.css';

export default function AdminDashboard(){
    return (
        <div class="grid-container">

        
        <header class="header">
          <div class="menu-icon" onclick="openSidebar()">
            <span class="material-icons-outlined">menu</span>
          </div>
          <div class="header-left">
            <span class="material-icons-outlined">search</span>
          </div>
          <div class="header-right">
            <span class="material-icons-outlined">notifications</span>
            <span class="material-icons-outlined">email</span>
            <span class="material-icons-outlined">account_circle</span>
          </div>
        </header>
        
        <aside id="sidebar">
          <div class="sidebar-title">
            <div class="sidebar-brand">
              <span class="material-icons-outlined">shopping_cart</span> STORE
            </div>
            <span class="material-icons-outlined" onclick="closeSidebar()">close</span>
          </div>
  
          <ul class="sidebar-list">
            <li class="sidebar-list-item">
              <a href="#" target="_blank">
                <span class="material-icons-outlined">dashboard</span> Dashboard
              </a>
            </li>
            <li class="sidebar-list-item">
              <a href="#" target="_blank">
                <span class="material-icons-outlined">inventory_2</span> Products
              </a>
            </li>
            <li class="sidebar-list-item">
              <a href="#" target="_blank">
                <span class="material-icons-outlined">category</span> Categories
              </a>
            </li>
            <li class="sidebar-list-item">
              <a href="#" target="_blank">
                <span class="material-icons-outlined">groups</span> Customers
              </a>
            </li>
            <li class="sidebar-list-item">
              <a href="#" target="_blank">
                <span class="material-icons-outlined">fact_check</span> Inventory
              </a>
            </li>
            <li class="sidebar-list-item">
              <a href="#" target="_blank">
                <span class="material-icons-outlined">poll</span> Reports
              </a>
            </li>
            <li class="sidebar-list-item">
              <a href="#" target="_blank">
                <span class="material-icons-outlined">settings</span> Settings
              </a>
            </li>
          </ul>
        </aside>
        
        
        
        
  
      </div>
      )
    }