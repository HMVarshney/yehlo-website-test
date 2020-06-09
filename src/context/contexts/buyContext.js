import React, { createContext, useReducer } from 'react';
import {BuyProductsReducer} from '../reducers/buyProductsReducer';

export const BuyProducts = createContext();

const BuyProductsProvider = (props) => {
    const[products, dispatch] = useReducer(BuyProductsReducer, []);
    
    return(
        <BuyProducts.Provider value={{products, dispatch}}>
            {props.children}
        </BuyProducts.Provider>
    );
}

export default BuyProductsProvider;