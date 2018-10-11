import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { BrowserRouter, NavLink, Switch, Route, Redirect } from 'react-router-dom';
import AcademiaEditar from '../Academia/academia-dados'

class Academia extends Component {

    state = {
        toDashboard: '',
    }

    verificaToken(){
        let token = localStorage.getItem('DD101_TOKEN');
        console.log(token)
        if(token === null){
            this.setState(() => ({
                toDashboard: true}))
            console.log(token)
        }
        
    }

    render() {
        this.verificaToken()
        if (this.state.toDashboard === true) {
            return <Redirect to='/login' />
        } 

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
