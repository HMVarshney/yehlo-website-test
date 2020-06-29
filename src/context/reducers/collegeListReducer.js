export const collegeListReducer = (state,action) => {
    switch (action.type) {
        case 'FETCH_COLLEGE_LIST':
            return [...action.payload]
            
        default:
            break;
    }
}