import React, { createContext, useReducer, useEffect } from 'react';
import {BuyProductsReducer} from '../reducers/buyProductsReducer';
import firebase from '../../api/fbConfig';
import { BuyProductDataRequest } from '../actions/buyProductActions';

export const BuyProducts = createContext();

const BuyProductsProvider = (props) => {
    const[buyProducts, dispatch] = useReducer(BuyProductsReducer, []);

    const getBuyProductsList = async function(){
        await firebase.firestore().collection('SecondHandProducts').get()
            .then((res)=>{
                const buyData = res.docs.map((doc)=>{
                    return {id: doc.id, ...doc.data()}
                });

                dispatch(BuyProductDataRequest(buyData))
        },[])
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