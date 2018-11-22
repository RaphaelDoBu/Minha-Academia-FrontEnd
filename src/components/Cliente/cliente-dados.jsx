import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from '../navbar';
import imagemDetalhes from '../../imagens/baseline-more_vert-24px.svg'
import {Button } from 'reactstrap';
import ClienteDetalhes from './clientes-detalhes';
import Modal from 'react-awesome-modal';

class ClienteDados extends Component {

    state = {
        toDashboard: false,
    }

    constructor(props) {
        super(props)
        this.state = {
            clientes: [],
            isOpen: false,
            visible : false,
            detalhesCliente: undefined
        }
    }

    closeModal() {
        this.setState(() => ({
            visible: false
        }))
    }

    openModal(cliente) {
        this.setState({
            visible : true,
            detalhesCliente: cliente
        });
    }
  
    exibirLogout(){
        console.log(this.state.detalhesCliente)
        if (this.state.visible === true && this.state.detalhesCliente !== null) {
            return(
                <section>
                    <Modal visible={this.state.visible} width="400rem" height="400rem" effect="fadeInUp" 
                    onClickAway={() => this.closeModal()}>
                    <h3>Detalhes de {this.state.detalhesCliente.nome}</h3>
                    <div className="col" style={{ marginTop: '10%' }}>
                        <Button href="javascript:void(0);" onClick={() => this.closeModal()}>Fechar</Button>
                        {/* <Button href="javascript:void(0);" onClick={this.handleSubmit} style={{ float: 'right' }}>Sim</Button> */}
                    </div>
                    </Modal>
                </section> 
            )
        // return <ClienteDetalhes></ClienteDetalhes>
      }
    }

    componentDidMount() {
        let self = this;
        let token = localStorage.getItem('DD101_TOKEN');
        fetch('http://localhost:4005/cliente', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`
            },
            credentials: 'same-origin'
        }).then(function(response) {
            if (response.status >= 400) {
                this.setState(() => ({
                    toDashboard: true}))
            }
            return response.json();
        }).then(function(data) {
            self.setState({clientes: [...self.state.clientes, data]});
            console.dir(self.state.clientes)
        }).catch(err => {
             console.log('caught it!',err);
        })
    }

    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/login' />
        }

        return (
        <div><NavBar></NavBar>
        <div className="container">
            <div className="panel panel-default p40 uth-panel">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Foco</th>
                            <th>Peso</th>
                            <th>Detalhes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(this.state.clientes[0] !== undefined && this.error === undefined) ? (
                            this.state.clientes[0].map((cliente) => (
                                <tr key={cliente.id}>
                                <td>{cliente.nome}</td>
                                <td>{cliente.foco}</td>
                                <td>{cliente.peso} Kg</td>
                                <td><Button onClick={() => this.openModal(cliente)}><img src={imagemDetalhes} 
                                        alt="Atleta"/></Button></td>
                                </tr>
                                ))
                            ) : this.state.error
                            }
                    </tbody>
                </table>
            </div>
        </div>
        {this.exibirLogout()}
        </div>
        );
}
}

export default ClienteDados;
