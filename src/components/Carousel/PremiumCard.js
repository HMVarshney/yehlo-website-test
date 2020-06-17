import React from "react";
import {
  Card,
  CardImg,
} from "reactstrap";

const PremiumCard = (props) => {
  return (
    <div style={{ height: "inherit" }}>
      <Card style={{ height: "inherit" }}>
        <CardImg
          top
          src="https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg"
          alt="Card image cap"
          style={{ height: "inherit", objectFit: "cover" }}
        />
      </Card>
    </div>
  );
};

export default PremiumCard;
