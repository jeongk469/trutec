import React from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label } from 'reactstrap';



function Home(props) {

  return(

    
    <React.Fragment>

        <Jumbotron>
          <div class="container h-100">
              <div class="row h-100 align-items-start justify-content-start text-left">
                  <div class="col-lg-10 align-self-end">
                      <h1 class="text-uppercase text-white font-weight-bold">Liscensed General Contractor in Orange County</h1>
                      
                  </div>
                  <div class="col-lg-8 align-self-baseline">
                      <p class="text-white-75 font-weight-light mb-5"> </p>
                      <a class="btn btn-primary btn-xl" href="#about">Find Out More</a>
                  </div>
              </div>
          </div>
      </Jumbotron>
                

      <section class="section-title" id="contact">
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-8 text-center">
                      <h2 class="mt-0">Trutec Engineering</h2>
                      <hr class="divider my-4" />
                      <p>Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
                  </div>
              </div>
          </div>
      </section>

      <section class="services section-bg">
      
          <div class="container">
            <div class="section-title">
              <h2>Recent Projects</h2>
              <hr class="divider my-4" />
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div class="row">
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

              

            </div>
          </div>

     
      </section>

      </React.Fragment>

    



  );
}

export default Home;