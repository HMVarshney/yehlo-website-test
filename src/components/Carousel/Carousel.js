import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";

//components
import Card from "../Card";

//styles
// import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export class Carousel extends Component {
  render() {

    let items = () =>{
      let width = window.innerWidth
      if(width < 768){
        return 2;
      }
      else if(width < 992){
        return 3;
      }
      else{
        return 4;
      }
    }

    return (
      <div>
        <div class="container-fluid home">
          <OwlCarousel
            items={items()}
            className="owl-theme"
            loop
            responsive={false}
            margin={12}
            nav
            dots={false}
            navText={[
              `<svg class="bi bi-arrow-left" width="3em" height="3em" viewBox="0 0 16 16" fill="initial" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
  <path fill-rule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>`,
              `<svg class="bi bi-arrow-right" width="3em" height="3em" viewBox="0 0 16 16" fill="initial" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
</svg>`,
            ]}
          >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Carousel;
