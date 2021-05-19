import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Row, Col } from "reactstrap";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div
          class="jumbotron-sm"
          style={{
            background: `linear-gradient(
        to bottom,
        rgba(57, 57, 58, 0.466) 0%,
        rgba(165, 165, 170, 0.63) 100%
      ),url("assets/images/abouttop.png")`,
          }}
        >
          <div class="container h-100">
            <div class="row h-100 align-self-center text-center d-flex align-items-center">
              <div class="col-lg-12">
                <h1 class="text-white">About Us</h1>
              </div>
            </div>
          </div>
        </div>

        <section class="services" id="contact">
          <div class="container">
            <div class="row justify-content-start">
              <div class="col-md-6 mb-3">
                <h2 class="mt-0 d-flex justify-content-start contact-adjust">
                  Our Company
                </h2>
                <hr class="divider2 my-4" />
                <p class="contact-elem">
                  Trutec Engineering Inc, with 35 years of industry experience,
                  supports public and private clients by successfully managing
                  and executing design and construction services for renovation,
                  new construction and infrastructure improvement projects.
                  Trutec Engineering Inc currently holds both “A (General
                  Engineering) and B (General Building)” licenses (Lic # 979233)
                  which enable to perform construction from beginning to end,
                  from excavation and paving to building finishes. <br></br>
                  <br></br>
                  Trutec Engineering Inc believes that the quality of a project
                  is dependent upon our ability to lead construction process in
                  an appropriate, timely manner with client’s goals. We know
                  from our experiences that a good construction performance
                  yields direct economic and scheduling advantages that profit
                  our clients.
                </p>
                <br></br>
              </div>
              <div className="col-md-6">
                <img
                  className="rad"
                  src="assets/images/bojung.jpg"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </section>

        <section class="services section-title section-bg" id="contact">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8 text-center">
                <h2 class="mt-0">What We Do</h2>
                <hr class="divider my-4" />
                <p>
                  Ready to start your next project with us? Give us a call or
                  send us an email and we will get back to you as soon as
                  possible!
                </p>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-6 col-md-3 mt-3">
                <div className="why-uss rounded">
                  <i className="fa fa-check-circle fa-3x"></i>
                  <h3 className="mt-3">General Contracting</h3>
                  <ul>
                    <li>
                      <i className="fa fa-check"></i> General Building &
                      Engineering
                    </li>
                    <br />
                    <li>
                      <i className="fa fa-check"></i> HVAC / Electrical /
                      Plumbing
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
                <div className="why-uss rounded">
                  <i className="fa fa-check-circle fa-3x"></i>
                  <h3 className="mt-3">Electrical Contracting</h3>
                  <ul className="mt-3">
                    <li>
                      <i className="fa fa-check"></i> UPS / Generator
                      Installation
                    </li>
                    <br />
                    <li>
                      <i className="fa fa-check"></i> Lighting & Lighting
                      Control
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
                <div className="why-uss rounded">
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
                <div className="why-uss rounded">
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
                      <i className="fa fa-check"></i> Material & Labor
                      scheduling
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
        </section>

        <section class=" services section-title" id="contact">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8 text-center">
                <h2 class="mt-0">Accreditations</h2>
                <hr class="divider my-4" />
              </div>
            </div>

            <div class="row mt-3">
              <div class="col-6 col-md-3 mt-3">
                <img src="assets/images/ca_logo.png" width="70%" height="70%" />
              </div>
              <div class="col-6 col-md-3 mt-3">
                <img src="assets/images/dv.png" width="70%" height="70%" />
              </div>
              <div class="col-6 col-md-3 mt-3">
                <img
                  src="assets/images/sdvosb_white.jpeg"
                  width="67%"
                  height="70%"
                />
              </div>
              <div class="col-6 col-md-3 mt-3">
                <img src="assets/images/mbe.png" width="67%" height="70%" />
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
