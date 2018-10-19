import React, { Component } from 'react';
import CadastroAcademia from '../Cadastro-Academia/cadastro-academia';
import { BrowserRouter, NavLink, Switch, Route, Redirect } from 'react-router-dom';

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

    static displayName = 'ui-LoginForm'


    /*
    Register Form area
    */
    handleSignUpSubmit(e) {
        e.preventDefault();
        let dataToSend = {
            userData: {
                username: this.refs.username.value,
                password: this.refs.password.value
            }
        };

        let url = 'http://localhost:3005/users/register';

        fetch(url, {
            method: "POST",
            body: JSON.stringify(dataToSend),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
            .then(responseJson => {
                console.log(responseJson)
                if (responseJson.success) {
                    this.setState({
                        signUp: {
                            success: true,
                            message: responseJson.message
                        }
                    });
                } else {
                    this.setState({
                        signUp: {
                            success: false,
                            message: responseJson.message
                        }
                    });
                }
            }).catch(err => console.log('Error ', err));

        this.refs.username.value = '';
        this.refs.password.value = '';

    }

    /*
    Login Form area
    */
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
                {/* Begin Login Form */}
                <div className="row" style={{ paddingTop: '50px' }}>
                    <div className="col">
                    </div>
                    <div className="col">
                        <div className="card" style={{ width: '20rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Username address</label>
                                        <input type="text" onChange={this.handleUsernameChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your usernma with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" onChange={this.handlePasswordChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input type="checkbox" className="form-check-input" />
                                            <span>Remember me</span>
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                                    <small id="emailHelp" className="form-text text-muted">If you are not registered. Plese
                                     
                                    <NavLink to="/inscreva-se"><a>Signup</a></NavLink>
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
                {/* End Login Form */}
            </div>
        );
    }
}
export default Login;