import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const ProductCardB = (props) => {
  return (
    <div>
      <Card style={{ borderRadius: "8px" }}>
        <CardImg
          top
          width="100%"
          src="https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg"
          alt="Card image cap"
          style={{
            borderRadius: "8px",
            maxHeight: "275px",
            objectFit: "cover",
          }}
        />
        <CardBody>
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

export default ProductCardB;
