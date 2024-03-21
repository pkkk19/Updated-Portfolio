import React, { Component } from "react";
import { Image } from "react-bootstrap";
import profile from "./assets/img/profile-img.jpg";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaDiscord,
  FaLinkedinIn,
  FaHome,
  FaUser,
  FaFile,
  FaCode,
} from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import product from "./assets/img/Projects/tour-package-des.png";
import packages from "./assets/img/Projects/tour-packages.png";
import landingPage from "./assets/img/Projects/tour-landing.png";
import Carousel from "react-bootstrap/Carousel";

export default class extends Component {
  state = { clicked: false };

  handelClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className={this.state.clicked ? "mobile-nav-active" : "mobile-nav"}>
        <header id="header">
          <button
            className={
              this.state.clicked
                ? "bi mobile-nav-toggle d-xl-none-bi-x"
                : "bi mobile-nav-toggle d-xl-none bi-list"
            }
            onClick={this.handelClick}
          >
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </button>

          <div class="d-flex flex-column">
            <div class="profile">
              <Image src={profile} fluid roundedCircle />
              <h1 class="text-light">
                <a href="">Prabesh Kumar</a>
              </h1>
              <h1 class="text-light">
                <a href="">Shrestha</a>
              </h1>
              <div class="social-links mt-3 text-center">
                <a href="https://twitter.com/pkkk19" class="twitter">
                  <FaTwitter />
                </a>
                <a
                  href="https://www.facebook.com/prabeshkstha"
                  class="facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/prabeshk_shrestha/?hl=en"
                  class="instagram"
                >
                  <FaInstagram />
                </a>
                <a href="https://discord.gg/aG4gDs6jng" class="discord">
                  <FaDiscord />
                </a>
                <a
                  href="https://www.linkedin.com/in/prabesh-kumar-shrestha-281394195"
                  class="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            <nav id="navbar" className="nav-menu navbar">
              <ul>
                <li>
                  <a href="#hero" class="nav-link scrollto">
                    <i>
                      <FaHome />
                    </i>{" "}
                    <span>&nbsp;&nbsp;Home</span>
                  </a>
                </li>
                <li>
                  <a href="#about" class="nav-link scrollto">
                    <i>
                      <FaUser />
                    </i>{" "}
                    <span>&nbsp;&nbsp;About</span>
                  </a>
                </li>
                <li>
                  <a href="#resume" class="nav-link scrollto">
                    <i>
                      <FaFile />
                    </i>{" "}
                    <span>&nbsp;&nbsp;Resume</span>
                  </a>
                </li>
                <li>
                  <a href="#portfolio" class="nav-link scrollto">
                    <i>
                      <FaCode />
                    </i>{" "}
                    <span>&nbsp;&nbsp;Portfolio</span>
                  </a>
                </li>

                <li>
                  <a href="#contact" class="nav-link scrollto">
                    <i>
                      <BiEnvelope />
                    </i>{" "}
                    <span>&nbsp;&nbsp;Contact</span>
                  </a>
                </li>
              </ul>
            </nav>
            {/* Nav bar */}
          </div>
        </header>

        <main id="main">
          {/* -- ======= Breadcrumbs ======= -- */}
          <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">
              <div class="d-flex justify-content-between align-items-center">
                <h2>Portfolio Details</h2>
                <ol>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Portfolio Details</li>
                </ol>
              </div>
            </div>
          </section>
          {/* -- End Breadcrumbs -- */}

          {/* -- ======= Portfolio Details Section ======= -- */}
          <section id="portfolio-details" class="portfolio-details">
            <div class="container">
              <div class="row gy-4">
                <div class="col-lg-8">
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={landingPage}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={packages}
                        alt="Second slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={product}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>

                <div class="col-lg-4">
                  <div class="portfolio-info">
                    <h3>Project information</h3>
                    <ul>
                      <li>
                        <strong>Category</strong>: Full-stack Web development
                      </li>
                      <li>
                        <strong>Project URL</strong>:{" "}
                        <a href="https://github.com/RohanMainaliOfficial/TourManagementSystem/tree/Rohan">Link Here</a>
                      </li>
                    </ul>
                  </div>
                  <div class="portfolio-description">
                    <h2>Short description about the Travel project</h2>
                    <p>
                      Travel Nepal website was built using django for backend
                      and react.js for frontend. This website features two
                      different panel, one for user and one for admin. The admin
                      panel is responsible for handling all the CRUD
                      functionality of tour packages and booking request whereas
                      the user panel displays all the available tour packages
                      and it's details like available seats, price, description
                      of each days and discount offers. I used django rest
                      framework for creating all APIs and postman to test them
                      before using those APIs. Indeed I faced a lot of
                      challenges and bugs on this project but I completed this
                      project in time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* -- End Portfolio Details Section -- */}
        </main>
        {/* -- End #main -- */}
      </div>
    );
  }
}
