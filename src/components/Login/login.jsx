import React, { Component } from 'react';
import { Form, FormGroup, Col, Label, Input, Button } from 'reactstrap';


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
          <Input type="checkbox" name="check" id="exampleCheck"/>
          <Label for="exampleCheck" check>Manter Conectado</Label>
      </FormGroup>
    
      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button type="submit">Logar</Button>
        </Col>
      </FormGroup>
      </Form>  
  
    );
  }
}

export default Login;
