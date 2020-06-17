import React, { createContext, useReducer, useEffect } from 'react';
import {BuyProductsReducer} from '../reducers/buyProductsReducer';
import firebase from '../../api/fbConfig';
import { BuyProductInitDataRequest } from '../actions/buyProductActions';

export const BuyProducts = createContext();

const BuyProductsProvider = (props) => {
    const[buyProducts, dispatch] = useReducer(BuyProductsReducer, []);

    const getBuyProductsList = async function(){
        await firebase.firestore().collection('SecondHandProducts').get()
            .then((res)=>{
                const data = res.docs.map((doc)=>doc.data());
                const newData = data.map((product,i)=>({...product, productId:i, type:'pg'}));
                dispatch(BuyProductInitDataRequest(newData))
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