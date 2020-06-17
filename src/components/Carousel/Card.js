import React, { Component } from "react";
import "../../css/card.css";
class Card extends Component {
  render() {
    let title = "Farm to Table from the Mediterranean";
    return (
      <div className="bnb-card">
        <div style={{ height: "70%" }}>
          <img
            src="https://www.ajactraining.org/wp-content/uploads/2019/09/image-placeholder.jpg"
            alt=""
            className="bnb-card-image"
          />
        </div>
        <div className="pl-1 pr-2 mt-2 bnb-card-desc">
          <div
            className="bnb-card-sub mb-1"
            style={{ color: "rgba(0,0,0,0.8)" }}
          >
            Dwarka, New Delhi
          </div>
          <div className="bnb-card-title">{title}</div>
          <div className="bnb-card-sub"> ₹1,153/month</div>
          <div className="bnb-card-sub" style={{display:"flex"}}>
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

            <span>4.99 (277)</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
