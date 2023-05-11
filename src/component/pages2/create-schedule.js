import React, { Component } from 'react';
import axios from 'axios';
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";

export default class CreateEmployee extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeOrderType = this.onChangeOrderType.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      phoneNumber: '',
      orderType: '',
      address: '',
      //image: ''
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangePhoneNumber(e) {
    const input = e.target.value;
    const phoneNumber = input.replace(/\D/g, ""); // remove non-digits from input

    if (phoneNumber.length <= 9) { // validate the length
      this.setState({ phoneNumber });
    }
  }

  onChangeOrderType(e) {
    this.setState({
      orderType: e.target.value
    });
  }

  onChangeAddress(e) {
    this.setState({
        address: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const schedules = {
      
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      orderType: this.state.orderType,
      address: this.state.address, 
    }

    console.log(schedules);

    axios.post('http://localhost:8090/schedules/add', schedules)
          .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Employee</h3>
      <form onSubmit={this.onSubmit}>
        
        <div className="form-group"> 
          <label>Name: </label>
          <input  
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
              />
        </div>
        <div className="form-group">
        <label>Phone Number: </label>
        <input
          type="text"
          className="form-control"
          value={this.state.phoneNumber}
          onChange={this.onChangePhoneNumber}
          pattern="[0-9]{9}"
          placeholder='771234567'
          title="Please enter a valid Phone Number in the format 771234567"
          required
        />
      </div>
        <div className="form-group">
          <label>orderType: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.orderType}
              onChange={this.onChangeOrderType}
              title="Please enter order type"
              required
              />
        </div>

        <div className="form-group">
          <label>Address: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.address}
              onChange={this.onChangeAddress}
              required
              />
        </div>

        <br/>


        <div className="form-group">
          <input type="submit" value="Create Schedule" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}