import React, { useState, useEffect, useContext } from 'react';
import {CollegeListContext} from '../../context/context-provider/collegeListContext';
import { makeStyles } from '@material-ui/core';

function SearchBase(ChildComp){
    return(
        function Child(ownProps)
        {
            const [searchAttr, setSearchAttr] = useState({
                college:{
                    name:'',
                    location: null
                },
                priceValue:[0,20000],
                category: 'pg',
            });


            const { collegeList, getCollegeList } = useContext(CollegeListContext);

            //styles
            const buttonStyle = buttonStyles();
            const textfield = textfieldstyles();
            const paperStyle = paperStyles();
            const tagStyle = tagStyles(); 
            const sliderStyle = sliderStyles();

            useEffect(()=>{
                getCollegeList();
            },[])

            return(
                <ChildComp 
                    searchAttr={searchAttr} 
                    setSearchAttr={(changes)=>setSearchAttr(changes)} 
                    collegeList={collegeList}
                    categoryLabels={categoryLabels}
                    styles = {{buttonStyle, paperStyle, tagStyle, sliderStyle, textfield}}
                    {...ownProps}
                        />
            );
        }
    );
}
 
export default SearchBase;


const categoryLabels = ['pg','gym', 'services', 'second hand'];


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
        width:'150px',
        color:'#2e242c',
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
        color:'white'
    },
    thumb:{
        color:'black'
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

