export const PGDataRequest = (pgData) => {
    return{
        type:'PG_DATA_REQUEST',
        payload: pgData,
    };
};

export const Error = (data) => {
    return {
        type: 'ERROR',
        payload: data.error
    };
};

