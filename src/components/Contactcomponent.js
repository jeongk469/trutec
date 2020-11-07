import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem,
     Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);



class Contact extends Component { 

    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
   }



    handleSubmit(values) {


      console.log("test");
      //this.props.postFeedback(values.firstname, values.lastname, values.telnum,values.email, values.agree,values.contactType,values.message);
  
    }

    render() {


      return(
    
        
        <React.Fragment>
    
            <div class = "jumbotron-sm">
              <div class="container h-100">
                  <div class="row h-100 align-self-center text-center d-flex align-items-center">
                      <div class="col-lg-12">
                          <h1 class="text-white font-weight-bold">Contact Us</h1>
                          
                      </div>
                  </div>
              </div>
            </div>

            <section class="section-title" id="contact">
            <div class="container">
                <div class="row justify-content-start">
                    <div class="col-lg-8">
                        <h2 class="mt-0 d-flex justify-content-start contact-adjust">New project inquiry</h2>
                        <hr class="divider2 my-4" />
                        <p class = "contact-elem">
                        Get in touch with Trutec Engineering by phone, email or 
                        filling out our online form below to request an estimate or for general questions 
                        about services! We look forward to serving you!
                        </p>
                    </div>
                </div>
            </div>
            </section>


            <div className="container mb-5">
                <div className="row justify-content-start">

                    
                    <div className="col-12 col-md-9">
                    <LocalForm  className = "form-border"onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group mt-5">
                                <Label className = "offset-md-1" htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={8}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label className = "offset-md-1" htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={8}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label className = "offset-md-1" htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={8}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 numbers',
                                            maxLength: 'Must be 15 numbers or less',
                                            isNumber: 'Must be a number'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label  className = "offset-md-1" htmlFor="email" md={2}>Email</Label>
                                <Col md={8}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                                </Col>
                            </Row>
                            
                            <Row className="form-group mb-4  ">
                                <Label className = "offset-md-1" htmlFor="message" md={2}>Message</Label>
                                <Col md={8}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group justify-content-center">
                                
                                    <Button className = "btn--blue" type="submit" color="primary">
                                    Submit
                                    </Button>
                               
                            </Row>
                        </LocalForm>
                    </div>
               </div>
               </div>



        </React.Fragment>
    
        
    
    
    
      );
    }
  }
  
  export default Contact;