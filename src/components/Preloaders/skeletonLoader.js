import React from 'react';
import { Skeleton } from '@material-ui/lab';

const SkeletonLoader = (props) => {

    const number = props.number;
    let numberToShow = [];
    for(let i=0;i<number;i++){
        numberToShow.push(i)
    } 

    return ( 
        <>
        <div className='container mt-n5 d-none d-lg-block'>
            <div className='row'>
               {numberToShow.map(()=>(
                    <div  className={`col-${12/number}`}>
                        <Skeleton height='30em' />
                    </div>
               ))}
            </div>
            { props.where === 'listings' ?  
            <div className='row mt-n5'>
               {numberToShow.map(()=>(
                    <div className={`col-${12/number}`}>
                        <Skeleton height='30em' />
                    </div>
               ))}
            </div> : null }
        </div>
        <div className='container mt-n5 d-lg-none d-block'>
            <div className='row'>
                <div className='col-6'>
                    <Skeleton height='25em' />
                </div>
                <div className='col-6'>
                    <Skeleton height='25em' />
                </div>
            </div>
        </div>
    </>
    );
}
 
export default SkeletonLoader;