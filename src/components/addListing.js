import React from 'react';

const AddListingForm = () => {
    return ( 
        <>
        <img src='assets/images/logo.png' /> <br />
        <img src='assets/images/logo.png' /> <br />
        <img src='assets/images/logo.png' />
        <img src='assets/images/logo.png' />
            <form onSubmit={(e)=>{console.log('submit'); e.preventDefault()}}>
                <label htmlFor='name'> Name: </label>
                <input type='text' id='name' name='name' />
                <input type='submit' value='Submit' />
            </form>
        </>
     );
}
 
export default AddListingForm;