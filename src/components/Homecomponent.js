import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavLink,
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

function Home(props) {
  const card_detail = props.logos.map((item) => (
    <div className="col-6 ol-sm-3 col-md-3 ">
      <div className="frame">
        <span className="helper"></span>
        <img className="img_logo" src={item.src} />
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
      {/* Jumbotron */}
      <Jumbotron>
        <div className="container h-100">
          <div className="row h-100 align-items-start justify-content-start text-left">
            <div className="col-lg-10 align-self-end">
              <h1 className="text-uppercase text-white font-weight-bold">
                Liscensed General Contractor in California
              </h1>
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 font-weight-light mb-5"> </p>
              <a className="btn btn-light btn-lg" href="/about">
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </Jumbotron>

      <section id="cliens" className="cliens section-bg">
        <div className="container">
          <div className="row" data-aos="zoom-in">
            <div className="col-lg-3 col-md-3 col-6 d-flex align-items-center justify-content-center">
              <img
                src="assets/images/ca_logo.png"
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-lg-3 col-md-3 col-6 d-flex align-items-center justify-content-center">
              <img src="assets/images/dv.png" className="img-fluid" alt="" />
            </div>

            <div className="col-lg-3 col-md-3 col-6 d-flex align-items-center justify-content-center">
              <img
                src="assets/images/sdvosb.png"
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-lg-3 col-md-3 col-6 d-flex align-items-center justify-content-center">
              <img src="assets/images/badge.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Trutec about short */}
      {/* <section className="section-title" id="contact">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-8 text-center">
                      <h2 className="mt-0">Trutec Engineering</h2>
                      <hr className="divider my-4" />
                      <p className = "mb-5">Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
                      <a className="btn btn-outline-dark btn-md" href="/about">Find Out More</a>
            

                  </div>
              </div>
          </div>
      </section> */}
      <section className="services section-title" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0">What We Do</h2>
              <hr className="divider my-4" />
              <p>
                Ready to start your next project with us? Give us a call or send
                us an email and we will get back to you as soon as possible!
              </p>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-6 col-md-3 mt-3">
              <div className="why-us rounded">
                <i className="fa fa-check-circle fa-3x"></i>
                <h3 className="mt-3">General Contracting</h3>
                <ul>
                  <li>
                    <i className="fa fa-check"></i> General Building &
                    Engineering
                  </li>
                  <br />
                  <li>
                    <i className="fa fa-check"></i> HVAC / Electrical / Plumbing
                  </li>
                  <br />
                  <li>
                    <i className="fa fa-check"></i> Roofing Contract
                  </li>
                  <br />
                  <li>
                    <i className="fa fa-check"></i> Concrete / Paving /
                    Demolition
                  </li>
                  <br />
                  <li>
                    <i className="fa fa-check"></i> Other Specialty Trades
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-3 mt-3">
              <div className="why-us rounded">
                <i className="fa fa-check-circle fa-3x"></i>
                <h3 className="mt-3">Electrical Contracting</h3>
                <ul className="mt-3">
                  <li>
                    <i className="fa fa-check"></i> UPS / Generator Installation
                  </li>
                  <br />
                  <li>
                    <i className="fa fa-check"></i> Lighting & Lighting Control
                  </li>
                  <br />
                  <li>
                    <i className="fa fa-check"></i> Underground Electrical
                  </li>
                  <br />
                  <li>
                    <i className="fa fa-check"></i> Conduit & Wiring
                  </li>
                  <br />
                  <li>
                    <i className="fa fa-check"></i> Electrical panel &
                    Transformer
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-3 mt-3">
              <div className="why-us rounded">
                <i className="fa fa-check-circle fa-3x"></i>
                <h3 className="mt-3">Project Management & Controls</h3>
                <ul className="mt-3">
                  <li>
                    <i className="fa fa-check"></i> Project Quality Control
                  </li>
                  <br />
                  <li>
                    <i className="fa fa-check"></i> Subcontractors control
                  </li>
                  <br />
                  <li>
                    <i className="fa fa-check"></i> Safety & prevention
                  </li>
                  <br />
                  <li>
                    <i className="fa fa-check"></i> Resolve issues & changes
                  </li>
                  <br />
                  <li>
                    <i className="fa fa-check"></i> Proper communications
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-3 mt-3">
              <div className="why-us rounded">
                <i className="fa fa-check-circle fa-3x"></i>
                <h3 className="mt-3">Planning & Scheduling & Estimating</h3>

                <ul className="mt-3">
                  <li>
                    <i className="fa fa-check"></i> Plan Reviews
                  </li>
                  <br />
                  <li>
                    <i className="fa fa-check"></i> Monitor project progress{" "}
                  </li>
                  <br />
                  <li>
                    <i className="fa fa-check"></i> Projection of construction
                    period
                  </li>
                  <br />
                  <li>
                    <i className="fa fa-check"></i> Material & Labor scheduling
                  </li>
                  <br />
                  <li>
                    <i className="fa fa-check"></i> Cost Estimation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <a className="btn btn-outline-dark btn-lg" href="/about">
            Learn More
          </a>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="services section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Projects</h2>
            <hr className="divider my-4" />
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          {/* <div className="row mt-5">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon"><i className="icofont-heart-beat"></i></div>
                  <h4><a href="">Lorem Ipsum</a></h4>
                  <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="icon-box">
                  <div className="icon"><i className="icofont-drug"></i></div>
                  <h4><a href="">Sed ut perspiciatis</a></h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="icon-box">
                  <div className="icon"><i className="icofont-dna-alt-2"></i></div>
                  <h4><a href="">Magni Dolores</a></h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                </div>
              </div>
            </div> */}
        </div>

        <div className="row justify-content-center mt-5">
          <a className="btn btn-outline-dark btn-lg" href="/project">
            View More
          </a>
        </div>
      </section>

      {/* Why Choose us */}
      {/* <section className="section-title" id="contact">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-8 text-center">
                      <h2 className="mt-0">Why Choose Us?</h2>
                      <hr className="divider my-4" />
                      <p>Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
                  </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-4 mt-3">
                    <div className="why-us rounded"><i className="fa fa-check-circle fa-3x"></i>
                        <h3 className="mt-3">Experience & Expertise</h3>
                        <p className="mt-3">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/><br/></p>
                    </div>
                </div>
                <div className="col-md-4 mt-3">
                    <div className="why-us rounded"><i className="fa fa-check-circle fa-3x"></i>
                        <h3 className="mt-3">Experience & Expertise</h3>
                        <p className="mt-3">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/><br/></p>
                    </div>
                </div>
                <div className="col-md-4 mt-3">
                    <div className="why-us rounded"><i className="fa fa-check-circle fa-3x"></i>
                        <h3 className="mt-3">Experience & Expertise</h3>
                        <p className="mt-3">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/><br/></p>
                    </div>
                </div>
  
              </div>
          </div>
      </section> */}

      {/* Testimonials */}
      {/* <section className="services">
      
          <div className="container">
            <div className="section-title">
              <h2>Testimonials</h2>
              <hr className="divider my-4" />
            </div>

            <div className="row">
              <div className="col-md-4 mt-3">
                  <div className="testimonial-1 rounded"><i className="fa fa-quote-left fa-lg"></i>
                      <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/><br/></p>
                      <div className="d-flex flex-row align-items-center"><img className="rounded-circle" src="https://i.imgur.com/sKDeBrg.jpg" width="40" />
                          <div className="ml-2 about"><span className="d-block name">Giralle Cross</span><span className="place">Operator Trade, Little AR, TX</span></div>
                      </div>
                  </div>
              </div>

              <div className="col-md-4 mt-3">
                  <div className="testimonial-1 rounded"><i className="fa fa-quote-left fa-lg"></i>
                      <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/><br/></p>
                      <div className="d-flex flex-row align-items-center"><img className="rounded-circle" src="https://i.imgur.com/sKDeBrg.jpg" width="40" />
                          <div className="ml-2 about"><span className="d-block name">Giralle Cross</span><span className="place">Operator Trade, Little AR, TX</span></div>
                      </div>
                  </div>
              </div>

              <div className="col-md-4 mt-3">
                  <div className="testimonial-1 rounded"><i className="fa fa-quote-left fa-lg"></i>
                      <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/><br/></p>
                      <div className="d-flex flex-row align-items-center"><img className="rounded-circle" src="https://i.imgur.com/sKDeBrg.jpg" width="40" />
                          <div className="ml-2 about"><span className="d-block name">Giralle Cross</span><span className="place">Operator Trade, Little AR, TX</span></div>
                      </div>
                  </div>
              </div>
      
            </div>

            <div className="row justify-content-center mt-5">
            <a className="btn btn-outline-dark btn-md" href="#about">View More</a>
            </div>

            

          </div>
      </section> */}

      <section className="services section-title" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0">Our past Clients</h2>
              <hr className="divider my-4" />
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

        <div className="row justify-content-center mt-5">
          <a className="btn btn-outline-dark btn-lg" href="/testimonial">
            View More
          </a>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
