import React, { Component } from "react";
import Slider from "react-slick";

var big_settings = {
  dots: true,
  infinite: true,
  arrows: true,
  autoplay: false,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow:"",
  prevArrow:""
};

var small_settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  swipeToSlide:true,
  dots: false,
  arrows: false,
  focusOnSelect: true,
};

export default class SlickSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });

    let prev = document.getElementsByClassName("slick-prev")[0];
    if (prev) {
      prev.innerHTML = `<svg class="bi bi-arrow-left" width="2.4em" height="2.4em" viewBox="0 0 16 16" fill="initial" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
    <path fill-rule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
  </svg>`;
    }
    let next = document.getElementsByClassName("slick-next")[0];
    if (next) {
      next.innerHTML = `<svg class="bi bi-arrow-right" width="2.4em" height="2.4em" viewBox="0 0 16 16" fill="initial" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
</svg>`;
    }
  }

  render() {
    let smImages = this.props.images.map((im) => (
      <div class="single_img">
        <img src={im} alt="" />
      </div>
    ));

    small_settings.slidesToShow =
      this.props.images.length < 4 ? this.props.images.length : 4;

    return (
      <div>
        <Slider
          className="gallery_big"
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
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
