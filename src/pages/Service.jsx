import React from 'react';


const Service = () => {
  return (
    <div>
    
      
      <section className="service_section layout_padding">
        <div className="service_container">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>Our <span>Services</span></h2>
              <p>We build flexible and bespoke solutions, with end-user in mind</p>
            </div>
            <div className="row">
              {/* Service Boxes */}
              <div className="col-md-4">
                <div className="box">
                  <div className="img-box">
                    <img src="images/s1.png" alt="Mobile Wallet" />
                  </div>
                  <div className="detail-box">
                    <h5>Mobile Wallet</h5>
                    <p>Our wallet solutions create a unique experience that enables the unbanked and underbanked to access banking and payments services on their phone numbers.</p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="img-box">
                    <img src="images/s2.png" alt="Payment Gateway" />
                  </div>
                  <div className="detail-box">
                    <h5>Payment Gateway</h5>
                    <p>With PSCS, you can run a complete digital wallet, banking services, end-to-end payment services, e-commerce platform.</p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="img-box">
                    <img src="images/s3.png" alt="IT Support" />
                  </div>
                  <div className="detail-box">
                    <h5>IT Support</h5>
                    <p>24/7 support to ensure your systems are always running smoothly.</p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              {/* Additional service section */}
              <div className="col-md-4">
                <div className="box">
                  <div className="img-box">
                    <img src="images/hr-management.png" alt="HR Management" />
                  </div>
                  <div className="detail-box">
                    <h5>HR Management</h5>
                    <p>Our HR Management solutions simplify your workforce operations, including recruitment, payroll, performance management, and employee engagement, to drive business growth.</p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-box">
              <a href="#">View All</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Service;
