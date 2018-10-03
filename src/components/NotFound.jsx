import React, { Component } from 'react';
import { Col, Button } from 'reactstrap';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom'; 
import Login from '../components/Login/login'

class NotFound extends Component {
  render() {
    return (
        <div>
          <Col smOffset={2} sm={10}>
          <h2>Page not found</h2>
          <NavLink to="/login"><Button>Inscrever-se</Button></NavLink>
          </Col>
        
        
            <BrowserRouter>
                <div>
                <Switch>
                    <Route path="/login" component={Login} />
                </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
  }
}

export default NotFound;
