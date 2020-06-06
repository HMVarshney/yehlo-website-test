import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const ProductCardA = (props) => {
  return (
    <div style={{ height: "inherit" }}>
      <Card style={{ height: "inherit" }}>
        <CardImg
          top
          src="https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg"
          alt="Card image cap"
          style={{ height: "inherit", objectFit: "cover" }}
        />
        <CardBody style={{ position: "absolute", bottom: 0 }}>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCardA;
