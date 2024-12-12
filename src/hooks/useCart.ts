import { useContext } from "react";
import { CartContext } from "@/constants/cartContext";

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("Context value must be provided");
  }
  return context;
}
