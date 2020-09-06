import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';



class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
      
      handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
        
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }
    render() {
        return(
            <React.Fragment>

                <Navbar dark expand='lg' fixed='top'>
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/trutec1.png' height="85" width="212.5" alt='Trutec' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav className="ml-auto" navbar>

                                <NavItem>
                                    <NavLink className="nav-link" to='/home'>Home</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to='/aboutus'>About</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to='/projects'>Projects</NavLink>
                                </NavItem>
                                
                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'>ContactUS</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'>Testimonials</NavLink>
                                </NavItem>
                                </Nav>     
                        </Collapse>

                    </div>


                </Navbar>

                <Jumbotron>
                        <div class="container h-100">
                            <div class="row h-100 align-items-start justify-content-start text-left">
                                <div class="col-lg-10 align-self-end">
                                    <h1 class="text-uppercase text-white font-weight-bold">Liscensed General Contractor in Orange County</h1>
                                   
                                </div>
                                <div class="col-lg-8 align-self-baseline">
                                    <p class="text-white-75 font-weight-light mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
                                    <a class="btn btn-primary btn-xl" href="#about">Find Out More</a>
                                </div>
                            </div>
                        </div>
                </Jumbotron>

                <section class="page-section" id="contact">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8 text-center">
                                <h2 class="mt-0">Let's Get In Touch!</h2>
                                <hr class="divider my-4" />
                                <p class="text-muted mb-5">Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
                            </div>
                        </div>
                    </div>
                </section>





    

            </React.Fragment>
        );
    }
}


export default Header;