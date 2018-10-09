import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/login'
import CadastroAcademia from './components/Cadastro-Academia/cadastro-academia'
import Academia from './components/Academia/academia'
import AcademiaEditar from './components/Academia/academia-editar'
import NotFound from './components/NotFound'

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
                  <Route path="/academia-editar" component={AcademiaEditar} />
                  <Route component={NotFound} />
                </Switch>
              </div>
      </BrowserRouter>
    );
  }
}

export default App;
