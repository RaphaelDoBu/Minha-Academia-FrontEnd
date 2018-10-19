import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
     
    },
    
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
      },
  });
  

class CadastroAcademia extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            nome: undefined,
            cnpj: undefined,
            endereco: undefined,
            estado: undefined,
            cidade: undefined,
            bairro: undefined,
            rua: undefined,
            username: undefined,
            password: undefined,
    
        }
    }
    // state = {
    //     nome: '',
    //     cnpj: '',
    //     estado: '',
    //     cidade: '',
    //     Bairro: '',
    //     rua: '',
    //     username: '',
    //     password: '',
    // };

    handleSubmit(e) {
        e.preventDefault();
        let dataToSend = {
            
                nome: this.state.nome,
                endereco: this.state.endereco,
                cnpj: this.state.cnpj,
                estado: this.state.estado,
                cidade: this.state.cidade,
                bairro: this.state.bairro,
                rua: this.state.rua,
                username: this.state.username,
                password: this.state.password
        
        };
        console.log(JSON.stringify(dataToSend))
        let url = 'http://localhost:4005/academia';

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
                    this.props.history.push("/login");
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

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    render() {
    const { classes } = this.props;

    return (
        <div className="container">
            <div className="row" style={{ paddingTop: '50px' }}>
                <div className="col"></div>
                <form  onSubmit={this.handleSubmit} className={classes.container} noValidate autoComplete="off">
                    
                <TextField
                    id="standard-nae"
                    label="Nome"
                    style={{ width: '50%' }}
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('nome')}    
                    margin="normal"
                />
                <TextField
                    id="standard-uncontrolled"
                    label="CNPJ"
                    style={{ width: '20%' }}
                    onChange={this.handleChange('cnpj')} 
                    className={classes.textField}
                    margin="normal"
                    type="number"
                />
                <TextField
                    id="standard-required"
                    label="Endereco"
                    style={{ width: '22%' }}
                    onChange={this.handleChange('endereco')} 
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-required"
                    label="Estado"
                    style={{ width: '22%' }}
                    onChange={this.handleChange('estado')} 
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-error"
                    label="Cidade"
                    style={{ width: '25%' }}
                    onChange={this.handleChange('cidade')} 
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-disabled"
                    label="Bairro"
                    style={{ width: '35%' }}
                    onChange={this.handleChange('bairro')} 
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-password-input"
                    label="Rua"
                    style={{ width: '32%' }}
                    onChange={this.handleChange('rua')} 
                    className={classes.textField}
                    autoComplete="current-password"
                    margin="normal"
                />
                <div className="container" style={{ textAlign: 'center' }}>
                    <TextField
                        id="standard-password-input"
                        label="Username"
                        style={{ width: '20%' }}
                        onChange={this.handleChange('username')} 
                        className={classes.textField}
                        autoComplete="current-password"
                        margin="normal"
                    />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        style={{ width: '20%' }}
                        onChange={this.handleChange('password')} 
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Registrar</button>

            </form>
            <div className="col"></div>
        </div>
    </div>
    );
  }
}
CadastroAcademia.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(CadastroAcademia);
  