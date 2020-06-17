import React, { Component } from "react";
import Slider from "react-slick";

var big_settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
}

var small_settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    focusOnSelect: true
}

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
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div>
        <Slider className='gallery_big'
            ref={slider => (this.slider1 = slider)} 
            asNavFor={this.state.nav2}  {...big_settings}>
                {this.props.images.map((image)=>(
                    <div class="single_img">
                    <img src={image} alt="" />
                </div>
                ))}
            
            {/* <div class="single_img">
                <img src="/assets/images/gallery_2.jpg" class="img-fluid" alt="" />
            </div>
            <div class="single_img">
                <img src="/assets/images/gallery_3.jpg" class="img-fluid" alt="" />
            </div>
            <div class="single_img">
                <img src="/assets/images/gallery_4.jpg" class="img-fluid" alt="" />
            </div>
            <div class="single_img">
                <img src="/assets/images/gallery_5.jpg" class="img-fluid" alt="" />
            </div> */}
        </Slider>

        <Slider className='gallery_small'
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)} {...small_settings}>
            <div class="single_img">
                <img src={this.props.images[0]} alt="" />
            </div>
            <div class="single_img">
                <img src={this.props.images[1]} alt="" />
            </div>
            <div class="single_img">
                <img src="/assets/images/g_3.jpg" alt="" />
            </div>
            <div class="single_img">
                <img src="/assets/images/g_4.jpg" alt="" />
            </div>
            <div class="single_img">
                <img src="/assets/images/g_5.jpg" alt="" />
            </div>
        </Slider>
      </div>
    );
  }
}