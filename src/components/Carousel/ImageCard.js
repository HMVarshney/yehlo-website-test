import React from "react";
import {
  Card,
  CardImg,
} from "reactstrap";

const ImageCard = (props) => {
  let { premiumImage, id, section} = !props.details
      ? { premiumImage: [], section:"", id:""}
      : props.details;
  
  let jump = props.static ? "" : `/productdetails/${section}/${id}`
  
  return (
    <a href={jump} style={{textDecoration:"none", color:"unset"}}>
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
    </a>
  );
};

export default ImageCard;
