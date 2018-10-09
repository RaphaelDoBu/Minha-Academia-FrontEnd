import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';

class Logout extends Component {

    handleSubmit(e) {
        e.preventDefault();

        let token = localStorage.removeItem("DD101_TOKEN");
        console.log(token)
        localStorage.clear();
        // if (!token) {

        //     this.setState({
        //         error: 'No token defined. Please Login.'
        //     })
        //     return
        // }
    }

    render() {
        return(
        <div>
            <Button onClick={this.handleSubmit}>Logout</Button>
        </div>
        );
    }
}

export default Logout;
