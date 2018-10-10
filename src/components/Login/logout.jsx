import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { BrowserRouter, NavLink, Switch, Route, Redirect} from 'react-router-dom';
import {withRouter} from "react-router-dom";

class Logout extends Component {
    state = {
        toDashboard: false,
    }
    handleSubmit = (e) => {
        e.preventDefault();

        let token = localStorage.removeItem("DD101_TOKEN");
        this.setState(() => ({
            toDashboard: true}))
        localStorage.clear();
    }

    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/login' />
          }
        return(
        <div>
            <Button onClick={this.handleSubmit}>Logout</Button>
        </div>
        );
    }
}

export default Logout;
