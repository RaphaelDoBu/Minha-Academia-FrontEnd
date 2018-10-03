import React, { Component } from 'react';
import { Form, FormGroup, Col, Label, Input, Button } from 'reactstrap';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom'; 
import CadastroAcademia from '../Cadastro-Academia/cadastro-academia'

class Login extends Component {
  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="formHorizontalUsername">
          <Label>Username</Label>{' '}
          <Col sm={10}>
            <Input type="username" name="username" id="username" placeholder="testName" />
          </Col>
        </FormGroup>
      
        <FormGroup controlId="formHorizontalPassword">
          <Label>Password</Label>{' '}  
          <Col sm={10}>
            <Input type="password" name="password" id="examplePassword" placeholder="******" /> 
          </Col>
        </FormGroup>
      
        <FormGroup check>
          <Col smOffset={2} sm={10}>
          <NavLink to="/inscreva-se"><Button>Inscrever-se</Button></NavLink>
          </Col>
       
          <Col smOffset={2} sm={10}>
            <Button type="submit">Logar</Button>
          </Col>
        </FormGroup>
        
        
        <BrowserRouter>
            <div>
              <Switch>
                <Route path="/inscreva-se" component={CadastroAcademia} />
              </Switch>
            </div>
        </BrowserRouter>

      </Form>
      
      
      
    );
  }
}

export default Login;
