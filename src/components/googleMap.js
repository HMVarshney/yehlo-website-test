import React, { useState, useCallback, useRef } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxOption, ComboboxList, ComboboxOptionText } from '@reach/combobox';
import { IconButton, Tooltip } from '@material-ui/core';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

//css
import '../css/map.css';
import "@reach/combobox/styles.css";

//icons
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import LocationDisabledIcon from '@material-ui/icons/LocationDisabled';

const libraries = ['places'];
const mapContainerStyle = {
    width:'100%', height: '70vh'
};
const mapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
};
const center = {
    lat: 28.5273342, lng: 77.2090212
};

export default function MapContainer(props){

    const [markers, setMarkers] = useState([]);
    const [selectedMarker, setSelected] = useState(null);
    const [currentPlaceStatus, setPlaceStatus] = useState({message:'Let us pick up your current location', status:false});

    const { setSearchAttr } = props;

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBJkuK4zLuPXuBdSpf-43nV09rX6gkcmzs',
        libraries: libraries,
    });

    // const onMapClick = useCallback((event)=>{
    //     if(event!==null){
    //         setMarkers([
    //         {lat: event.latLng.lat(), lng: event.latLng.lng(), time: new Date()}
    //         ]);
    //         setSearchAttr((current)=>({
    //             ...current, place:{name:'Custom Location', location:{lat: event.latLng.lat(), lng: event.latLng.lng()}}
    //         }))
    //     }},
    // []);

    const mapRef = useRef();
    const onMapLoad = useCallback((map)=>{
        mapRef.current = map;
    },[]);

    const panTo = useCallback(({ lat, lng })=>{
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(14);
    },[])

    const getCurrentLocation = useCallback(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            setSearchAttr((current)=>({
                ...current, 
                place: {name: 'Your current location', location:{lat: position.coords.latitude, lng: position.coords.longitude}}
            }));
            setPlaceStatus({message: 'Using your current location', status: true})
        }, (error)=>{setPlaceStatus({message: error.message, status: false})})
    },[]);

    if(loadError){ 
        return 'Error Loading Map';
    } else if(!isLoaded){
        return 'Loading Map...'
    } else {
    return(
        <>
        <Modal isOpen={props.mapOpen} toggle={()=>props.setMapOpen(!props.mapOpen)} size='xl'>
            <ModalHeader toggle={()=>props.setMapOpen(!props.mapOpen)}>
                <div className='row align-items-center map_search_header'>
                    <div>
                        <Search setSearchAttr={setSearchAttr} panTo={panTo} setMarkers={setMarkers} setPlaceStatus={setPlaceStatus}/>
                    </div>
                    <div className='ml-3' style={{position:'absolute', right:'30px'}}>
                        <Tooltip title={currentPlaceStatus.message}>
                            <IconButton onClick={()=>getCurrentLocation()}>
                                {currentPlaceStatus.status ? <LocationSearchingIcon /> : <LocationDisabledIcon />}
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
            </ModalHeader>
            
            <ModalBody>
                <GoogleMap 
                    mapContainerStyle={mapContainerStyle}  
                    zoom={10} 
                    center={center} 
                    onLoad={onMapLoad}
                    options={mapOptions}
                    >
                        {markers.map((marker)=>
                            <Marker onDragEnd={(e)=>console.log(e)} 
                                draggable 
                                key={marker.time.toISOString()} 
                                position={{lat: marker.lat, lng: marker.lng}} 
                                onClick={()=>setSelected(marker)} />)
                        }
                            
                            {selectedMarker && 
                            <InfoWindow position={{lat: selectedMarker.lat, lng: selectedMarker.lng}} onCloseClick={()=>setSelected(null)}>
                                <div>Hey</div>
                            </InfoWindow>}
                </GoogleMap>
            </ModalBody>
        </Modal>       
            
        </>
    );
    }
};

function Search({ panTo, setSearchAttr, setMarkers, setPlaceStatus }){
    const { ready, value, suggestions: {status, data}, setValue, clearSuggestions } = usePlacesAutocomplete({
        requestOptions:{lat: () => 28.608344, lng: ()=> 77.0328173},
        radius: 10 * 1000,
    });

    return(
        <Combobox 
            onSelect={async (address)=>{
                setValue(address, false);
                clearSuggestions();
                try{
                    const place = await getGeocode({address});
                    const { lat, lng } = await getLatLng(place[0]);
                    panTo({lat, lng});
                    setSearchAttr((current)=>({
                        ...current, place:{ name:address, location: {lat, lng} }
                    }));
                    setMarkers([
                        {lat, lng, time: new Date()}
                    ]);
                    setPlaceStatus({message:'Location mode changed', status:false});
                    
                }catch(error){
                    console.log(error);
                }
        }}>
            <ComboboxInput className='search_combobox' value={value} onChange={(event)=>setValue(event.target.value)} disabled={!ready} placeholder='Seach Place' />
            <ComboboxPopover style={{zIndex:'2000'}}>
                <ComboboxList>
                {status === 'OK' && data.map(({id, description})=><ComboboxOption key={id} value={description}>
                    <ComboboxOptionText>
                        {description}    
                    </ComboboxOptionText></ComboboxOption>)}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    );
}