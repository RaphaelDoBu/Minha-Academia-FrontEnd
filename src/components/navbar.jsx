import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
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
                    <NavLink href="/logout">Sair</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        
      </div>
    );
  }
}
