import { createContext } from "react";

export const CartContext = createContext({
  items: [],
  addItemToCart: (item) => {}, // this will not be actually used but helps in auto-completion
  updateItemQuantity: () => {},
});
