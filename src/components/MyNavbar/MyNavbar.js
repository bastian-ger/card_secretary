import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class MyNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this);
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark fixed="top" expand="md">
          <NavbarBrand
            style={{color: '#a53ad7', textShadow: '2px 2px 4px #51b9cc'}}
            id="logo"
            tag={Link}
            to="/"
            >
            Card Game Secretary
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/games">Games</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/bastian-ger/card_secretary">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
}

export default MyNavbar;
