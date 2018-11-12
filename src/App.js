import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/login'
import Logout from './components/Login/logout'
import CadastroAcademia from './components/Cadastro-Academia/cadastro-academia'
import Academia from './components/Academia/academia'
import CadastroCliente from './components/Cadastro-Cliente/cadastro-cliente'
import AcademiaEditar from './components/Academia/academia-dados'
import NotFound from './components/NotFound'
import NavBar from './components/navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
              <div>
                <Switch>
                  <Route path="/" component={Login} exact />
                  <Route path="/login" component={Login} exact />
                  <Route path="/inscreva-se" component={CadastroAcademia} />
                  <Route path="/academia" component={Academia} />
                  <Route path="/logout" component={Logout} />
                  <Route path="/matricula" component={CadastroCliente} />
                  <Route path="/academia-editar" component={AcademiaEditar} />
                  <Route path="/nav" component={NavBar}/>

                  <Route component={NotFound} />
                </Switch>
              </div>
      </BrowserRouter>
    );
  }
}

export default App;
