import React, { Component } from 'react';
import { Button} from 'reactstrap';
import { BrowserRouter, NavLink, Switch, Route, Redirect } from 'react-router-dom';
import AcademiaEditar from '../Academia/academia-dados'
import NavBar from '../navbar';
import imagem from '../../imagens/outra.png'
class Academia extends Component {

    state = {
        toDashboard: false,
    }

    verificaToken(){
        let token = localStorage.getItem('DD101_TOKEN');
        if(token === null){
            this.setState(() => ({
                toDashboard: true}))
        }
    }

    render() {
        this.verificaToken()
        if (this.state.toDashboard) {
            return <Redirect to='/login' />
        } 

        return (
        <div>
            <NavBar></NavBar>
            <div className="container">
                <div className="panel panel-default p50 uth-panel" style={{textAlign:"center"}}>
                    <img src={imagem} alt="Alguma coisa"/>
                </div>
            </div>
        </div>
        );
    }
}

export default Academia;
