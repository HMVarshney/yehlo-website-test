export const BuyProductInitDataRequest = (ProductData) => {
    return {
        type:'INIT_DATA_REQUEST',
        payload: ProductData
    }
}