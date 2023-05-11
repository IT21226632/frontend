import React, { useState, useEffect, useRef } from 'react';
import '../Nav.css';
import '../quote.css';
import '../footer.css';
import '../Admindb.css';
import '../QuotationManagement.css';
import '../report.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';


export default function ReportQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sID, setsID] = useState([]);
  

  useEffect(() => {
    function getQuotes() {
      const fromDate = new Date("2022-01-01");
      const toDate = new Date("2022-12-31");
      const service = "Web Development";
      const url = `http://localhost:8090/Quote/?date[gte]=${fromDate}&date[lte]=${toDate}&service=${service}`;

      axios
        .get(url)
        .then((res) => {
          setQuotes(res.data);
          setsID(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getQuotes();
  }, []);

  function searchHandler() {
    if (searchText.trim()) {
      let searchResult;
      searchResult = quotes.filter((quote) =>
        quote.service
          .toLowerCase()
          .startsWith(searchText.trim().toLowerCase())
      );
      setQuotes(searchResult);
    } else {
      setQuotes(sID);
    }
  }

  useEffect(() => {
    searchHandler();
  }, [searchText]);

  const counts = quotes.reduce((obj, quote) => {
    const date = new Date(quote.date);
    const month = date.toLocaleString("default", { month: "long" });
    const service = quote.service;
    const key = `${service}-${month}`;
    obj[key] = obj[key] ? obj[key] + 1 : 1;
    return obj;
  }, {});

  function exportToPDF() {
    const doc = new jsPDF();
    doc.autoTable({ html: '#my-table' });
    doc.save('quote-counts.pdf');
  }


  return (
    <div className="quotelist">
      <h2>Service Quote Counts</h2>
      
      <div className="btnline">
        <div class="search-container">
          <form id="q1">
            <input
              type="text"
              placeholder="Search quote"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </form>
          <div className="quobtn">
            <a href="/quote/generate">
              <button class="add-quote-button" onClick={exportToPDF}>Export to PDF</button>
            </a>
          </div>
        </div>
      </div>

      <div class="grid">
        <table className="table-report" id="my-table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Month</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
          {Object.entries(counts).sort((a, b) => {
              // Sort the entries by month
              const [, monthA] = a[0].split("-");
              const [, monthB] = b[0].split("-");
              return new Date(Date.parse(`01 ${monthA} 2000`)) - new Date(Date.parse(`01 ${monthB} 2000`));
            }).map(([key, count]) => {
             

              const [service, month] = key.split("-");
              return (
                <tr key={key}>
                  <td>{service}</td>
                  <td>{month}</td>
                  <td>{count}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        
      </div>
    </div>
  );
}
