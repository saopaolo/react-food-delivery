import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (Item) => {},
  removeitem: (id) => {}
});

export default CartContext;
