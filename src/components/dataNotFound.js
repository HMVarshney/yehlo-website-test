import React from 'react';
import { Typography } from '@material-ui/core';

const NoData = () => {
    return ( 
        <div className='container mt-n5 mb-2'>
            <div className='row justify-content-center align-items-center'>
                <div className='col-8'>
                    <img width='100%' src='/assets/images/animated/noData_2.jpg' alt='no data found' />
                </div>
                <div className='col-4'>
                    <img width='20%' src="https://img.icons8.com/cute-clipart/64/000000/nothing-found.png" alt='no data found' />
                    <Typography variant='h5'>No relevant data found. Keep Searching!</Typography>
                </div>
            </div>
        </div>
     );
}
 
export default NoData;