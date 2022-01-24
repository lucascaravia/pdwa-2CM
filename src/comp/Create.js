import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
 
class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: '', name: '', email: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
      const state = this.state
      state[event.target.name] = event.target.value
      this.setState(state);
  }
  handleSubmit(event) {
    event.preventDefault();
 
    let formData = new FormData();
    formData.append('name', this.state.name)
    formData.append('email', this.state.email)
  
 

 
    axios({
        method: 'post',
        url: 'http://localhost/final/',
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then(function (response) {
      
        console.log(response)
        alert('New Contact Successfully Added.');  
    })
    .catch(function (response) {
   
        console.log(response)
    });
 
  } 
  render() {
    return (
        <div className="container">
            <h1 className="page-header text-center">Add New Contact</h1>
            <Link to="/" className="btn btn-primary btn-xs">Home</Link>
            <div className="col-md-12">
            <div className="panel panel-primary">
                <div className="panel-body">
                <form onSubmit={this.handleSubmit}>

                <label>Name</label>
                <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleChange} /> 
                
                <label>Username</label>
                <input type="text" name="username" className="form-control" value={this.state.country} onChange={this.handleChange} />
  
                <label>Email</label>
                <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.handleChange} />
  
                <label>Phone</label>
                <input type="text" name="phone" className="form-control" value={this.state.city} onChange={this.handleChange} />

                <br/>
                <input type="submit" className="btn btn-primary btn-block" value="Create Contact" />
            </form>
                </div>
            </div>
            </div>
        </div>
    );
  }
}
 
export default Create;