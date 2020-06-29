import React, { Component } from "react";
import Tooltip from '@material-ui/core/Tooltip';
import "../../css/card.css";

class Card extends Component {
  render() {
    let { name, images, district, price, type, plan, activePlan, avgRating, section, id } = !this.props.details
      ? { name: "", images: [], district: "", price: "", type: "", activePlan: "", avgRating:"", section:"", id:"" }
      : this.props.details;

      let badge = false;
      if(type !== "Second Hand Product" && plan !== "basic" && activePlan === true){
        badge = true;
      }

      if(price && type !== "Second Hand Product"){
        price += "/month"
      }

    //temporary fix until database is sorted
    images = images ? images : [];
    return (
      <a href={`/productdetails/${section}/${id}`}>
        <div className="bnb-card">
        {badge ? (
          <div className="bnb-card-plan-badge">
            <Tooltip title={plan.toUpperCase()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
              fill={plan === "partner" ? "#e6be8a" : "#66b266"}
            >
              <g>
                <rect fill="none" height="24" width="24" />
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <path d="M23,12l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,12l2.44,2.79l-0.34,3.7 l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,12z M9.38,16.01L7,13.61c-0.39-0.39-0.39-1.02,0-1.41 l0.07-0.07c0.39-0.39,1.03-0.39,1.42,0l1.61,1.62l5.15-5.16c0.39-0.39,1.03-0.39,1.42,0l0.07,0.07c0.39,0.39,0.39,1.02,0,1.41 l-5.92,5.94C10.41,16.4,9.78,16.4,9.38,16.01z" />
              </g>
            </svg>
            </Tooltip>
          </div>
        ) : (
          ""
        )}
        <div style={{ height: "70%" }}>
          <img
            src={
              images.length
                ? images[0]
                : "https://www.ajactraining.org/wp-content/uploads/2019/09/image-placeholder.jpg"
            }
            alt=""
            className="bnb-card-image"
          />
        </div>
        <div className="pl-1 pr-2 mt-2 bnb-card-desc">
          <div
            className="bnb-card-sub mb-1"
            style={{ color: "rgba(0,0,0,0.8)" }}
          >
            {district ? district : "Dwarka, New Delhi"}
          </div>
          <div className="bnb-card-title">
            {name ? name : "Farm to Table from the Mediterranean"}
          </div>
          <div className="bnb-card-sub">
            {price ? `Rs. ${price}` : "Rs. 1,153/month"}
          </div>
          {type !== "Second Hand Product" ? (
            <div className="bnb-card-sub" style={{ display: "flex" }}>
              <svg
                className="bi bi-star-fill mr-1 bnb-card-star-icon"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>

          <span>{avgRating ? avgRating: 4.3}</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </a>
      );
  }
}

export default Card;
