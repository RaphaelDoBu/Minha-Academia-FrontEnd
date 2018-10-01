import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CadastroCliente extends Component {
  render() {
    return (
        <Form horizontal>
            <h4>Dados Pessoal</h4>
            <Row form>
                <Col md={7}>
                    <FormGroup>
                    <Label for="nomeCliente">Nome do(a) Cliente</Label>
                    <Input type="nome" name="nome" id="nome" placeholder="" />
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                    <Label for="cpf">CPF</Label>
                    <Input type="text" name="cpf" id="cpf" placeholder="000.000.000-00"/>
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                    <Label for="datanascimento">Data de Nascimento</Label>
                    <Input type="text" name="datanascimento" id="datanascimento" placeholder="dd/mm/aaaa"/>
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
            <h4>Dados para Treino</h4>
            <Row>
                
                    <Col md={6}>
                        <FormGroup>
                        <Label for="foco">Foco</Label>
                        <Input type="text" name="foco" id="foco"/>
                        </FormGroup>  
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                        <Label for="password">Peso</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Kg" />
                        </FormGroup>
                    </Col>
            </Row>
            <Button>Sign in</Button>
        </Form>
  
    );
  }
}

export default CadastroCliente;
