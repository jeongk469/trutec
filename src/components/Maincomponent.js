import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Header from "./Headercomponent";
import Home from "./Homecomponent";
import Footer from "./Footercomponent";
import Contact from "./Contactcomponent";
import Testimonial from "./Testimonialcomponent";
import About from "./Aboutcomponent";
import Project from "./Projectscomponent";
import { clientLogos } from "../shared/client";
import { projects } from "../shared/projects";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logos: clientLogos,
      Projects: projects,
    };
  }

  render() {
    const HomePage = () => {
      return <Home logos={this.state.logos.filter((item) => item.mainpage)} />;
    };

    const ContactPage = () => {
      return <Contact />;
    };

    const TestimonialPage = () => {
      return <Testimonial logos={this.state.logos} />;
    };

    const aboutPage = () => {
      return <About />;
    };

    const projectPage = () => {
      return <Project projects={this.state.Projects} />;
    };

    return (
      <div>
        <div>
          <Header />
          <div>
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/testimonial" component={TestimonialPage} />
              <Route path="/about" component={aboutPage} />
              <Route path="/project" component={projectPage} />
              {/* <Route exact path='/aboutus' component={AboutPage}/> 
                  <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                  <Route path='/menu/:dishId' component={DishWithId} />
                  <Route exact path='/contactus' component={ContactPage}/> */}
              <Redirect to="/home" />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Main;
