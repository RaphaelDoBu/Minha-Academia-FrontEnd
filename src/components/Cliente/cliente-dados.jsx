import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from '../navbar';
import imagemDetalhes from '../../imagens/baseline-more_vert-24px.svg'
import imagemEditar from '../../imagens/baseline-edit-24px.svg'
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

    openModalEditar(cliente) {
        this.setState({
            visible : true,
            detalhesCliente: cliente
        });
    }

    openModalDetalhes(cliente) {
        this.setState({
            visible : true,
            detalhesCliente: cliente
        });
    }
  
    exibirLogout(){
        if (this.state.visible === true && this.state.detalhesCliente !== null) {
            return(
                <section>
                    <Modal visible={this.state.visible} width="40%" height="50%" effect="fadeInUp" 
                        onClickAway={() => this.closeModal()}>
                        <div className="col">
                            <h3 style={{textAlign:"center"}}>Detalhes de 
                                        {this.state.detalhesCliente.nome}</h3>
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
                            <th>Editar</th>
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
                                <td><a onClick={() => this.openModalEditar(cliente)}><img src={imagemEditar} 
                                        alt="Editar"/></a></td>
                                <td><a onClick={() => this.openModalDetalhes(cliente)}><img src={imagemDetalhes} 
                                        alt="Detalhes"/></a></td>
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
