import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from '../navbar';
import {Button } from 'reactstrap';
import Modal from 'react-awesome-modal';
import imagemDetalhes from '../../imagens/baseline-more_vert-24px.svg'
import imagemEditar from '../../imagens/baseline-edit-24px.svg'
import imagemPagamento from '../../imagens/baseline-check-24px.svg'
import '../Cliente/cliente-dados.css'

class ClienteDados extends Component {

    state = {
        toDashboard: false,
    }

    constructor(props) {
        super(props)
        this.state = {
            clientes: [],
            isOpen: false,
            visibleDetalhes : false,
            detalhesCliente: undefined
        }
    }

    closeModal() {
        this.setState(() => ({
            visibleDetalhes: false
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
            visibleDetalhes : true,
            detalhesCliente: cliente
        });
    }
  
    exibirLogout(){
        if (this.state.visibleDetalhes === true && this.state.detalhesCliente !== null) {
            return(
                <section>
                    <Modal visible={this.state.visibleDetalhes} width="40%" height="50%" effect="fadeInUp" 
                        onClickAway={() => this.closeModal()}>
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
                            <Button onClick={() => this.closeModal()}>Fechar</Button>
                        </div>
                    </Modal>
                </section> 
            )
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
            <div className="col" style={{marginTop: "2%", marginBottom: "3%"}}>
                <h2 style={{textAlign:"center"}}>Clientes da Academia</h2>
            </div>
            <div className="panel panel-default p40 uth-panel">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Peso</th>
                            <th>Editar</th>
                            <th>Detalhes</th>
                            <th>Pagamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(this.state.clientes[0] !== undefined && this.error === undefined) ? (
                            this.state.clientes[0].map((cliente) => (
                                <tr key={cliente.id}>
                                <td>{cliente.nome}</td>
                                <td>{cliente.peso} Kg</td>
                                <td><a onClick={() => this.openModalEditar(cliente)}>
                                    <div className="zoom-img"><img src={imagemEditar} 
                                        alt="Editar"/></div></a></td>
                                <td><a onClick={() => this.openModalDetalhes(cliente)}>
                                    <div className="zoom-img"><img src={imagemDetalhes} 
                                        alt="Detalhes"/></div></a></td>
                                <td><a onClick={() => this.openModalDetalhes(cliente)}>
                                    <div className="zoom-img"><img src={imagemPagamento} 
                                        alt="Pagamento"/></div></a></td>
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
