export const BuyProductDataRequest = (buyData) => {
    return {
        type:'BUY_DATA_REQUEST',
        payload: buyData
    }
}

export const Error = (data) => {
    return {
        type: 'ERROR',
        payload: data.error
    }
}