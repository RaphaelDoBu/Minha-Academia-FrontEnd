import React, { Component } from 'react';
import { Button} from 'reactstrap';
import { Redirect} from 'react-router-dom';
import Modal from 'react-awesome-modal';
import createHistory from 'history/createBrowserHistory'

const history = createHistory();

class ClienteDetalhes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : true
        }
    }

    state = {
        toDashboard: false,
    }
    
    closeModal() {
        this.setState(() => ({
            visible: false
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();

        localStorage.removeItem("DD101_TOKEN");
        this.setState(() => ({
            toDashboard: true}))
        localStorage.clear();
    }

    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/login' />
        }
        return (
        <section>
            <Modal visible={this.state.visible} width="300" height="150" effect="fadeInUp" 
              onClickAway={() => this.closeModal()}>
              <h3>Deseja Sair?</h3>
              <div className="col" style={{ marginTop: '10%' }}>
                <Button href="javascript:void(0);" onClick={() => this.closeModal()}>Não</Button>
                <Button href="javascript:void(0);" onClick={this.handleSubmit} style={{ float: 'right' }}>Sim</Button>
              </div>
            </Modal>
        </section>  
        );
    }
}

export default ClienteDetalhes;