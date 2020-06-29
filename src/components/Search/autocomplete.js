import React from 'react';
import { Autocomplete } from '@material-ui/lab';

const AutocompleteBox = () => {
    return ( 
        <div className='search_box'>
            <Autocomplete
                options={collegeList.length > 0 ? collegeList : null}
                getOptionLabel={(option) => option.name}
                fullWidth={true}
                onChange={(event)=>setSearchAttr({...searchAttr, college: collegeList.filter((college)=>college.name===event.target.innerHTML)[0]})}
                renderInput={(params) => <TextField
                    value={searchAttr.college.name} 
                    onChange={(event)=>setSearchAttr({...searchAttr, college: collegeList.filter((college)=>college.name===event.target.innerHTML)[0]})}
                    onKeyUp={(event)=>{
                        if(event.keyCode === 13){
                            setSearchAttr({...searchAttr, college: collegeList.filter((college)=>college.name===event.target.innerHTML)[0]})
                        }
                    }} {...params} label="College Search.." variant="outlined" />} 
            />
        </div>
     );
}
 
export default AutocompleteBox;