import React, { Component } from 'react';
import { Link, NavLink as ReactRouterNavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as authActions from '../../store/actions/auth';
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
    this.closeNavbar = this.closeNavbar.bind(this);
  }

  render() {
    let signInSignOut = (
      <DropdownItem
        onClick={this.closeNavbar}
        tag={ReactRouterNavLink}
        to="/auth"
        activeclassname="active"
        exact
      >
        SignUp/SignIn
      </DropdownItem>
    );
    if (this.props.isLoggedIn) {
      signInSignOut = (
        <DropdownItem
          onClick={this.logoutHandler}
        >
          Logout
        </DropdownItem>
      );
    }
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
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Account
                </DropdownToggle>
                <DropdownMenu right>
                  { signInSignOut }
                  <DropdownItem divider />
                  <DropdownItem
                    onClick={this.closeNavbar}
                    tag={ReactRouterNavLink}
                    to="/account"
                    activeclassname="active"
                    exact
                  >
                    Account
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  closeNavbar = () => {
    this.setState({
      isOpen: false
    });
  }
  logoutHandler = () => {
    this.props.onLogout();
    this.closeNavbar();
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(authActions.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyNavbar);
