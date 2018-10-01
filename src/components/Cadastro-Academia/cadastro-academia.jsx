import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CadastroAcademia extends Component {
  render() {
    return (
        <Form horizontal>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                    <Label for="nomeAcademia">Nome da Academia</Label>
                    <Input type="nome" name="nome" id="nome" placeholder="Academia ...." />
                    </FormGroup>
                </Col>
            </Row>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                    <Label for="endereco">Endereço</Label>
                    <Input type="text" name="endereco" id="endereco" placeholder="Rua ..."/>
                    </FormGroup>
                </Col>
            </Row>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                    <Label for="cidade">Cidade</Label>
                    <Input type="text" name="cidade" id="cidade"/>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                    <Label for="estado">Estado</Label>
                    <Input type="text" name="estado" id="estado"/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" name="username" id="username"/>
                    </FormGroup>  
                </Col>
                <Col md={4}>
                    <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="*****" />
                    </FormGroup>
                </Col>
            </Row>
            <Button>Sign in</Button>
        </Form>
  
    );
  }
}

export default CadastroAcademia;
