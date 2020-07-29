import React, { useState, useEffect, useContext } from 'react';
import { MainContext } from '../../context/context-provider/mainContext';
import { Typography, Paper } from '@material-ui/core';

//css
import '../../css/adsListings.css'
import { Fade, Zoom, Slide } from 'react-reveal';
import { Link } from 'react-router-dom';

const RenderResults = (props) => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    if(props.items.length === 0){
        return(
            <div style={{height:'50vh'}} className='row justify-content-center align-items-center'>
                <Typography variant='h3' color='error'>No results found!</Typography>
            </div>
        );
    }
    return(
        <>
        <br />
        <div className='masonry-grid row mt-5'>
            {props.items.map((item,i)=>(
                <Zoom when={imagesLoaded}>
                <div key={i} className='card col-6 col-md-4 col-lg-3'>
                    {/* <div className='front'>
                        <img className='ad-image' onLoad={()=>setImagesLoaded(true)} width='100%' src={item.images[0]} alt='ad' />
                    </div>
                    <div className='back'>
                        <div className='back-content middle'>
                            <Link to='/'>
                                <Typography variant='body2' color='textPrimary'>{item.name}</Typography>
                            </Link>
                            <Typography variant='caption' color='textSecondary'>{item.description}</Typography>
                        </div>

                    </div> */}
                    <img className='ad-image' onLoad={()=>setImagesLoaded(true)} width='100%' src={item.images[0]} alt='ad' />
                    <div className='content'>
                        <Slide bottom duration={600}>
                        <Link to='/'>
                            <Typography variant='body2' color='textPrimary'>{item.name}</Typography>
                        </Link>
                        <Typography variant='caption' color='textSecondary'>{item.description}</Typography>
                        </Slide>
                    </div>
                </div>
                </Zoom>
            ))}
        </div>
        </>
    );
}

const InstantSearch = () => {
    const { sponsered } = useContext(MainContext);

    const [query, setQuery] = useState('');
    const [filteredItems, filterItems] = useState(null);

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    };

    useEffect(()=>{
        if(query!==''){
            const filtered = sponsered.filter((item)=>{
                return item.name.toLowerCase().includes(query.toLowerCase());
            });
            filterItems(filtered);
        } else {
            filterItems(null);
        }
    },[query, sponsered]);

    return ( 
        <>
        <div className='text-center mt-5'>
            <Typography variant='h4' color='textPrimary'>ADS Listings</Typography>
        </div>
        <Fade>
            <div className='container instant-search mt-5'>
                <div className='search-bar'>
                    <Paper elevation={3} style={{borderRadius:'10px'}}>
                        <input value={query} onChange={(e)=>handleQueryChange(e)} placeholder='Search' />
                    </Paper>
                </div>
                <div className='results'>
                    <RenderResults items={filteredItems ? filteredItems : sponsered} />
                </div>
            </div>
        </Fade>
        </>
    );
}
 
export default InstantSearch;