import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
 
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {contacts: []};
        this.headers = [
            { key: 'id', label: 'Id'},
            { key: 'name', label: 'Name' },
            { key: 'email', label: 'Email' },
           
            ];
        this.deleteContact = this.deleteContact.bind(this);
    }
  componentDidMount() {
    const url = 'http://localhost/final/'
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ contacts: data })
      console.log(this.state.contacts)
     })
  }
     
  deleteContact(id, event) { //alert(id)
    event.preventDefault();
    if(window.confirm("Are you sure want to delete?")) {
        axios({
            method: 'post',
            url: 'http://localhost/final/' + id
        })
        .then(function (response) {
            //handle success
            console.log(response)
            if(response.status === 200) {
                alert("Website deleted successfully");
            }
        })
        .catch(function (response) {
            //handle error
            console.log(response)
        });
    }
  }    
     
    render() {
        return (
            <div className="container"><h1>Lista de Empleados</h1>
            <p><Link to="/create" className="btn btn-primary btn-xs">Add New Contact</Link> </p>
            <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                        {
                            this.headers.map(function(h) {
                                return (
                                    <th key = {h.key}>{h.label}</th>
                                )
                            })
                        }
                          <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.contacts.map(function(item, key) {
                            return (
                                <tr key = {key}>
                                  <td>{item.id}</td>
                                  <td>{item.name}</td>
                                  <td>{item.email}</td>
                                  <td>
                    <Link to={`/update/${item.id}`} className="btn btn-primary btn-xs">Edit</Link>
                       
                    <Link to="#" onClick={this.deleteContact.bind(this, item.id)} className="btn btn-danger btn-xs">Delete</Link>
                                  </td>
                                </tr>)
                            }.bind(this))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
 
export default Contact;
