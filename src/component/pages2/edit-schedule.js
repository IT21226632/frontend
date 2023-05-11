import React, { Component } from 'react';
import axios from 'axios';



export default class EditEmployee extends Component {
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
    }
  }

  componentDidMount() {
    if (this.props.match.params) {
      axios.get('http://localhost:8090/schedules/'+this.props.match.params.id)
        .then(response => {
          this.setState({
            name: response.data.name,
            phoneNumber: response.data.phoneNumber,
            orderType: response.data.orderType,
            address: response.data.address,
        
          })   
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
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
    })
  }

  onChangeAddress(e) {
    this.setState({
        address: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

    const schedule = {
        name: this.state.name,
        phoneNumber: this.state.phoneNumber,
        orderType: this.state.orderType,
        address: this.state.address,
    }

    console.log(schedule);

    axios.post('http://localhost:8090/schedules/update/' + this.props.match.params.id, schedule)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Employee</h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>Name: </label>
          <input  type="text"
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
              placeholder='0771234567'
              title="Please enter a valid Phone Number in the format 0771234567"
              required
              />
        </div>
        <div className="form-group">
          <label>Order Type: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.orderType}
              onChange={this.onChangeOrderType}
              title="Please enter a order type"
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

        <div className="form-group">
          <input type="submit" value="Edit Schedule" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}