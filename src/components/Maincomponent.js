import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from './Headercomponent';
import Home from './Homecomponent';
import Footer from './Footercomponent';
import Contact from './Contactcomponent';


class Main extends Component {


  
    render() {
  
        const HomePage = () => {
            return(
                <Home 
                />
            );
          } 
        
        const ContactPage = () => {
          return(
              <Contact 
              />
          );
        } 
  
  
      return (
        
        <div>
        <div>
        <Header />
        <div>
              <Switch>
              <Route path='/home' component={HomePage} />
              <Route path='/contact' component = {ContactPage} />
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