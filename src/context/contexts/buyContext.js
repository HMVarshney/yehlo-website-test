import React, { createContext, useReducer, useEffect } from 'react';
import {BuyProductsReducer} from '../reducers/buyProductsReducer';
import firebase from '../../api/fbConfig';
import { BuyProductInitDataRequest } from '../actions/buyProductActions';
import axios from 'axios';

export const BuyProducts = createContext();

const BuyProductsProvider = (props) => {
    const[buyProducts, dispatch] = useReducer(BuyProductsReducer, []);

    const getBuyProductsList = async function(){
        await firebase.firestore().collection('SecondHandProducts').get()
            .then((response)=>{
                const recievedData = response.docs.map((product)=>product.data())
                dispatch(BuyProductInitDataRequest(recievedData));
            })
       };
    
       useEffect(()=>{
           getBuyProductsList();
       }, [])
    

    return(
        <BuyProducts.Provider value={{buyProducts, dispatch}}>
            {props.children}
        </BuyProducts.Provider>
    );
}

export default BuyProductsProvider;