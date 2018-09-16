import React, { Component } from 'react';
import { Link, NavLink as ReactRouterNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

class MyNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
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
                <NavLink
                  onClick={this.closeNavbar}
                  tag={ReactRouterNavLink}
                  to="/games"
                  activeclassname="active"
                  exact
                  >
                  Games
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={this.closeNavbar}
                  tag={ReactRouterNavLink}
                  to="/about"
                  activeclassname="active"
                  exact
                  >
                  About
                </NavLink>
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
  closeNavbar() {
    this.setState({
      isOpen: false
    });
  }
}

export default MyNavbar;
