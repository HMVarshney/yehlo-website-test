import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import { Popover, PopoverBody } from 'reactstrap';

const ListingsCard = (props) => {
    let title = props.data.name;
    if(title.length>30){
      title = title.slice(0,30) + "..."; }
      
    let location = props.data.address;
    if(location.length>40){
      location = location.slice(0,26) + ".."; }
    
    let images = props.data.images;

    let datePosted = (Date(props.data.date).toLocaleString().slice(0,15))

    const [popupOpen, setPopupOpen] = useState(false);

    const handlePopupOpen = () => {
        setPopupOpen(true)
    }

    const handlePopupClose = () => {
      setPopupOpen(false);
    }

    if(images.length!==0){
    return ( 
      <div className='col-md-3 col-6 mb-4' style={{zIndex: 0}}>
        <div className="bnb-card">
          <div>
            <a href={`/pgdetails/${props.data.id}`} ><img
              src={props.data.images[0]}
              alt=""
              width='100%'
              height='100%'
              className="bnb-card-image mb-2"
            /></a>
          </div>
          <div className="pl-1 pr-2 bnb-card-desc">
            <div className='seller-info-circle'>
              <span style={{float:'right'}}>
                <span id={'Popover' + props.id} 
                  onMouseEnter={handlePopupOpen} onMouseLeave={handlePopupClose} 
                  className='fa fa-info-circle' />
              </span>
            </div>

            <Popover className='popup' isOpen={popupOpen} placement='bottom' target={'Popover' + props.id} >
              <PopoverBody>
                  <Avatar src={props.data.sellerImage} alt='sellerimage' />
                  <p style={{fontWeight:'bold'}}>Seller Name: {props.data.sellerName}</p>
                  <p>Item posted on: {datePosted} </p>
              </PopoverBody>            
            </Popover>

            <h6 className="listings-card-title">
              <a style={{textDecoration:'none'}} href={`/pgdetails/${props.data.productId}`} >{title}</a>
            </h6>
            <div className='product-category'>
              <p>({props.data.category})</p>
            </div>
            <div className='bnb-card-sub'><span className='fa fa-rupee-sign listings-card-icon' /> {props.data.price} </div>
            <div className='bnb-card-sub'><span className='fa fa-location-arrow listings-card-icon' /> {location} </div>
            {/* <div className="bnb-card-rating">
              <svg
                className="bi bi-star-fill mr-1 bnb-card-star-icon"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <span>4.99 (277)</span>
            </div> */}
          </div>
        </div>
        <hr />
      </div> 
    );} else {
      return null;
    }
  }


export default ListingsCard;
