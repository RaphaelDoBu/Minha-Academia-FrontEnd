import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import Login from './components/Login/login'
import CadastroAcademia from './components/Cadastro-Academia/cadastro-academia'

ReactDOM.render(<CadastroAcademia />, document.getElementById('root'));
registerServiceWorker();
