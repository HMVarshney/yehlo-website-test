import React, { Component } from "react";
import Slider from "react-slick";
// import "../css/slider.css";
var big_settings = {
  dots: true,
  infinite: true,
  arrows: false,
  autoplay: false,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
};

var small_settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  focusOnSelect: true,
};

export default class SlickSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    let smImages = this.props.images.map((im) => (
      <div class="single_img">
        <img src={im} alt="" />
      </div>
    ));

    small_settings.slidesToShow = this.props.images.length < 4 ? this.props.images.length : 4

    return (
      <div>
        <Slider
          className="gallery_big"
          ref={(slider) => (this.slider1 = slider)}
          asNavFor={this.state.nav2}
          {...big_settings}
        >
          {this.props.images.map((image) => (
            <div className="single_img">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  style={{ maxHeight: "325px", width: "auto" }}
                  src={image}
                  alt=""
                  className="desc-carousel-main-img"
                />
              </div>
            </div>
          ))}
        </Slider>

        <Slider
          className="gallery_small"
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          {...small_settings}
        >
         {smImages}
        </Slider>
      </div>
    );
  }
}
