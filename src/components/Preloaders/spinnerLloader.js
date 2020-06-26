import React from 'react';
import { Spinner } from 'reactstrap';
// import { Skeleton } from '@material-ui/lab';

const Spinnerloader = () => {
    return ( 
        <div className='container'>
            <div className='row justify-content-center'>
                    {/* <Skeleton varaint='rect' width='80%' height='800px' /> */}
                    <div style={{margin:'26em 0px'}}>
                        <Spinner color='dark' />
                    </div>
            </div>
        </div>
     );
}
 
export default Spinnerloader;