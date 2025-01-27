import React from 'react';
import './TeamPage.css'; // Assuming you have this CSS file for styling

const TeamPage = () => {
  return (
    <div className="team_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Meet Our <span> Team</span>
          </h2>
        </div>

        <div className="team_container">
          <div className="row">
            {/* Team Member 1 */}
            <div className="col-lg-3 col-sm-6">
              <div className="box">
                <div className="img-box">
                  <img src="images/team-11.jpg" className="img1" alt="Rajkumar Pandey" />
                </div>
                <div className="detail-box">
                  <h5>RAJKUMAR PANDEY</h5>
                  <p>FOUNDER</p>
                </div>
                <div className="social_box">
                  <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="col-lg-3 col-sm-6">
              <div className="box">
                <div className="img-box">
                  <img src="images/team-22.jpg" className="img1" alt="Priyanka Pandey" />
                </div>
                <div className="detail-box">
                  <h5>PRIYANKA PANDEY</h5>
                  <p>CEO</p>
                </div>
                <div className="social_box">
                  <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="col-lg-3 col-sm-6">
              <div className="box">
                <div className="img-box">
                  <img src="images/team-3#.jpg" className="img1" alt="Srinivas" />
                </div>
                <div className="detail-box">
                  <h5>SRINIVAS</h5>
                  <p>COO</p>
                </div>
                <div className="social_box">
                  <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="col-lg-3 col-sm-6">
              <div className="box">
                <div className="img-box">
                  <img src="images/team-4#.jpg" className="img1" alt="Divya Kumari" />
                </div>
                <div className="detail-box">
                  <h5>DIVYA KUMARI</h5>
                  <p>CFO</p>
                </div>
                <div className="social_box">
                  <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
