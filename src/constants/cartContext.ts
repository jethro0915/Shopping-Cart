import React, { createContext } from "react";

export interface CartItem {
  id: number;
  count: number;
}

export interface ProductProps {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    count: number;
    rate: number;
  };
}

export type AllProductProps = Array<ProductProps> | undefined;

export interface CartContextType {
  getItemCount: (id: number) => number;
  getCartItemInfo: (id: number) => ProductProps | undefined;
  incrementItemCount: (id: number) => void;
  decrementItemCount: (id: number) => void;
  removeItem: (id: number) => void;
  cartItemTotal: number;
  cart: CartItem[];
  products: AllProductProps;
  setProducts: React.Dispatch<React.SetStateAction<AllProductProps>>;
}

export const CartContext = createContext({} as CartContextType);
