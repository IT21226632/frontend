import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';


export default function ViewSchedule(props) {

  const componentRef = useRef();
    const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    });

  const [state, setState] = useState({
    name: '',
    phoneNumber: '',
    orderType: '',
    address: ''
  });

  useEffect(() => {
    if (props.match && props.match.params && props.match.params.id) {
      axios
        .get(`http://localhost:8090/schedules/${props.match.params.id}`)
        .then(response => {
          setState(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [props.match]);

  function onSubmit(e) {
    e.preventDefault();
    console.log(state);
  }

  return (
    <div ref = {componentRef}>
      
      <br />
      <br />
      <h3><b><center>View Schedule</center></b></h3> <br />
      <div className="rounded border border-primary p-5 fs-5">
        <div>
          <p>
            <b>Name: </b>
            {state.name}
          </p>
        </div>
        <div>
          <p>
            <b>Phone Number: </b>
            {state.phoneNumber}
          </p>
        </div>
        <div>
          <p>
            <b>Order Type: </b>
            {state.orderType}
          </p>
        </div>
        <div>
          <p>
            <b>Address: </b>
            {state.address}
          </p>
        </div>
        <button className="btn btn-info">
  <Link to="/" class="text-decoration-none" >Back to Schedules</Link>
</button>
        
        {/*<button  className="btn btn-primary mt-5" onClick={handlePrint}> Download Report PDF </button>*/}
      </div>
    </div>
  );
}