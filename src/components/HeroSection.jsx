import React from 'react';
import { Carousel } from 'react-bootstrap'; // Import Carousel from react-bootstrap
import img1 from '../images/img1.png';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-area">
      <Carousel controls={false} indicators={true} interval={5000}>
        {/* Slide 1 */}
        <Carousel.Item>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="hero-content">
                  <h1 className="animated fadeInUp">
                    PSCS <br /> 
                    <span className="company-name">Pandey Software Consultancy Services Pvt.Ltd</span>
                  </h1>
                  <p className="animated fadeInUp delay-1">Crafting Software for Success</p>
                  <div className="cta-box animated fadeInUp delay-2">
                    <button className="cta-btn">Read More</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img src={img1} alt="Hero" className="hero-img animated fadeInRight" />
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="hero-content">
                  <h1 className="animated fadeInUp">
                    Innovative Solutions <br />
                    <span className="company-name">For Digital Transformation</span>
                  </h1>
                  <p className="animated fadeInUp delay-1">Building Future-Ready Software</p>
                  <div className="cta-box animated fadeInUp delay-2">
                    <button className="cta-btn">Our Services</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img src={img1} alt="Innovation" className="hero-img animated fadeInRight" />
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeroSection;