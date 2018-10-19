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
    state = {
        nome: '',
        cnpj: '',
        estado: '',
        cidade: '',
        Bairro: '',
        rua: '',
        username: '',
        password: '',
    };
    
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
                <form className={classes.container} noValidate autoComplete="off">
                    
                <TextField
                    id="standard-nae"
                    label="Nome"
                    style={{ width: '50%' }}
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}    
                    margin="normal"
                />
                <TextField
                    id="standard-uncontrolled"
                    label="CNPJ"
                    style={{ width: '20%' }}
                    className={classes.textField}
                    margin="normal"
                    type="number"
                />
              
                <TextField
                    id="standard-required"
                    label="Estado"
                    style={{ width: '22%' }}
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-error"
                    label="Cidade"
                    style={{ width: '25%' }}
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-disabled"
                    label="Bairro"
                    style={{ width: '35%' }}
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-password-input"
                    label="Rua"
                    style={{ width: '32%' }}
                    className={classes.textField}
                    autoComplete="current-password"
                    margin="normal"
                />
                <div className="container" style={{ textAlign: 'center' }}>
                    <TextField
                        id="standard-password-input"
                        label="Username"
                        style={{ width: '20%' }}
                        className={classes.textField}
                        autoComplete="current-password"
                        margin="normal"
                    />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        style={{ width: '20%' }}
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                    />
                </div>
            
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
  