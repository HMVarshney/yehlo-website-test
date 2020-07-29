import React from 'react';
import ListingsCard from './listingsCard';
import FlipMove from "react-flip-move";

const RenderListings = (props) => {
    const { productToShow, category } = props;

    return ( 
        <>
        <FlipMove
            className='row'
            staggerDurationBy={30}
            duration={750}
            delay={30}
            >
                {
                productToShow.map((productData)=>(
                    <ListingsCard 
                        key={productData.id} 
                        data={productData} 
                        id={productData.id} 
                        category={category} 
                    />
                ))
                }
        </FlipMove>
        </>
    );
}
 
export default RenderListings;