import React from 'react';

const WhyUs = () => {
  return (
    <div className="hero_area">
      <div className="hero_bg_box">
        <div className="bg_img_box">
          <img src="images/hero-bg.png" alt="" />
        </div>
      </div>

     

      {/* Why Section */}
      <section className="why_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Why Choose <span>Us</span>
            </h2>
          </div>
          <div className="why_container">
            <div className="box">
              <div className="img-box">
                <img src="images/w1.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Payment Gateway</h5>
                <p>
                  Our payment solutions give businesses in India easy and sustainable ways to make and collect payments anywhere in the world.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/w2.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Mobile Wallet</h5>
                <p>
                  Our wallet solutions create a unique experience that enables the unbanked and underbanked to access banking and payment services on their phone numbers.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/w3.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Agent Banking</h5>
                <p>
                  Our agent banking solutions enable banks and non-bank financial service providers to extend their services into new and emerging markets.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/w4.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Customer Support</h5>
                <p>24/7 Support.</p>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="">Read More</a>
          </div>
        </div>
      </section>
      {/* End Why Section */}

      

    

    </div>
  );
};

export default WhyUs;
