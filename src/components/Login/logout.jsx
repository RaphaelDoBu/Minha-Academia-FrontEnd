import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { BrowserRouter, NavLink, Switch, Route, Redirect} from 'react-router-dom';
import {withRouter} from "react-router-dom";
import Modal from 'react-awesome-modal';
import createHistory from 'history/createBrowserHistory'

const history = createHistory();

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : true
        }
    }

    state = {
        toDashboard: false,
    }
    
    closeModal() {
        this.setState(() => ({
            visible: false
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();

        localStorage.removeItem("DD101_TOKEN");
        this.setState(() => ({
            toDashboard: true}))
        localStorage.clear();
    }

    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/login' />
        }
        return (
        <section>
            <Modal visible={this.state.visible} width="300" height="150" effect="fadeInUp" 
              onClickAway={() => this.closeModal()}>
              <h3>Deseja Sair?</h3>
              <div className="col" style={{ marginTop: '10%' }}>
                <Button href="javascript:void(0);" onClick={() => this.closeModal()}>Não</Button>
                <Button href="javascript:void(0);" onClick={this.handleSubmit} style={{ float: 'right' }}>Sim</Button>
              </div>
            </Modal>
        </section>  
        );
    }
}

export default Logout;
