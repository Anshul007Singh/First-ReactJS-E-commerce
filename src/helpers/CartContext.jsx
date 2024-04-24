import React, { createContext, useReducer } from "react";


const CartContext = createContext({
    items: [],
    addToCart: (item) => { console.log('added')},
    removeFromCart: (id) => { console.log('removed')},
    clearCart: (item) => { console.log('emptied')}
});

const cartReducer = (state,action) => {

    if (action.type === 'add') {
        const existingCartIndex = state.items.findIndex((item) => 
          item.id ===  action.item.id
        )

        const updatedItems = [...state.items]

        if (existingCartIndex > -1) {
            const existingItem = state.items[existingCartIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            };
            updatedItems[existingCartIndex] = updatedItem;
        } else {
            updatedItems.push({ ...action.item, quantity: 1 });
        }

        return { ...state, items: updatedItems };
    }

    if (action.type === 'remove') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
          );
          const existingCartItem = state.items[existingCartItemIndex];
          const updatedItems = [...state.items];
      
          if (existingCartItem.quantity === 1) {
          updatedItems.splice(existingCartItemIndex, 1);
          } else {
            const updatedItem = {
              ...existingCartItem,
              quantity: existingCartItem.quantity - 1,
            };
          updatedItems[existingCartItemIndex] = updatedItem;
          }
          return {...state, items:updatedItems}
    }

    if (action.type === "clear_cart") {
        return { items: [] };
    }
    
    return state;  
}

export const CartContextProvider = ({ children }) => {
    
    const [cart, dispatch] = useReducer(cartReducer, { items: [] });

    const addToCart = (item) => {
        dispatch({type:'add', item})
    }

    const removeFromCart = (id) => {
        dispatch({type:'remove', id})
    }

    const clearCart = () => {
        dispatch({type:'clear_cart'})
    }

    const cartContext = {
        items: cart.items,
        addToCart,
        removeFromCart,
        clearCart
    }

    return <CartContext.Provider value={cartContext}>
              {children}
           </CartContext.Provider>
}

export default CartContext;