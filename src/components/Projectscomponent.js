import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Row, Col } from "reactstrap";

class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
      </React.Fragment>
    );
  }
}

export default Project;
