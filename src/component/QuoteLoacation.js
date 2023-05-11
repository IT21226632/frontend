import React, { useState, useEffect, useRef } from 'react';
import '../Nav.css';
import '../quote.css';
import '../footer.css';
import '../Admindb.css';
import '../QuotationManagement.css';
import '../report.css';
import axios from 'axios';
import { Link ,useParams } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';


export default function QuoteLocation() {
  const { id } = useParams();
  const [quotes, setQuotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sID, setsID] = useState([]);
  const [mapData, setMapData] = useState(null);
  

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
        if (res.data.length > 0) {
          const newAddress = '123 Main St'; // Replace this with the new address
      const updatedData = [...res.data, { address: newAddress }];
      setMapData({ address: updatedData[0].address });
        }
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

  useEffect(() => {
    if (mapData) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: mapData.address }, (results, status) => {
        if (status === 'OK') {
          const map = new window.google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: results[0].geometry.location,
          });
          const marker = new window.google.maps.Marker({
            position: results[0].geometry.location,
            map: map,
          });
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    }
  }, [mapData]);


  return (
    <div className="quotelist">
      {mapData && (
        <div style={{ height: '400px', width: '100%' }}>
          <div id="map" style={{ height: '100%' }}></div>
        </div>
      )}
    </div>
  );
}
