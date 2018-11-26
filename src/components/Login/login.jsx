import React, { Component } from 'react';
import CadastroAcademia from '../Cadastro-Academia/cadastro-academia';
import { BrowserRouter, NavLink, Switch, Route} from 'react-router-dom';
import '../Login/login.css'
import { Button} from 'reactstrap';

class Login extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

        this.state = {
            username: undefined,
            password: undefined,
            signUp: {
                success: undefined,
                message: undefined
            },
            
            logged: false,
            users: undefined,
            error: undefined
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let dataToSend = {
            userData: {
                username: this.state.username,
                password: this.state.password
            }
        };
        console.log(JSON.stringify(dataToSend))
        let url = 'http://localhost:4005/auth/login';

        fetch(url, {
            method: "POST",
            body: JSON.stringify(dataToSend),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
            .then(responseJson => {
                console.log(responseJson.message)
                if (responseJson.message === 'User logged with success') {
                    localStorage.setItem('DD101_TOKEN', responseJson.token);
                    this.props.history.push("/academia");
                    this.setState({
                        logged: true,
                        error: undefined
                    })
                }
                if (responseJson.message !== 'User logged with success') {
                    console.log("Senha errada")
                }
            }).catch(err => this.setState({ error: err }));

            e.target.reset()
    }

    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        });
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row div-form">
                    <div className="col"></div>
                    <div className="col">
                        <div className="card form">
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Username</label>
                                        <input type="text" onChange={this.handleUsernameChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" />                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" onChange={this.handlePasswordChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input type="checkbox" className="form-check-input" />
                                            <span>Lembrar-me</span>
                                        </label>
                                    </div>
                                    <Button type="submit" className="btn btn-primary btn-block">Login</Button>
                                    <small id="emailHelp" className="form-text text-muted"> Caso não tenha cadastro, 
                                        <NavLink to="/inscreva-se">Inscreva-se</NavLink>
                                    </small>
                                </form>
                            <BrowserRouter>
                                <div>
                                <Switch>
                                    <Route path="/inscreva-se" component={CadastroAcademia} />
                                </Switch>
                                </div>
                            </BrowserRouter>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;