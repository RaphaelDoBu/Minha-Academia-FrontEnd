import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import AcademiaEditar from '../Academia/academia-editar'

class Academia extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         users: []
    //     }
    // }

    // componentDidMount() {
    //     let self = this;
    //     let token = localStorage.getItem('DD101_TOKEN');
    //     console.log("Token:" + token.value)
    //     fetch('http://localhost:4005/academia', {
    //         method: 'GET',
    //         headers: {
    //             Accept: 'application/json',
    //             "Content-Type": "application/json"
    //         },
    //         cookies:{
    //             "access_token":  `${token}`
    //         },
    //         credentials: 'same-origin'
    //     }).then(function(response) {
    //         if (response.status >= 400) {
    //             throw new Error("Bad response from server");
    //         }
    //         return response.json();
    //     }).then(function(data) {
    //         self.setState({users: data});
    //     }).catch(err => {
    //     console.log('caught it!',err);
    //     })
    // }

    render() {
        return (
        <div className="container"> 
            <div className="panel panel-default p50 uth-panel">
                <h1>Bem vindo ao minha academia</h1>
                <NavLink to="/academia-editar"><Button>Editar dados</Button></NavLink>
                <BrowserRouter>
                    <div>
                    <Switch>
                        <Route path="/academia-editar" component={AcademiaEditar} />
                    </Switch>
                    </div>
                </BrowserRouter>
            </div>
        </div>
        );
    }
}

export default Academia;
