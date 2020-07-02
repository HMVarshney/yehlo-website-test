import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import PhoneEnabledRoundedIcon from "@material-ui/icons/PhoneEnabledRounded";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";

// styles
import "./css/main.css";

// components
import Navbar from "./Navbar";
import ImageCarousel from "./ImageCarousel";
import FooterPartner from "./Footer";
import TestimonialCarousel from "./TestimonialCarousel";
import GetInTouchForm from "./GetInTouchForm";

// list of variables that'll be nedded
// var {name, tagline, aboutDesc, youtubeLink, images, testimonials, address, latitude, longitude, phoneNo, email}

class PartnerWebsite extends Component {
  render() {
    return (
      <div className="partner-website">
        <Navbar />

        {/* Landing screen */}
        <div className="landing">
          <div className="bg-image-box" style={{}}>
            <div className="overlay-shadow">
              <div className="central-flex-box">
                <h3>Aibaan</h3>
                <div>
                  <Typography style={{ textAlign: "center" }}>
                    The best pg you'll ever find
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="linked-section" id="partner-about-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-description">
                  <h2 className="mb-2">About us</h2>
                  <Typography>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry. Lorem Ipsum has
                      been the industry's standard dummy textLorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry.
                    </p>
                    <br />
                    <p>
                      Leo auctor et ridiculus conubia ultricies quisque? Mauris
                      odio fusce tempus eu potenti non. Sed amet aliquam id
                      nibh, litora gravida. Non posuere dui odio diam vitae
                      felis enim suscipit faucibus fusce aliquam. Justo, pretium
                      erat parturient leo congue sagittis ullamcorper pulvinar
                      ullamcorper orci sagittis gravida. Habitasse cum mi,
                      parturient scelerisque elit. Aliquet praesent erat nostra
                      tellus per nec ullamcorper!
                    </p>
                  </Typography>
                </div>
              </div>
              <div class="col-lg-6">
                <div className="videoWrapper mt-4">
                  <iframe
                    title="video"
                    width="560"
                    height="349"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="linked-inner-section">
              {window.innerWidth > 991 ? (
                <h2>Wanna have a look ?</h2>
              ) : (
                <h3>Wanna have a look ?</h3>
              )}
              <div className={window.innerWidth > 991 ? "pt-5 about-carousel" : "pt-4"}>
                <ImageCarousel />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="linked-section bg-dark" id="partner-testimonial-section">
          <div className="testimonial-heading">
            <h2>What do people say about us ?</h2>
          </div>
          <div className="container">
            <TestimonialCarousel />
          </div>
        </div>

        {/* Location */}
        <div className="linked-section" id="partner-location-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="location-description mb-4">
                  <h2 className="mb-2">Location</h2>
                  <Typography>
                    Netaji Subhas University of Technology, Azad Hind Fauj Marg,
                    Sector - 3 , Dwarka, New Delhi - 110078
                  </Typography>
                </div>
                <div className="location-frame">
                  <iframe
                    title="address"
                    src={`https://maps.google.com/maps?q=28.6078° N, 77.0406° E&z=15&output=embed`}
                  ></iframe>
                </div>
              </div>

              <div class="col-lg-6 location-static-image"></div>
            </div>
          </div>
        </div>

        {/* Contact and Get in Touch */}
        <div className="linked-section bg-dark contact-section" id="partner-contact-section">
          <div className="container">
            <div className="row">
              <div class="col-lg-6">
                <div>
                  <h2 className="mb-2">Contact Us</h2>
                  <div>
                    <div className="contact-prop">
                      <LocationOnRoundedIcon />{" "}
                      <Typography style={{ padding: "0 12px" }}>
                        {" "}
                        Netaji Subhas University of Technology, Azad Hind Fauj
                        Marg, Sector - 3 , Dwarka, New Delhi - 110078
                      </Typography>
                    </div>
                    <div className="contact-prop">
                      <EmailRoundedIcon />{" "}
                      <Typography>aibaanlistings@gmail.com</Typography>
                    </div>
                    <div className="contact-prop">
                      <PhoneEnabledRoundedIcon />{" "}
                      <Typography>3837 3892 27717</Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="get-in-touch-form">
                  <h2 className="mb-2">Get in touch</h2>
                  <GetInTouchForm />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <FooterPartner />
      </div>
    );
  }
}

export default PartnerWebsite;
