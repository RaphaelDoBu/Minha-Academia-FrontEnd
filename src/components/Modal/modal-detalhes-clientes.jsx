import React, { Component } from 'react';
import {Button } from 'reactstrap';
import Modal from 'react-awesome-modal';

import '../Cliente/cliente-dados.css'

class ModalDetalhesCliente extends Component {

    constructor(props) {
        super(props)
        this.state = {
            detalhesCliente: this.props.detalhesCliente,
            visibleDetalhes: this.props.visibleDetalhes
        }
    }

    render() {
        return (
            <section>
                <Modal visible={this.state.visibleDetalhes} width="40%" height="50%" effect="fadeInUp" 
                    onClickAway={() => this.props.closeModal()}>
                    <div className="col">
                        <h3 style={{textAlign:"center"}}>Detalhes de {this.state.detalhesCliente.nome}</h3>
                    </div>
                    <div className="container">
                        <h7>Data de Nascimento: {this.state.detalhesCliente.dataNascimento}</h7>
                        <br/>
                        <h7>Estado: {this.state.detalhesCliente.estado}</h7>
                        <br/>
                        <h7>Cidade: {this.state.detalhesCliente.cidade}</h7>
                        <br/>
                        <h7>Bairro: {this.state.detalhesCliente.bairro}</h7>
                        <br/>
                        <h7>Rua e Número: {this.state.detalhesCliente.rua}</h7>
                        <br/>
                        <h7>Peso: {this.state.detalhesCliente.peso} Kg</h7>
                        <br/>
                        <h7>Foco: {this.state.detalhesCliente.foco}</h7>
                        <br/>
                        <h7>Treinos: ----</h7>
                    </div>
                    <div className="col" style={{ marginTop: '10%', textAlign:"center" }}>
                        <Button onClick={() => this.props.closeModal()}>Fechar</Button>
                    </div>
                </Modal>
            </section> 
        );
    }
}

export default ModalDetalhesCliente;
