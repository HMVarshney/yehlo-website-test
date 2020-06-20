import React, { useState } from 'react';

function SearchBase(ChildComp){
    return(
        function Child(ownProps)
        {
            const [searchAttr, setSearchAttr] = useState({
                college:'',
                priceValue:[0,20000],
                category: 'all',
            });

            return(
                <ChildComp 
                    searchAttr={searchAttr} 
                    setSearchAttr={(changes)=>setSearchAttr(changes)} 
                    collegeList={collegeList}
                    categoryLabels={categoryLabels}
                    {...ownProps}
                        />
            );
        }
    );
}
 
export default SearchBase;


const categoryLabels = ['all','pg', 'services', 'second hand'];


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
