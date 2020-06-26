import React, { useReducer, useEffect } from 'react';
import { createContext } from 'react';
import firebase from '../../api/fbConfig';
import { pgReducer } from '../reducers/pgReducer';
import { PGDataRequest } from '../actions/pgActions';

export const PGContext = createContext();

const PGContextProvider = (props) => {

    const [pgProducts, dispatch] = useReducer(pgReducer,[]);

    const getPGData = async () => {
        await firebase.firestore().collection('PGs').get()
            .then((res)=>{
                const pgData = res.docs.map((doc)=>{
                    return {...doc.data(), id:doc.id, type: 'pg'}
                });
                dispatch(PGDataRequest(pgData));
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    // const getPGData = async () =>{
    //     await firebase.firestore().collection('PGs').doc('zQc1Xl0iWLGS9Ta5AbdZ').get()
    //         .then((data)=>{
    //             const pgData = {...data.data(), id: data.id}
    //             dispatch(PGDataRequest(pgData))
    //     })
    //     .catch(error=>console.log(error))
    // } 

    useEffect(()=>{
        getPGData();
    },[]);

    return(
        <PGContext.Provider value={{pgProducts, dispatch}}>
            {props.children}
        </PGContext.Provider>
    );
}

export default PGContextProvider;