import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import Logout from './Login/logout';
import { Redirect } from 'react-router-dom';
import '../css/Navbar.css'

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
      return <Logout  closeModal={this.closeModal.bind(this)}></Logout>
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

  closeModal() {
    this.setState(() => ({
        visible: false
    }))
  }

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to='/login' />
    }
    return (
      <div>
        <Navbar light expand="md" style={{backgroundColor:'black'}}>
          <NavbarBrand href="/academia">
            <div className="zoom-nav"><h3 className="principal">Minha Academia</h3></div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/academia" >
                  <div className="zoom-nav"><h6 className="navs">Inicio  </h6></div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/alunos">
                  <div className="zoom-nav"><h6 className="navs">  Alunos  </h6></div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/matricula">
                  <div className="zoom-nav"><h6 className="navs">  Cadastrar Alunos  </h6></div>
                </NavLink>
              </NavItem>
              
              <UncontrolledDropdown nav inNavbar style={{color:'white'}}>
                <div className="zoom-nav">
                <DropdownToggle nav caret style={{color:'white'}}>
                </DropdownToggle>
                </div>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/academia-editar" style={{color:'black'}}>Editar Cadastro</NavLink>
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
