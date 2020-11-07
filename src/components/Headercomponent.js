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
            isModalOpen: false,
            scrolled: false
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

    componentDidMount() {

        window.addEventListener('scroll', () => {
            
            const isTop = window.scrollY < 100;

            if(isTop !== true) {

                this.setState({scrolled: true});
                

            } else{

                this.setState({scrolled: false});
                
            }



        });
    }

    componentWillUnmount() {

        window.removeEventListener('scroll');

    }



    render() {
        return(
            <React.Fragment>

                <Navbar className={this.state.scrolled ? 'navbar-light' : 'navbar-dark'} expand='lg' fixed='top'>
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src={this.state.scrolled ? 'assets/images/trutec2.png':'assets/images/trutec1.png'} height="85" width="212.5" alt='Trutec' /></NavbarBrand>
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
                                    <NavLink className="nav-link" to='/contact'>ContactUS</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'>Testimonials</NavLink>
                                </NavItem>
                                </Nav>     
                        </Collapse>

                    </div>


                </Navbar>

   

            </React.Fragment>
        );
    }
}


export default Header;