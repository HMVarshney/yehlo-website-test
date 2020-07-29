import React, { useEffect, useState } from 'react';
import ListingsCard from './listingsCard.js';
import Isotope from 'isotope-layout';
import imagesloaded from 'imagesloaded';

const RenderListings = (props) => {
    const { productToShow, category, sort } = props;
    const [isotope, setIsotope] = useState(null);

    // useEffect(()=>{
    //     imagesloaded(document.querySelector('.product-grid'),()=>{
    //         setIsotope(new Isotope('.product-grid',{
    //             itemSelector: '.product-card',
    //             sortAscending: {
    //                 rating: false,
    //                 price: true,
    //                 name: true,
    //                 category: true,
    //             },
    //             getSortData: {
    //                 name: '.product-name',
    //                 price: '.product-price parseInt',
    //                 category: '.product-cat',
    //                 rating: '.product-rating'
    //             },
    //             sortBy:{sort}
    //         }))
    //     })
    // },[sort]);

    // useEffect(()=>{
    //     if(isotope){
    //         isotope.arrange({sortBy:`${sort}`})
    //     }
    // },[isotope, sort]);

    

    return ( 
        <> 
        <div className='product-grid mb-5 row'>
            {
            productToShow.map((productData)=>(
                <ListingsCard 
                    key={productData.id} 
                    data={productData} 
                    id={productData.id} 
                    category={category} 
                    // imagesLoaded={imagesLoaded}
                    // setImagesLoaded={setImagesLoaded}
                />
            ))
            }
        </div>
        </>
    );
}
 
export default RenderListings;