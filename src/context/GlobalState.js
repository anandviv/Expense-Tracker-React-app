import React, { createContext, useReducer, children } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    transactions: [
       
    ]
}

//Create context

export const GlobalContext = createContext(initialState);

//provide components

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }
    return (< GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction, addTransaction

    }}>
        {children}
    </GlobalContext.Provider>);
}