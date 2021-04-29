import React, {
  Component,
  useRef,
  useState,
  useEffect,
  createRef,
} from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.togglefalse = this.togglefalse.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.reff = createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
      scrolled: false,
    };
  }
  togglefalse() {
    this.setState({
      isNavOpen: false,
    });
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event) {
    this.toggleModal();
    alert(
      "Username: " +
        this.username.value +
        " Password: " +
        this.password.value +
        " Remember: " +
        this.remember.checked
    );
    event.preventDefault();
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;

      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });

    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.reff.current && !this.reff.current.contains(event.target)) {
      this.setState({
        isNavOpen: false,
      });
    }
  }

  render() {
    return (
      <div ref={this.reff}>
        <Navbar
          className={this.state.scrolled ? "navbar-light" : "navbar-dark"}
          expand="lg"
          fixed="top"
        >
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src={
                  this.state.scrolled
                    ? "assets/images/trutec2.png"
                    : "assets/images/trutec1.png"
                }
                height="85"
                width="212.5"
                alt="Trutec"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink
                    onClick={this.togglefalse}
                    className="nav-link"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    onClick={this.togglefalse}
                    className="nav-link"
                    to="/about"
                  >
                    About
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    onClick={this.togglefalse}
                    className="nav-link"
                    to="/project"
                  >
                    Projects
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    onClick={this.togglefalse}
                    className="nav-link"
                    to="/contact"
                  >
                    ContactUS
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    onClick={this.togglefalse}
                    className="nav-link"
                    to="/testimonial"
                  >
                    Clients
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;
