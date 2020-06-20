import React from 'react';
import {Autocomplete} from '@material-ui/lab';
import {TextField} from '@material-ui/core';

const SponseredListings = () => {
    return ( 
        <div className='container mt-5'>
            <div className='row justify-content-center mt-5'>
                <h3>Sponsered Listings</h3>
            </div>
            <div className='row justify-content-center mt-5'>
                <div className='col-8'>
                    <Autocomplete
                        options={collegeList}
                        getOptionLabel={(option) => option}
                        renderInput={(params) => <TextField fullWidth {...params} label="Combo box" variant="outlined" />}
                    />
                </div>
            </div>
        </div>
     );
}
 
export default SponseredListings;

const collegeList = [ 'Acharya Narendra Dev College',
                        'Aditi Mahavidyalaya',
                        'Ahilya Bai College of Nursing',
                        'Amar Jyoti Institute of Physiotherapy',
                        'Aryabhatta College',
                        'Atma Ram Sanatan Dharma College',
                        'Ayurvedic & Unani Tibia College',
                        'Bhagini Nivedita College',
                        'Bharati College',
                        'Bhaskaracharya College of Applied Sciences',
                        'Bhim Rao Ambedkar College',
                        'Chacha Nehru Bal Chikitsalaya',
                        'College of Art',
                        'College of Nursing at Army Hospital',
                        'College of Vocational Studies',
                        'Daulat Ram College',
                        'Deen Dayal Upadhyaya College',
                        'Delhi College of Arts & Commerce',
                        'Delhi Institute of Pharmaceutical Sciences and Research'
                    ];