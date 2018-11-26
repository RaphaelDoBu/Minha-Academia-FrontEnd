import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from '../navbar';

class AcademiaEditar extends Component {

    state = {
        toDashboard: false,
    }

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        let self = this;
        let token = localStorage.getItem('DD101_TOKEN');
        fetch('http://localhost:4005/academia', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`
            },
            credentials: 'same-origin'
        }).then(function(response) {
            if (response.status >= 400) {
                self.setState(() => ({
                    toDashboard: true}))
            }
            return response.json();
        }).then(function(data) {
            self.setState({users: data});
        }).catch(err => {
             console.log('caught it!',err);
        })
    }

    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/login' />
        }

        return (
        <div>
            <NavBar></NavBar>   
            <div className="container">
                <div className="panel panel-default p50 uth-panel">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Member name</th>
                                <th>Member email</th>
                                <th>Blood Group</th>
                                <th>Phone number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={this.state.users.id}>
                            <td>{this.state.users.nome} </td>
                            <td>{this.state.users.endereco}</td>
                            <td>{this.state.users.cnpj}</td>
                            <td><a>Edit</a>|<a>Delete</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        );
}
}

export default AcademiaEditar;
