import React, { useState, ReactNode } from "react";
import {
  CartContext,
  CartItem,
  AllProductProps,
} from "@/constants/cartContext";

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<AllProductProps>();

  const cartItemTotal = cart.reduce((total, item) => total + item.count, 0);

  const getItemCount = (id: number) => {
    return cart.find((item) => item.id === id)?.count || 0;
  };

  const getCartItemInfo = (id: number) => {
    return products?.find((item) => item.id === id);
  };

  const incrementItemCount = (id: number) => {
    setCart((prev) => {
      if (prev.find((item) => item.id === id)) {
        return prev.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              count: item.count + 1,
            };
          } else {
            return item;
          }
        });
      } else {
        return [...prev, { id, count: 1 }];
      }
    });
  };

  const decrementItemCount = (id: number) => {
    setCart((prev) => {
      if (prev.find((item) => item.id === id)?.count === 1) {
        return prev.filter((item) => item.id !== id);
      } else {
        return prev.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              count: item.count - 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        getItemCount,
        getCartItemInfo,
        incrementItemCount,
        decrementItemCount,
        removeItem,
        cartItemTotal,
        cart,
        products,
        setProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
