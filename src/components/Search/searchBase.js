import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

function SearchBase(ChildComp){
    return(
        function Child(ownProps)
        {
            const [searchAttr, setSearchAttr] = useState({
                place:{
                    name:'',
                    location: {lat:null, lng:null}
                },
                priceValue:[0,20000],
                category: 'pg',
            });

            //styles
            const buttonStyle = buttonStyles();
            const textfield = textfieldstyles();
            const paperStyle = paperStyles();
            const tagStyle = tagStyles(); 
            const sliderStyle = sliderStyles();

            return(
                <ChildComp
                    searchAttr={searchAttr} 
                    setSearchAttr={(changes)=>setSearchAttr(changes)} 
                    categoryLabels={categoryLabels}
                    styles = {{buttonStyle, paperStyle, tagStyle, sliderStyle, textfield }}
                    {...ownProps}
                        />
            );
        }
    );
}
 
export default SearchBase;


const categoryLabels = ['pg','gym', 'services', 'buy'];


const buttonStyles = makeStyles({
    root:{
        borderRadius:'50px',
        color:'white',
        borderColor:'white',
        '&:hover':{
            background:'#282C35',
            color:'white'
        }
    }
});

const paperStyles = makeStyles({
    root:{
        background:'linear-gradient(to bottom, #2E303E , #212624)',
        borderRadius:'12px'
    }
});

const tagStyles = makeStyles({
    root:{
        margin: '1rem',
        borderRadius:'50px',
        border: 'solid #1e272c 1.6px',
        width:'150px',
        background: 'rgba(	248, 248, 255, 0.04 )',
        '&:hover':{
            background:'#282C35',
            color:'white'
        }
    },
    contained: {
        background: '#1e272c',
        color:'white',
    },
});

const sliderStyles = makeStyles({
    root:{
        color:'white',
    },
    thumb:{
        color:'grey'
    },
    modalRoot:{
        color:'black'
    }
});

const textfieldstyles = makeStyles({
    root: {
        color: 'white',
        background:'white'
    },
    autocompleteRoot:{
        color:'white',
        borderRadius:'5px',
        background: 'white',
    }
});

// const categoryCheckbox = makeStyles({
//     root:{
//         color:'grey',
//     },
//     checked:{
//         color:'blue'
//     }
// });