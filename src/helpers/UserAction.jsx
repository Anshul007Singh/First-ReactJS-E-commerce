import React, { useState,createContext } from "react";

const UserAction = createContext({
    actions: '',
    openCart: () => { },
    closeCart: () => { },
    onCheckout: () => { },
    hideCheckout: () => { }
});

export const UserActionProvider = ({ children }) => {
    
    const [userAction, setUserAction] = useState('');

    const openCart = () => {
        setUserAction('cart');
    }

    const closeCart = () => {
        setUserAction('');
    }

    const onCheckout = () => {
        setUserAction('checkout')
    }

    const hideCheckout = () => {
        setUserAction('')
    }

    const userActionContext = {
        actions: userAction,
        openCart,
        closeCart,
        onCheckout,
        hideCheckout
    }
    
    return <UserAction.Provider value = {userActionContext}>
        {children}
    </UserAction.Provider>
}

export default UserAction;