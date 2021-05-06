import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Row, Col } from "reactstrap";

class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const card_detail = this.props.projects.map((item) => (
      <div className="col-12 col-md-6 mt-3">
        <div className="why-us rounded">
          <h4 className="mt-3">{item.name}</h4>
          <p>{item.location}</p>
        </div>
      </div>
    ));

    return (
      <React.Fragment>
        <div class="jumbotron-sm">
          <div class="container h-100">
            <div class="row h-100 align-self-center text-center d-flex align-items-center">
              <div class="col-lg-12">
                <h1 class="text-white">Projects</h1>
              </div>
            </div>
          </div>
        </div>

        <section class="services" id="contact">
          <div class="container">
            <div class="row justify-content-start">
              <div class="col-md-6 mb-3">
                <h2 class="mt-0 d-flex justify-content-start contact-adjust">
                  Past Projects
                </h2>
                <hr class="divider2 my-4" />
                {/* <p class="contact-elem">
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
                <br></br> */}
              </div>
            </div>

            <div className="row">{card_detail}</div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Project;
