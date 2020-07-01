import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";

//components
import Card from "./Card";

//styles
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "../../css/owl.css";
import TeamCard from "./TeamCard";

export class Carousel extends Component {
  render() {
    let carouselCards =
      this.props.items 
      // && this.props.items.length >= 4
        ? this.props.items.map((item, index) => {
            return <Card details={item} key={index} />;
          })
        : [
            <Card key={1} />,
            <Card key={2} />,
            <Card key={3} />,
            <Card key={4} />,
            <Card key={5} />,
            <Card key={6} />,
            <Card key={7} />,
            <Card key={8} />,
          ];
    return (
      <div>
        <div className="container-fluid home">
          <OwlCarousel
            className="owl-theme"
            loop
            responsive={{
              1200: {
                items: 4,
              },
              768: {
                items: 3,
              },
              0: {
                items: 2,
              },
            }}
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
                        {this.props.team ? (
              <>
               <TeamCard/>
               <TeamCard/>
               <TeamCard/>
               <TeamCard/>
               <TeamCard/>
              </>
            ):
            carouselCards}
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Carousel;
