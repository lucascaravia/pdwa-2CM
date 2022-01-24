import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
 
class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: '', name: '',username: '', email: '',phone: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  componentDidMount() {
    axios.get('http://localhost/final/?id=' + this.props.match.params.id)
    .then(response => response.data)
    .then((data) => {
      // handle success
      console.log(data);
      this.setState({ id: data.id, name: data.name,username: data.username ,email: data.email,phone: data.phone})
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
     
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
      formData.append('username', this.state.username)
      formData.append('phone', this.state.phone)
 
 
      axios({
          method: 'post',
          url: 'http://localhost/final/?id=' + this.props.match.params.id,
          data: formData,
          config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then(function (response) {
          //handle success
          console.log(response)
          if(response.status === 200) {
            alert("Contact update successfully.");
          }
      })
      .catch(function (response) {
          //handle error
          console.log(response)
      });
  }
 
  render() {
    return (
            <div className="container">
        <h1 className="page-header text-center">Update Contact</h1>
              <Link to="/" className="btn btn-primary btn-xs">Home</Link>
        <div className="col-md-12">
            <div className="panel panel-primary">
                <div className="panel-body">
                <form onSubmit={this.handleSubmit}>
                <input type="hidden" name="id" value={this.state.id}/>


                <label>Name</label>
                <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleChange} /> 
                
                <label>Email</label>
                <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.handleChange} />
  
                
  
                <br/>
                <input type="submit" className="btn btn-primary btn-block" value="Update Contact" />
            </form>
                </div>
            </div>
            </div>
               </div>
    );
  }
}
 
export default Update;