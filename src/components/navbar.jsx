import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import Logout from './Login/logout';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Modal from 'react-awesome-modal';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      visible : false
    };
  }
  
  state = {
      toDashboard: false,
  }

  openModal() {
      this.setState({
          visible : true
      });
  }

  exibirLogout(){
    console.log(this.state.visible)

    if (this.state.visible === true) {
      return <Logout></Logout>
    }
  }

  handleSubmit = (e) => {
      e.preventDefault();
      localStorage.removeItem("DD101_TOKEN");
      this.setState(() => ({
          toDashboard: true}))
      localStorage.clear();
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to='/login' />
    }
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/academia">Minha Academia</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/academia">Inicio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/matricula">Alunos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/matricula">Cadastrar Alunos</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Itens
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Editar Cadastro
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Button type="button" onClick={() => this.openModal()}>Sair</Button>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        {this.exibirLogout()}
      </div>
    );
  }
}
