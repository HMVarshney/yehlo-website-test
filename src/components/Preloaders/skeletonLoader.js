import React from 'react';
import { Skeleton } from '@material-ui/lab';

const SkeletonLoader = () => {
    return ( 
        <div className='container mt-n5'>
                <Skeleton height='30em' />
        </div>
     );
}
 
export default SkeletonLoader;