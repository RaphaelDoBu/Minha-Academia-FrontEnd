import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router-dom';

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
  

class CadastroCliente extends Component {
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
    
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            nome: undefined,
            cpf: undefined,
            estado: undefined,
            cidade: undefined,
            bairro: undefined,
            rua: undefined,
            peso: undefined,
            foco: undefined,
            dataNascimento: undefined,
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let self = this;
        let token = localStorage.getItem('DD101_TOKEN');
        let dataToSend = {
                nome: this.state.nome,
                cpf: this.state.cpf,
                estado: this.state.estado,
                cidade: this.state.cidade,
                bairro: this.state.bairro,
                rua: this.state.rua,
                peso: this.state.peso,
                foco: this.state.foco,
                dataNascimento: this.state.dataNascimento
        };
        console.log(JSON.stringify(dataToSend))
        let url = 'http://localhost:4005/cliente';

        fetch(url, {
            method: "POST",
            body: JSON.stringify(dataToSend),
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`
            }
        }).then(response => response.json())
            .then(responseJson => {
                console.log(responseJson.message)
                if (responseJson.message === 'User logged with success') {
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

    handleChange = name => e => {
        this.setState({
            [name]: e.target.value,
        });
    };
    render() {
        const { classes } = this.props;
        this.verificaToken()
        if (this.state.toDashboard === true) {
            return <Redirect to='/login' />
        } 

        return (
            <div className="container">
            <div className="row" style={{ paddingTop: '50px' }}>
                <div className="col"></div>
                <div className="col">
                    <div className="card" style={{ width: '65rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                    <div className="row" style={{ marginLeft: '33%', marginTop:'5%' }}><h2>Dados do(a) Aluno(a)</h2></div>

                        <div className="card-body" style={{marginLeft:'5%'}}>
                            <form  onSubmit={this.handleSubmit} className={classes.container} noValidate autoComplete="off">
                                
                            <TextField
                                id="standard-name"
                                label="Nome do(a) Aluno(a)"
                                style={{ width: '50%' }}
                                className={classes.textField}
                                value={this.state.name}
                                onChange={this.handleChange('nome')}    
                                margin="normal"
                            />
                            <TextField
                                id="standard-uncontrolled"
                                style={{ width: '16%', marginTop:'3.5%' }}
                                onChange={this.handleChange('dataNascimento')} 
                                className={classes.textField}
                                margin="normal"
                                type="date"
                            />
                            <TextField
                                id="standard-uncontrolled"
                                label="CPF"
                                style={{ width: '19%' }}
                                onChange={this.handleChange('cpf')} 
                                className={classes.textField}
                                margin="normal"
                                type="number"
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
                                style={{ width: '38%' }}
                                onChange={this.handleChange('bairro')} 
                                className={classes.textField}
                                margin="normal"
                            />
                            <TextField
                                id="standard-password-input"
                                label="Rua e número"
                                style={{ width: '88%' }}
                                onChange={this.handleChange('rua')} 
                                className={classes.textField}
                                autoComplete="current-password"
                                margin="normal"
                            />
                            
                            <TextField
                                id="standard-password-input"
                                label="Peso"
                                style={{ width: '10%' }}
                                onChange={this.handleChange('peso')} 
                                className={classes.textField}
                                autoComplete="current-password"
                                margin="normal"
                                type="number"
                            />
                            <TextField
                                id="standard-password-input"
                                label="Foco"
                                style={{ width: '76.5%' }}
                                onChange={this.handleChange('foco')} 
                                className={classes.textField}
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                            />
                            <button type="submit" className="btn btn-primary btn-block button" 
                                    style={{ marginLeft:'30%', width: '40%', 'marginTop': '2%' }}>Registrar</button>
                        
                            </form>
                        </div>
                </div>
            </div>
            <div className="col"></div>
        </div>
    </div>
    );
  }
}
CadastroCliente.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(CadastroCliente);
  