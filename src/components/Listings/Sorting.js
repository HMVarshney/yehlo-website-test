import React from 'react';
import { FormControl, TextField, MenuItem, Button } from '@material-ui/core';

//css
import '../../css/sort-handler.css'

const SortHandler = (props) => {
    const { sort, sortReverse, setSort, category } = props;

    return ( 
        <div className='sort-handler'>
            {/* <div className='sort-select col-lg-7'> */}
                <FormControl style={{margin:'15px 0px 0px 0px', width:'100px'}} variant='outlined'>
                    <TextField size='small' select label='Sort' value={sort} onChange={(e)=>setSort(e.target.value)} variant='outlined'>
                        <MenuItem value=''>None</MenuItem>
                        <MenuItem value='name'>Name</MenuItem>
                        { category !== 'buy' ? <MenuItem value='rating'>Rating</MenuItem> : null}
                        <MenuItem value='price'>Price</MenuItem>
                    </TextField>
                </FormControl> 
            {/* </div>    */}
            {/* <div className='sort-asc-desc col-lg-5'>
                <div className='row'>
                    <span onClick={()=>sortReverse()} ><i className='sort-arrow fa fa-arrow-down fa-sm' /> </span>
                    <span><i className='sort-arrow fa fa-arrow-up fa-sm' /> </span>
                </div>
            </div>  */}
        </div>
     );
}
 
export default SortHandler;