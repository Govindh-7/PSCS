import React from "react";
import '../css/About.css';

const About = () => {
  return (
    <>
      {/* About Section */}
      <section className="about_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              About <span>Us</span>
            </h2>
            <p>
              Pandey Software Consultancy Services is committed to providing exceptional IT and business consulting services
            </p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/about-img.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <h3>We Are PSCS</h3>
                <p>
                  PSCS is digital Payments, Wallet and Agent Banking Solutions. You can launch a complete digital wallet, banking services, end-to-end payment services, e-commerce platform. To provide their target audience with best in class solutions
                </p>
                <p>
                  We support your business with tailored, customer-focused solutions that give your organization a competitive advantage.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
</>
  );
}
export default About;
