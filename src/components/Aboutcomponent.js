import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem,
     Row, Col } from 'reactstrap';



class About extends Component { 

    constructor(props) {
      super(props);
     
   }


    render() {


      return(
    
        
        <React.Fragment>
            
            <div class = "jumbotron-sm">
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
                            <h2 class="mt-0 d-flex justify-content-start contact-adjust">Our Company</h2>
                            <hr class="divider2 my-4" />
                            <p class = "contact-elem">
                            Trutec Engineering Inc, with 35 years of industry experience, supports public and private clients by successfully 
                            managing and executing design and construction services for renovation, new construction and infrastructure improvement projects. 
                            Trutec Engineering Inc currently holds both “A (General Engineering) and B (General Building)” licenses (Lic # 979233) 
                            which enable to perform construction from beginning to end, from excavation and paving to building finishes. <br></br><br></br>
                            Trutec Engineering Inc believes that the quality of a project is dependent upon our ability to lead construction process in an appropriate, 
                            timely manner with client’s goals. We know from our experiences that a good construction performance yields direct economic and scheduling advantages that profit our clients.
                            </p>
                            <br></br>
                        </div>
                        <div class = "col-md-6">

                            <img src= "assets/images/remodel.jpg" width="100%" height="100%"/>
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
                      <p>Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
                  </div>
              </div>

              <div class="row mt-3">
                <div class="col-6 col-md-3 mt-3">
                    <div class="why-uss rounded"><i class="fa fa-check-circle fa-3x"></i>
                        <h3 class="mt-3">General Contracting</h3>
                        <p class="mt-3">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/><br/></p>
                    </div>
                </div>
                <div class="col-6 col-md-3 mt-3">
                    <div class="why-uss rounded"><i class="fa fa-check-circle fa-3x"></i>
                        <h3 class="mt-3">Electrical Contracting</h3>
                        <p class="mt-3">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/><br/></p>
                    </div>
                </div>
                <div class="col-6 col-md-3 mt-3">
                    <div class="why-uss rounded"><i class="fa fa-check-circle fa-3x"></i>
                        <h3 class="mt-3">Project Management & Controls</h3>
                        <p class="mt-3">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/><br/></p>
                    </div>
                </div>
                <div class="col-6 col-md-3 mt-3">
                    <div class="why-uss rounded"><i class="fa fa-check-circle fa-3x"></i>
                        <h3 class="mt-3">Planning & Scheduling & Estimating</h3>
                        <p class="mt-3">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/><br/></p>
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
                <div class="col-md-4 mt-3">
                <img src= "assets/images/badge.png" width="70%" height="70%"/>
                </div>
                <div class="col-md-4 mt-3">
                <img src= "assets/images/dv.png" width="70%" height="70%"/>
                </div>
                <div class="col-md-4 mt-3">
                <img src= "assets/images/sdvosb.png" width="67%" height="70%"/>
                </div>
            
  
              </div>
          </div>
      </section>
            

            



        </React.Fragment>
    
        
    
    
    
      );
    }
  }
  
  export default About;