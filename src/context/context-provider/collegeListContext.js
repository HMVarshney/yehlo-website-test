import React, { createContext, useReducer } from 'react';
import { collegeListReducer } from '../reducers/collegeListReducer';
import firebase from  '../../api/fbConfig';

export const CollegeListContext = createContext();

const CollegeListContextProvider = (props) => {

    const [collegeList, dispatch] = useReducer(collegeListReducer,[]);

    const getCollegeList = () => {
        console.log('fetching data')
        return firebase.firestore().collection('colleges').get()
            .then((res)=>{
            const collegeList = res.docs.map((doc)=>{
                return {id: doc.id, ...doc.data()}
            })
            
            dispatch({type:'FETCH_COLLEGE_LIST', payload:collegeList})
            })
    }

    return(
        <CollegeListContext.Provider value={{collegeList, getCollegeList}}>
            {props.children}
        </CollegeListContext.Provider>
    );
}

export default CollegeListContextProvider;
