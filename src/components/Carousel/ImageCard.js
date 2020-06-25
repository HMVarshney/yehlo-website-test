import React from "react";
import {
  Card,
  CardImg,
} from "reactstrap";

const ImageCard = (props) => {
  let { premiumImage,} = !props.details
      ? { premiumImage: [],}
      : props.details;

  return (
    <div style={{ height: "inherit" }}>
      <Card style={{ height: "inherit" }}>
        <CardImg
          top
          src={ premiumImage.length
            ? premiumImage[0]
            : "https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg"}
          alt="Card image cap"
          style={{ height: "inherit", objectFit: "cover" }}
        />
      </Card>
    </div>
  );
};

export default ImageCard;
