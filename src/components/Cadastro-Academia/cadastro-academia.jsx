import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
            estado: undefined,
            cidade: undefined,
            bairro: undefined,
            rua: undefined,
            username: undefined,
            password: undefined,
    
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let dataToSend = {
            
                nome: this.state.nome,
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
        }).then(response => response.status)
            .then(status => {
                console.log(status)
                if (status === 200) {
                    this.setState({
                        logged: true,
                        error: undefined
                    })
                    this.props.history.push("/login");
                }
                if (status >= 400) {
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
            <div className="col">
                <div className="card" style={{ width: '65rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                <div className="row" style={{ marginLeft: '33%', marginTop:'5%' }}><h2>Dados da Academia</h2></div>
                <div className="card-body" style={{marginLeft:'3%'}}>
                <form  onSubmit={this.handleSubmit} className={classes.container} noValidate autoComplete="off">
                    
                <TextField
                    id="standard-name"
                    label="Nome da Academia"
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
                    label="Rua e número"
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
                    <button type="submit" className="btn btn-primary btn-block button" 
                            style={{ marginLeft:'30%', width: '40%', 'marginTop': '2%' }}>Registrar</button>
                </div>
               

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
CadastroAcademia.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(CadastroAcademia);
  