export const BuyProductInitDataRequest = (data) => {
    return {
        type:'INIT_DATA_REQUEST',
        payload: data
    }
}

export const Error = (data) => {
    return {
        type: 'ERROR',
        payload: data.error
    }
}