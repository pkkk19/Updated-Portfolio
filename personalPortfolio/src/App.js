import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profile from "./assets/img/profile-img.jpg";
import CVPhoto from "./assets/img/CV.png";
import CV from "./assets/files/Prabesh-Kumar-Shrestha-cv.pdf";

import "./assets/css/style.css";
import { Image, ProgressBar, Button } from "react-bootstrap";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaDiscord,
  FaLinkedinIn,
  FaHome,
  FaUser,
  FaFile,
  FaAngleRight,
  FaArrowDown,
  FaReact,
} from "react-icons/fa";
import{SiJavascript, SiNextdotjs} from "react-icons/si";
import { BsGeoAlt } from "react-icons/bs";
import { BiEnvelope, BiMobile } from "react-icons/bi";
import Scrollspy from "react-scrollspy";
import ContactForm from "./contactForm";

export default class extends Component {
  state = { clicked: false };

  handelClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className={this.state.clicked ? "mobile-nav-active" : ""}>
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
                <Scrollspy
                  items={["hero", "about", "resume", "portfolio", "contact"]}
                  currentClassName="active"
                >
                  <li onClick={this.state.clicked?this.handelClick : ""}>
                    <a href="#hero" class="nav-link scrollto">
                      <i>
                        <FaHome />
                      </i>{" "}
                      <span>&nbsp;&nbsp;Home</span>
                    </a>
                  </li>
                  <li onClick={this.state.clicked?this.handelClick : ""}>
                    <a href="#about" class="nav-link scrollto">
                      <i>
                        <FaUser />
                      </i>{" "}
                      <span>&nbsp;&nbsp;About</span>
                    </a>
                  </li>
                  <li onClick={this.state.clicked?this.handelClick : ""}>
                    <a href="#resume" class="nav-link scrollto">
                      <i>
                        <FaFile />
                      </i>{" "}
                      <span>&nbsp;&nbsp;Resume</span>
                    </a>
                  </li>
                  <li onClick={this.state.clicked?this.handelClick : ""}>
                    <a href="#contact" class="nav-link scrollto">
                      <i>
                        <BiEnvelope />
                      </i>{" "}
                      <span>&nbsp;&nbsp;Contact</span>
                    </a>
                  </li>
                </Scrollspy>
              </ul>
            </nav>
            {/* Nav bar */}
          </div>
        </header>

        <section
        width = "100%"
          id="hero"
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <div class="hero-container">
            <h1>Prabesh Kumar Shrestha</h1>
            {/* <p>
              I
              <Typed
                strings={[
                  "'m a Front-End Web Developer.",
                  "&nbsp; Love Software Development.",
                ]}
                typeSpeed={140}
                backSpeed={90}
                loop
              />
            </p> */}
          </div>
        </section>

        <main id="main">
          {/* -- ======= About Section ======= -- */}
          <section height = "100vh" id="about" class="about">
            <div class="container">
              <div class="section-title">
                <h2>About</h2>
                <p>
                  I am a hard-working and driven individual who isn't afraid to
                  face a challenge. I'm passionate about my work and I know how
                  to get the job done. I would describe myself as an open and
                  honest individual.
                </p>
              </div>

              <div class="row">
                <div class="col-lg-4" data-aos="fade-right">
                  <Image src={profile} fluid className="about-profile"></Image>
                </div>
                <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                  <h3>Web Developer.</h3>
                  <p class="fst-italic">
                  I am currently working as a freelancer.
                  </p>
                  <div class="row">
                    <div class="col-lg-6">
                      <ul>
                        <li>
                          <i>
                            <FaAngleRight />
                          </i>{" "}
                          <strong>Birthday:</strong> <span>08 July 2001</span>
                        </li>
                        <li>
                          <i>
                            <FaAngleRight />
                          </i>{" "}
                          <strong>Github:</strong>{" "}
                          <a a href="https://github.com/pkkk19">
                            <span>https://github.com/pkkk19</span>
                          </a>
                        </li>
                        <li>
                          <i>
                            <FaAngleRight />
                          </i>{" "}
                          <strong>Phone:</strong> <span>+977 9824289863</span>
                        </li>
                        <li>
                          <i>
                            <FaAngleRight />{" "}
                          </i>
                          <strong>City:</strong> <span>Kathmandu, Nepal</span>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-6">
                      <ul>
                        <li>
                          <i>
                            <FaAngleRight />
                          </i>{" "}
                          <strong>Age:</strong> <span>21</span>
                        </li>
                        <li>
                          <i>
                            <FaAngleRight />
                          </i>{" "}
                          <strong>Degree:</strong>{" "}
                          <span>BSc (Hons) in Computer Science</span>
                        </li>
                        <li>
                          <i>
                            <FaAngleRight />
                          </i>{" "}
                          <strong>Email:</strong>{" "}
                          <span>prabesh065@gmail.com</span>
                        </li>
                        <li>
                          <i>
                            <FaAngleRight />
                          </i>{" "}
                          <strong>Freelance:</strong> <span>Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    I have been coding for a couple of years and have a good
                    experience in web development. I have completed my study BSc.
                    (Hons) in computer science at Herald College Kathmandu which is affiliated by the University of Wolverhampton.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* -- End About Section -- */}

          {/* -- ======= Skills Section ======= -- */}
          <section id="skills" class="skills section-bg">
            <div class="container">
              <div class="section-title">
                <h2>Skills</h2>
                <p>
                  I have worked with languages like Python, Java, TypeScript, and JavaScript but I prefer working with typescript and javascript using frameworks like react.js, and Next.js, and for mobile platforms, I have worked with FLutter
                  for backend I have used Fast API and Django. Besides programming, I also have some soft skills
                  like great communication, leadership, and Work ethic.
                </p>
              </div>

              <div class="row skills-content">
                <div class="col-lg-6" data-aos="fade-up">
                 
                 <SiJavascript size={50} color={"#f0db4f"}/>
                 <FaReact size={50} color={"#88dded"}/>
                 
                 <SiNextdotjs size={50}/>
                 
                </div>

                
               
             
              </div>
            </div>
          </section>
          {/* -- End Skills Section -- */}

          {/* -- ======= Resume Section ======= -- */}
          <section id="resume" class="resume">
            <div class="container">
              <div class="section-title">
                <div class="row">
                  <div class="col-lg-4">
                    <h2>Resume</h2>
                  </div>
                  <div class="col-lg-4">
                    <Button variant="outline-primary" href={CV} download>
                      Click to download <FaArrowDown />
                    </Button>
                  </div>
                </div>
                <br />
                <div className="Resume-img">
                  <img src={CVPhoto} />
                </div>
              </div>
            </div>
          </section>
          {/* -- End Resume Section -- */}
          <br />

          <br />
          {/* -- ======= Contact Section ======= -- */}
          <section id="contact" class="contact">
            <div class="container">
              <div class="section-title">
                <h2>Contact</h2>
              </div>

              <div class="row" data-aos="fade-in">
                <div class="col-lg-5 d-flex align-items-stretch">
                  <div class="info">
                    <div class="address">
                      <i class="bi bi-geo-alt">
                        <BsGeoAlt />
                      </i>
                      <h4>Location:</h4>
                      <p>Kathmandu, Nepal</p>
                    </div>

                    <div class="email">
                      <i>
                        <BiEnvelope />
                      </i>
                      <h4>Email:</h4>
                      <p>prabesh065@gmail.com</p>
                    </div>

                    <div class="phone">
                      <i>
                        <BiMobile />
                      </i>
                      <h4>Call:</h4>
                      <p>+977 9824289863</p>
                    </div>
                  </div>
                </div>

                <ContactForm />
              </div>
            </div>
          </section>
          {/* -- End Contact Section -- */}
        </main>
        {/* End #main */}
      </div>
    );
  }
}
