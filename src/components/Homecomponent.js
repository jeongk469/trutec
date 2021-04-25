import React from 'react';
import { Navbar, NavbarBrand, NavLink, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label } from 'reactstrap';



function Home(props) {


  const card_detail = props.logos.map((item) => 

        <div class ="col-6 ol-sm-3 col-md-3 ">
            
              <div class='frame'>
              
              <span class="helper"></span>
              <img class ='img_logo' src={item.src}/>
              {/* <CardBody>
              <CardTitle>{item.title}</CardTitle>
              {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
              {/* <CardText>{item.title}</CardText> */}
              {/* </CardBody> */}
              </div>
            
        </div>
    
    )




  return(

    
    <React.Fragment>

        {/* Jumbotron */}
        <Jumbotron>
          <div class="container h-100">
              <div class="row h-100 align-items-start justify-content-start text-left">
                  <div class="col-lg-10 align-self-end">
                      <h1 class="text-uppercase text-white font-weight-bold">Liscensed General Contractor in California</h1>
                      
                  </div>
                  <div class="col-lg-8 align-self-baseline">
                      <p class="text-white-75 font-weight-light mb-5"> </p>
                      <a class="btn btn-light btn-lg" href="#about">Find Out More</a>

                  </div>
              </div>
          </div>
      </Jumbotron>


    <section id="cliens" class="cliens section-bg">
      <div class="container">

        <div class="row" data-aos="zoom-in">

          <div class="col-lg-3 col-md-3 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/images/ca_logo.png" class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-3 col-md-3 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/images/dv.png" class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-3 col-md-3 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/images/sdvosb.png" class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-3 col-md-3 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/images/badge.png" class="img-fluid" alt=""/>
          </div>

     

          
         
        </div>

      </div>
    </section>
                

      {/* Trutec about short */}
      {/* <section class="section-title" id="contact">
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-8 text-center">
                      <h2 class="mt-0">Trutec Engineering</h2>
                      <hr class="divider my-4" />
                      <p class = "mb-5">Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
                      <a class="btn btn-outline-dark btn-md" href="/about">Find Out More</a>
            

                  </div>
              </div>
          </div>
      </section> */}
      <section class="services section-title" id="contact">
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
                    <div class="why-us rounded"><i class="fa fa-check-circle fa-3x"></i>
                        <h3 class="mt-3">General Contracting</h3>
                          <ul class="mt-3">
                            <li><i class="bx bx-check"></i> General Building & Engineering</li>
                            <li><i class="bx bx-check"></i> HVAC / Electrical / Plumbing</li>
                            <li><i class="bx bx-check"></i> Roofing Contract</li>
                            <li><i class="bx bx-check"></i> Concrete / Paving / Demolition</li>
                            <li><i class="bx bx-check"></i> Other Specialty Trades</li>
                          </ul>
                    </div>
                </div>
                <div class="col-6 col-md-3 mt-3">
                    <div class="why-us rounded"><i class="fa fa-check-circle fa-3x"></i>
                        <h3 class="mt-3">Electrical Contracting</h3>
                        <ul class="mt-3">
                            <li><i class="bx bx-check"></i> UPS / Generator Installation</li>
                            <li><i class="bx bx-check"></i> Lighting & Lighting Control</li>
                            <li><i class="bx bx-check"></i> Underground Electrical</li>
                            <li><i class="bx bx-check"></i> Conduit & Wiring</li>
                            <li><i class="bx bx-check"></i> Electrical panel & Transformer</li>
                          </ul>
                    </div>
                </div>
                <div class="col-6 col-md-3 mt-3">
                    <div class="why-us rounded"><i class="fa fa-check-circle fa-3x"></i>
                        <h3 class="mt-3">Project Management & Controls</h3>
                        <ul class="mt-3">
                            <li><i class="bx bx-check"></i> Project Quality Control</li>
                            <li><i class="bx bx-check"></i> Subcontractors control</li>
                            <li><i class="bx bx-check"></i> Safety & prevention</li>
                            <li><i class="bx bx-check"></i> Resolve issues & changes</li>
                            <li><i class="bx bx-check"></i> Proper communications</li>
                          </ul>
                    </div>
                </div>
                <div class="col-6 col-md-3 mt-3">
                    <div class="why-us rounded"><i class="fa fa-check-circle fa-3x"></i>
                        <h3 class="mt-3">Planning & Scheduling & Estimating</h3>

                        <ul class="mt-3">
                            <li><i class="bx bx-check"></i> Plan Reviews</li>
                            <li><i class="bx bx-check"></i> Monitor project progress </li>
                            <li><i class="bx bx-check"></i> Projection of construction period</li>
                            <li><i class="bx bx-check"></i> Material & Labor scheduling</li>
                            <li><i class="bx bx-check"></i> Cost Estimation</li>
                          </ul>
                    </div>
                </div>
  
              </div>


          </div>

          <div class="row justify-content-center mt-5">
            <a class="btn btn-outline-dark btn-lg" href="/about">Learn More</a>
            </div>
          
      </section>
      
      
      {/* Recent Projects */}
      <section class="services section-bg">
      
          <div class="container">
            <div class="section-title">
              <h2>Projects</h2>
              <hr class="divider my-4" />
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            {/* <div class="row mt-5">
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div class="icon-box">
                  <div class="icon"><i class="icofont-heart-beat"></i></div>
                  <h4><a href="">Lorem Ipsum</a></h4>
                  <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div class="icon-box">
                  <div class="icon"><i class="icofont-drug"></i></div>
                  <h4><a href="">Sed ut perspiciatis</a></h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div class="icon-box">
                  <div class="icon"><i class="icofont-dna-alt-2"></i></div>
                  <h4><a href="">Magni Dolores</a></h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                </div>
              </div>
            </div> */}
          </div>

          <div class="row justify-content-center mt-5">
            <a class="btn btn-outline-dark btn-lg" href="/testimonial">View More</a>
            </div>

          
      </section>


      {/* Why Choose us */}
      {/* <section class="section-title" id="contact">
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-8 text-center">
                      <h2 class="mt-0">Why Choose Us?</h2>
                      <hr class="divider my-4" />
                      <p>Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
                  </div>
              </div>

              <div class="row mt-3">
                <div class="col-md-4 mt-3">
                    <div class="why-us rounded"><i class="fa fa-check-circle fa-3x"></i>
                        <h3 class="mt-3">Experience & Expertise</h3>
                        <p class="mt-3">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/><br/></p>
                    </div>
                </div>
                <div class="col-md-4 mt-3">
                    <div class="why-us rounded"><i class="fa fa-check-circle fa-3x"></i>
                        <h3 class="mt-3">Experience & Expertise</h3>
                        <p class="mt-3">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/><br/></p>
                    </div>
                </div>
                <div class="col-md-4 mt-3">
                    <div class="why-us rounded"><i class="fa fa-check-circle fa-3x"></i>
                        <h3 class="mt-3">Experience & Expertise</h3>
                        <p class="mt-3">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/><br/></p>
                    </div>
                </div>
  
              </div>
          </div>
      </section> */}


      {/* Testimonials */}
      {/* <section class="services">
      
          <div class="container">
            <div class="section-title">
              <h2>Testimonials</h2>
              <hr class="divider my-4" />
            </div>

            <div class="row">
              <div class="col-md-4 mt-3">
                  <div class="testimonial-1 rounded"><i class="fa fa-quote-left fa-lg"></i>
                      <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/><br/></p>
                      <div class="d-flex flex-row align-items-center"><img class="rounded-circle" src="https://i.imgur.com/sKDeBrg.jpg" width="40" />
                          <div class="ml-2 about"><span class="d-block name">Giralle Cross</span><span class="place">Operator Trade, Little AR, TX</span></div>
                      </div>
                  </div>
              </div>

              <div class="col-md-4 mt-3">
                  <div class="testimonial-1 rounded"><i class="fa fa-quote-left fa-lg"></i>
                      <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/><br/></p>
                      <div class="d-flex flex-row align-items-center"><img class="rounded-circle" src="https://i.imgur.com/sKDeBrg.jpg" width="40" />
                          <div class="ml-2 about"><span class="d-block name">Giralle Cross</span><span class="place">Operator Trade, Little AR, TX</span></div>
                      </div>
                  </div>
              </div>

              <div class="col-md-4 mt-3">
                  <div class="testimonial-1 rounded"><i class="fa fa-quote-left fa-lg"></i>
                      <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/><br/></p>
                      <div class="d-flex flex-row align-items-center"><img class="rounded-circle" src="https://i.imgur.com/sKDeBrg.jpg" width="40" />
                          <div class="ml-2 about"><span class="d-block name">Giralle Cross</span><span class="place">Operator Trade, Little AR, TX</span></div>
                      </div>
                  </div>
              </div>
      
            </div>

            <div class="row justify-content-center mt-5">
            <a class="btn btn-outline-dark btn-md" href="#about">View More</a>
            </div>

            

          </div>
      </section> */}

<section class="services section-title" id="contact">

<div class="container">
    <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
            <h2 class="mt-0">Our past Clients</h2>
            <hr class="divider my-4" />
            <p>We value all of our clients and the relationships we’ve built. Teamwork is the basis of our success!</p>
        </div>
    </div>
</div>

<div className="container mt-5 d-flex h-100">
    <div className="row">
        
            {card_detail}
        
        
    </div>
</div>

<div class="row justify-content-center mt-5">
            <a class="btn btn-outline-dark btn-lg" href="/testimonial">View More</a>
            </div>



</section>
      
      

      </React.Fragment>

    



  );
}

export default Home;