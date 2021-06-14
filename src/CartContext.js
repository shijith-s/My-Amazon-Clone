import React, { createContext, useReducer } from "react";
import reducer,{ initialState } from "./Reducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => (
  <CartContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </CartContext.Provider>
);

