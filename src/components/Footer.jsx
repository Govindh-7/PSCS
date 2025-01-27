import React from 'react';

const Footer = () => {
  return (
    <section className="info_section layout_padding2">
      <div className="container">
        <div className="row">
          {/* Address Section */}
          <div className="col-md-6 col-lg-3 info_col">
            <div className="info_contact">
              <h4>Address</h4>
              <div className="contact_link_box">
                <a href="">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Location</span>
                </a>
                <a href="">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>Call +91 8790505915</span>
                </a>
                <a href="">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>Suraj@pscsltd.com</span>
                </a>
              </div>
            </div>
            {/* Social Media Icons */}
            <div className="info_social">
              <a href="">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* Info Section */}
          <div className="col-md-6 col-lg-3 info_col">
            <div className="info_detail">
              <h4>Info</h4>
              <p>We deliver a fee-sharing model that does not require capital investments.</p>
            </div>
          </div>

          {/* Links Section */}
          <div className="col-md-6 col-lg-2 mx-auto info_col">
            <div className="info_link_box">
              <h4>Links</h4>
              <div className="info_links">
                <a className="active" href="index.html">
                  Home
                </a>
                <a href="about.html">About</a>
                <a href="service.html">Services</a>
                <a href="why.html">Why Us</a>
                <a href="team.html">Team</a>
              </div>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="col-md-6 col-lg-3 info_col">
            <h4>Subscribe</h4>
            <form action="#">
              <input type="text" placeholder="Enter email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
