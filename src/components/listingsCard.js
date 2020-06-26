import React, { useState } from "react";
import { Avatar, Tooltip } from "@material-ui/core";
import { Popover, PopoverBody } from 'reactstrap';

//css
import '../css/card.css';

const ListingsCard = (props) => {
    let title = props.data.name;
    if(title.length>30){
      title = title.slice(0,30) + "..."; }
      
    let location = props.data.address;
    if(location.length>40){
      location = location.slice(0,26) + ".."; }

    let datePosted = (Date(props.data.date).toLocaleString().slice(0,15))

    let badge = true;
    if(props.data.type!=='Second Hand Product' && props.data.plan !== "basic" && props.data.activePlan === true){
      badge = true;
    }

    const [popupOpen, setPopupOpen] = useState(false);

    const handlePopupOpen = () => {
        setPopupOpen(true)
    }

    const handlePopupClose = () => {
      setPopupOpen(false);
    }

    return ( 
      <>
         {badge ? (
          <div className="bnb-card-plan-badge mr-3">
            {props.data.plan ? <Tooltip title={props.data.plan.toUpperCase()}> 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
              fill={props.data.plan === "partner" ? "#e6be8a" : "#66b266"}
            >
              <g>
                <rect fill="none" height="24" width="24" />
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <path d="M23,12l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,12l2.44,2.79l-0.34,3.7 l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,12z M9.38,16.01L7,13.61c-0.39-0.39-0.39-1.02,0-1.41 l0.07-0.07c0.39-0.39,1.03-0.39,1.42,0l1.61,1.62l5.15-5.16c0.39-0.39,1.03-0.39,1.42,0l0.07,0.07c0.39,0.39,0.39,1.02,0,1.41 l-5.92,5.94C10.41,16.4,9.78,16.4,9.38,16.01z" />
              </g>
            </svg>
            </Tooltip> : null }
          </div>
        ) : (
          ""
        )}
        <div className='col-md-3 col-6 mb-4 product-card' style={{zIndex: 0}}>
          <div className="bnb-card">
            <div>
              <a href={`/productdetails/${props.category}/${props.data.id}`} ><img
                src={props.data.images.length>0?props.data.images[0]:'https://via.placeholder.com/150'}
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
                <a className='product-name' style={{textDecoration:'none'}} href={`/pgdetails/${props.data.productId}`} >{title}</a>
              </h6>
              {props.data.type === 'Second Hand Product' ? 
                <div className='product-category'>
                  <p>(<span className='product-cat'>{props.data.category}</span>)</p>
                </div> : 
                <div className='product-rating'>
                <p><span className='product-rating fa fa-star'>{props.data.avgRating}</span></p>
                </div>
              }

              <div className='bnb-card-sub product-price'><span className='fa fa-rupee-sign listings-card-icon' /> {parseInt(props.data.price,10)} </div>
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
      </> 
    );
  }


export default ListingsCard;
