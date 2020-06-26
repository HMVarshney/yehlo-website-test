export const pgReducer = (state, action) => {
    switch(action.type){
        case 'PG_DATA_REQUEST':
            return[...state, ...action.payload];
         
        case 'ERROR':
            console.log('Error encountered: ', action.payload);
            break;
        
        default:
            return state;
    }
}