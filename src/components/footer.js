import React from 'react';

function Footer(props) {
    return(
        <footer
        className="listghor_foooter foooter_v2 bg_image"
        style={{ backgroundImage: "url(assets/images/footer_bg_1.jpg)" }}
      >
        <div className="listghor_overlay" />
        <div className="container">
          <div className="footer_widget_wrapper">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="widget_box about_widget wow fadeInUp">
                  <div className="widget_title">
                    <h2 style={{color:'white'}}>YEHLO</h2>
                  </div>
                  <div className="widget_content">
                    <p>
                      Lorem Ipsum is simply duammy text of the printing
                      aadnd type an setting industry.{" "}
                    </p>
                    <ul className="social_link">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-google-plus-g" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-12">
                <div className="widget_box widget_link wow fadeInUp">
                  <div className="widget_title">
                    <h4>Useful Links</h4>
                  </div>
                  <ul className="widget_list">
                    <li>
                      <a href="#">Categories</a>
                    </li>
                    <li>
                      <a href="#">Listing</a>
                    </li>
                    <li>
                      <a href="#">Testmonial</a>
                    </li>
                    <li>
                      <a href="#">Appointment</a>
                    </li>
                    <li>
                      <a href="#">Blog Post</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12">
                <div className="widget_box widget_link wow fadeInUp">
                  <div className="widget_title">
                    <h4>About us</h4>
                  </div>
                  <ul className="widget_list">
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Expert Team</a>
                    </li>
                    <li>
                      <a href="#">Review</a>
                    </li>
                    <li>
                      <a href="#">Faq Question</a>
                    </li>
                    <li>
                      <a href="#">Blog Post</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="widget_box contact_widget wow fadeInUp">
                  <div className="widget_title">
                    <h4>Contact Us</h4>
                  </div>
                  <div className="contact_list">
                    <div className="list_icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="list_info">
                      <p>
                        {" "}
                        Netaji Subhas University of Technology <br />
                        Dwarka, New Delhi
                      </p>
                    </div>
                  </div>
                  <div className="contact_list">
                    <div className="list_icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="list_info">
                      <p>
                        <a href="mailto:listghortemplete@gmail.com">
                          listghortemplete@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="contact_list">
                    <div className="list_icon">
                      <i className="fas fa-phone" />
                    </div>
                    <div className="list_info">
                      <p>
                        <a href="tel:3837389227717">3837 3892 27717</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_copyright">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="copyright_text">
                  <p>Copyright © 2020 YEHLO</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="copyright_link">
                  <ul>
                    <li>
                      <a href="#">Privace &amp; Policy</a>
                    </li>
                    <li>
                      <a href="#">Faq</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;