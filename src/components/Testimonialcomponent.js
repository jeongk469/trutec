import React from "react";
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
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const Testimonial = (props) => {
  const card_detail = props.logos.map((item) => (
    <div class="col-4 col-sm-3 col-md-3 ">
      <div class="frame">
        <span class="helper"></span>
        <img class="img_logo" src={item.src} />
        {/* <CardBody>
              <CardTitle>{item.title}</CardTitle>
              {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
              {/* <CardText>{item.title}</CardText> */}
        {/* </CardBody> */}
      </div>
    </div>
  ));

  return (
    <React.Fragment>
      <div class="jumbotron-sm">
        {/* <div class="container h-100"> */}
        <div class="row h-100 align-self-center text-center d-flex align-items-center">
          <div class="col-lg-12">
            <h1 class="text-white">Clients</h1>
          </div>
          {/* </div> */}
        </div>
      </div>

      <section class="services section-title" id="contact">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="mt-0">Our past Clients</h2>
              <hr class="divider my-4" />
              <p>
                We value all of our clients and the relationships we’ve built.
                Teamwork is the basis of our success!
              </p>
            </div>
          </div>
        </div>

        <div className="container mt-5 d-flex h-100">
          <div className="row">{card_detail}</div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Testimonial;
