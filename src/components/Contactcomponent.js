import React, { Component } from "react";
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
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Row, Col } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleform(key, value) {
    var element = document.createElement("input");
    element.name = key;
    element.value = value;
    element.setAttribute("type", "hiddent");

    return element;
  }

  handleSubmit(values) {
    var form = document.createElement("form");
    form.method = "POST";
    form.action =
      "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8";

    var elementOID = document.createElement("input");
    elementOID.name = "oid";
    elementOID.value = "00D5e000000KUFe";
    elementOID.setAttribute("type", "hidden");
    form.appendChild(elementOID);

    var elementRetURL = document.createElement("input");
    elementRetURL.name = "retURL";
    elementRetURL.value = "https://trutec469.web.app/contact";
    elementRetURL.setAttribute("type", "hidden");
    form.appendChild(elementRetURL);

    for (var key in values) {
      form.appendChild(this.handleform(key, values[key]));
    }

    document.body.appendChild(form);
    form.submit();

    alert("thank you you will be contacted soon~");

    // open the request with the verb and the url

    // xhr.open('POST', 'https://example.com')
    // fetch(
    //   "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&oid=00D5e000000KUFe&" +
    //     parameter
    // )
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log("from success*****");
    //     console.log(json);
    //   })
    //   .catch((error) => {
    //     console.log("from catch******");
    //     console.error(error);
    //   });
    //this.props.postFeedback(values.firstname, values.lastname, values.telnum,values.email, values.agree,values.contactType,values.message);
  }

  render() {
    return (
      <React.Fragment>
        <div class="jumbotron-sm">
          <div class="container h-100">
            <div class="row h-100 align-self-center text-center d-flex align-items-center">
              <div class="col-lg-12">
                <h1 class="text-white">Contact Us</h1>
              </div>
            </div>
          </div>
        </div>

        <section class="section-title services" id="contact">
          <div class="container">
            <div class="row justify-content-start">
              <div class="col-lg-8">
                <h2 class="mt-0 d-flex justify-content-start contact-adjust">
                  New project inquiry
                </h2>
                <hr class="divider2 my-4" />
                <p class="contact-elem">
                  Get in touch with Trutec Engineering by phone, email or
                  filling out our online form below to request an estimate or
                  for general questions about services! We look forward to
                  serving you!
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="container mb-5">
          <div className="row justify-content-start">
            <div className="col-12 col-md-9">
              <LocalForm
                className="form-border"
                // action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
                // method="POST"
                onSubmit={(values) => this.handleSubmit(values)}
              >
                {/* <input type="hidden" name="oid" value="00D5e000000KUFe" />
                <input
                  type="hidden"
                  name="retURL"
                  value="https://trutec469.web.app"
                /> */}
                {/* <LocalForm  className = "form-border"onSubmit={(values) => this.handleSubmit(values)}></LocalForm> */}
                <Row className="form-group ml-2 mr-2 mt-5">
                  <Label className="offset-md-1" htmlFor="first_name" md={2}>
                    First Name
                  </Label>
                  <Col md={8}>
                    <Control.text
                      model=".first_name"
                      id="first_name"
                      name="first_name"
                      placeholder="First Name"
                      className="form-control"
                      validators={{
                        required,
                        // minLength: minLength(3),
                        // maxLength: maxLength(15),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".first_name"
                      show="touched"
                      messages={{
                        required: "Required",
                        // minLength: "Must be greater than 2 characters",
                        // maxLength: "Must be 15 characters or less",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group ml-2 mr-2">
                  <Label className="offset-md-1" htmlFor="last_name" md={2}>
                    Last Name
                  </Label>
                  <Col md={8}>
                    <Control.text
                      model=".last_name"
                      id="last_name"
                      name="last_name"
                      placeholder="Last Name"
                      className="form-control"
                      validators={{
                        required,
                        // minLength: minLength(3),
                        // maxLength: maxLength(15),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".last_name"
                      show="touched"
                      messages={{
                        required: "Required",
                        // minLength: "Must be greater than 2 characters",
                        // maxLength: "Must be 15 characters or less",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group ml-2 mr-2 ">
                  <Label className="offset-md-1" htmlFor="phone" md={2}>
                    Contact Tel.
                  </Label>
                  <Col md={8}>
                    <Control.text
                      model=".phone"
                      id="phone"
                      name="phone"
                      placeholder="Tel. Number"
                      className="form-control"
                      validators={{
                        required,
                        minLength: minLength(15),

                        isNumber,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".phone"
                      show="touched"
                      messages={{
                        required: "Required ",
                        minLength: "Not valid number ",

                        isNumber: "Must be a number",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group ml-2 mr-2">
                  <Label className="offset-md-1" htmlFor="email" md={2}>
                    Email
                  </Label>
                  <Col md={8}>
                    <Control.text
                      model=".email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      validators={{
                        required,
                        validEmail,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".email"
                      show="touched"
                      messages={{
                        required: "Required ",
                        validEmail: "Invalid Email Address",
                      }}
                    />
                  </Col>
                </Row>

                <Row className="form-group ml-2 mr-2 mb-4  ">
                  <Label
                    className="offset-md-1"
                    htmlFor="00N5e000004n0Z2"
                    md={2}
                  >
                    Message
                  </Label>
                  <Col md={8}>
                    <Control.textarea
                      model=".00N5e000004n0Z2"
                      id="00N5e000004n0Z2"
                      name="00N5e000004n0Z2"
                      rows="12"
                      className="form-control"
                      validators={{
                        required,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".00N5e000004n0Z2"
                      show="touched"
                      messages={{
                        required: "Required",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group justify-content-center">
                  <Button className="btn--blue" type="submit" color="primary">
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
