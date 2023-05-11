import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { useReactToPrint }from 'react-to-print';



export default function ScheduleList() {

    const [getSch, SetGetSch] = useState([]);
    console.log(getSch)

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    });


    //get feed Data
    const getSchData = async () => {

        const res = await fetch("http://localhost:8090/schedules/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();

        if (res.status === 422 || !data) {
            console.log("error ");
        } else {
            SetGetSch(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getSchData();
    }, [])

    //Delete feed data
    const deleteSch = async (id) => {

        const res2 = await fetch(`http://localhost:8090/schedules/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deleteData = await res2.json();

        if (res2.status === 422 || !deleteData) {
            console.log("error");
        } else {
            getSchData();

        }

    }
    //search feed
    const [searchInput,setSearchInput]=useState('');
    const searchSch=(searchval)=>{
        setSearchInput(searchval)
    }
    return (
        
        <div className='container mt-5'>

<nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <Link to="/schedule" className="navbar-brand">Schedule Management</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/schedule" className="nav-link">Schedule Details</Link>
          </li>
          <li className="navbar-item">
          <Link to="/schedule/create" className="nav-link">Create New Schedule</Link>
          </li>
        </ul>
        </div>
      </nav>
            
            <div className='d-flex'>
                <h4>Schedule List</h4>
                <div class="ms-auto w-50">
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Search schedule" 
                        onChange={(e)=>searchSch(e.target.value)}
                    />
                </div>
            </div>
            
            <div className='underline' ></div>
            <table className="table table-bordered mt-5"  ref = {componentRef}>
                <thead class="text-center">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Order Type</th>
                        <th scope="col" >Address </th>
                        <th scope="col" >Actions</th>
                    </tr>
                </thead>
                <tbody class="text-center">

                    {getSch.filter((val)=>{
                        if(searchInput == ""){
                            return val
                        }else if(val.name.toLowerCase().includes(searchInput.toLowerCase())){
                            return val; 
                        }
                    }).map((result, id) => {
                        return (
                            <>
                                <tr key={id}>
                                    <th scope="row">{id + 1}</th>
                                    <td>{result.name}</td>
                                    <td>{result.phoneNumber}</td>
                                    <td>{result.orderType}</td>
                                    <td>{result.address}</td>
                                    <td>
                                        <Link className='btn btn-info' to={`/schedule/view/${result._id}`}>View</Link>
                                        <Link className='btn btn-warning ms-2' to={`/schedule/edit/${result._id}`}>Update</Link>
                                        <button className='btn btn-danger ms-2'
                                            data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => deleteSch(result._id)}>Delete</button>
                                    </td>
                                </tr>


                            </>
                        )
                    })}

                </tbody>
            </table>
            <button  className="btn btn-primary mt-5" onClick={handlePrint}> Download Report PDF </button>
        </div>
    )
}