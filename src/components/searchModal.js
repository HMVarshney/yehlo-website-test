import React, {useState} from 'react';
import {Grid, FormControl, NativeSelect, Typography, Box, Tabs, Tab, Button, Slider, FormControlLabel, Checkbox, withStyles} from '@material-ui/core';
import {Card, CardBody, CardText, CardTitle, CardSubtitle, Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';

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

const cities = ['Dwarka', 'Karol Bagh', 'North Campus', 'South Campus'];

const SearchModal = (props) => {
    const [tabActive, setTabActive] = useState(0);
    const [checkbox, setChecked] = useState({
        buy: true,
        pg: true,
        services: true,
    })

    const handleCheckboxChange = (event) => {
        setChecked({...checkbox, [event.target.name]: event.target.checked});
    }

    const handleTabChange = (e,newValue) => {
        setTabActive(newValue);
    }

    const SearchUI = (props) => {
        return(
            props.data.map((city) => (
            <Card className='mt-2'>
                <CardBody>
                    <Grid container spacing={0}>
                        <Grid item xs={6}><img width='40%' src='assets/images/g_3.jpg' /></Grid>
                        <Grid item xs={6}>
                            <CardTitle><h6>The Green Apartments</h6></CardTitle>
                            <CardSubtitle>{city}</CardSubtitle>
                            <CardText>Perfect for College Students</CardText>
                        </Grid>
                    </Grid>
                </CardBody>
            </Card>
        ))
        );
    }

    const TabPanel = (props) => {
        const {value, index} = props;
        const [citySelected, changeCity] = useState(null);
        const [sliderValue, setSliderValue] = useState([0,5000]);
        const [collegeDropdownOpen, setDropdownOpen] = useState(false);

        // const CollegeBox = (props) => {
        //    if(props.show){
        //        return(
        //            <Box>
        //                Relavant college list rendered here
        //            </Box>
        //        );
        //    }
        //    return null;
        // }
        return(
            value === index && <Box component='div' p={3}>
                {index === 0 && 
                <>
                    <div>
                        <FormControlLabel control={<Checkbox name='pg' checked={checkbox.pg} onChange={handleCheckboxChange} color='primary' />} label='PGs'/>
                        <br />
                        <FormControlLabel control={<Checkbox name='buy' checked={checkbox.buy} onChange={handleCheckboxChange} color='primary' />} label='Second Hand Products'/>
                        <br />
                        <FormControlLabel control={<Checkbox name='services' checked={checkbox.services} onChange={handleCheckboxChange} color='primary' />} label='Yehlo Services'/>
                    </div>
                </>
                }
                {index === 1 &&
                <>
                    <FormControl>
                        <NativeSelect onChange={(e)=>changeCity(e.target.value)}>
                            <option value=''>Select</option>
                            {cities.map((city, i) => <option key={i} value={city}>{city}</option>)}
                        </NativeSelect>
                    </FormControl>
                {citySelected ? 
                <SearchUI data={cities} /> : null}
                </> }

                {index === 2 && 
                    <>
                        <Typography>Price Range: </Typography>
                        <div style={{width:'50%'}}>
                            <Slider value={sliderValue} onChange={(e,newValue)=>setSliderValue(newValue)}
                            aria-labelledby="range-slider" valueLabelDisplay='auto' step={500}  max={10000} /> 
                        </div>
                    </>
                }
            </Box>
        );
    }

    return(
        <Modal size='lg' isOpen={props.modalOpen} toggle={()=>props.setModalOpen(!props.modalOpen)}>
            <div className='search-modal'>
            <ModalHeader className='row justify-content-center'><h4 className='search_text'>What are you looking for?</h4></ModalHeader>
                <ModalBody>
                    <Tabs value={tabActive} onChange={handleTabChange}>
                        <Tab label='Categories' />
                        <Tab label='Location'/>
                        <Tab label='Budget'/>
                    </Tabs>
                    <TabPanel value={tabActive} index={0} />
                    <TabPanel value={tabActive} index={1} />
                    <TabPanel value={tabActive} index={2} />
                </ModalBody>
                <ModalFooter>
                    <Button href='/listings' variant='contained' color='primary'><span className='fa fa-search'/> Search</Button>
                </ModalFooter>
            </div>
        </Modal>
    );
}

export default SearchModal;