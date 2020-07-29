import React, { useState, Component } from "react";
import { Typography } from "@material-ui/core";
import { Fade, Zoom } from 'react-reveal';
import { Link } from "react-router-dom";

//css
import '../../css/card.css';

class ListingsCard extends Component {
  state={
    imagesLoaded: false
  }

  render(){
  let title = this.props.data.name;
  if(title.length>18){
    title = title.slice(0,30) + "..."; }
    
  let location = this.props.data.address;
  if(location.length>40){
    location = location.slice(0,26) + ".."; }

  // console.log(this.props.data.distance)  

  return ( 
    <>
      <div className='col-md-3 col-6 product-card'>
        <Fade>
        <div className="bnb-card">
          <div>
            <Link to={`/productdetails/${this.props.category}/${this.props.data.id}`} >
              <Zoom big when={this.state.imagesLoaded}>
                <img
                onLoad={()=>this.setState({imagesLoaded:true})}
                src={this.props.data.images.length>0?this.props.data.images[0]:'https://via.placeholder.com/150'}
                alt=""
                width='100%'
                height='100%'
                className="bnb-card-image mb-2"
                />
              </Zoom>
            </Link>
          </div>
          <div className="pl-1 pr-2 bnb-card-desc">
            {/* <div className='seller-info-circle'>
              <span style={{float:'right'}}>
                <span id={'Popover' + this.props.id} style={{color:'rgba(0,0,0,0.8)'}} 
                  onMouseEnter={handlePopupOpen} onMouseLeave={handlePopupClose} 
                  className='fa fa-info-circle' />
              </span>
            </div>

            <Popover className='popup' isOpen={popupOpen} placement='bottom' target={'Popover' + this.props.id} >
              <PopoverBody>
                  <Avatar src={this.props.data.sellerImage} alt='sellerimage' />
                  <p style={{fontWeight:'bold'}}>Seller Name: {this.props.data.sellerName}</p>
                  <p>Item posted on: {datePosted} </p>
              </PopoverBody>            
            </Popover> */}

            
            <Typography variant='body2' color='textPrimary' className='mb-2'>{this.props.data.district}</Typography>
            <Typography display='inline' variant='body1' className='product-name mr-2' >{title}</Typography>
            {this.props.data.type === 'Second Hand Product' ? 
                <Typography display='inline' className='product-cat' variant='caption' color='textPrimary'>({this.props.data.category})</Typography> 
              : <Typography display='inline' className='product-rating' color='textPrimary' variant='body2'><span className='fa fa-star' /> {this.props.data.avgRating} </Typography>
            }
            <br /><i className='fa fa-sm fa-rupee-sign'/>
            <Typography display='inline' variant='body2' className='product-price' color='textPrimary'>{this.props.data.price}</Typography>
            <span>/month</span>
          </div>
        </div>
        <hr />
        </Fade>
      </div>
    </> 
    );
    }
  }


export default ListingsCard;
