export const BuyProductsReducer = (state, action) => {
    switch(action.type){
        case 'INIT_DATA_REQUEST':
            return[...state, ...action.payload];
        case 'ERROR':
            console.log('Error: ', action.payload);
        default:
            return state;
    }
}