import React from "react";
import { ShoppingCart, ShoppingBasket } from "lucide-react";
import { MonitorSpeaker } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { useCart } from "@/hooks/useCart";
import CartItemCard from "../card/CartItemCard";

const Navbar = () => {
  const { cart, cartItemTotal, getCartItemInfo } = useCart();
  const totalPrice = cart
    .reduce(
      (total, item) =>
        total + item.count * (getCartItemInfo(item.id)?.price || 0),
      0
    )
    .toFixed(2);

  return (
    <header className="fixed top-0 z-10 flex justify-between items-center py-3 px-10 border-b shadow-md w-full bg-white max-sm:px-3">
      <div className="flex items-center gap-1 text-blue-700">
        <MonitorSpeaker width={52} height={52} />
        <span className="text-5xl font-bold">TheElectronics</span>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <div className="p-3 border border-blue-600 rounded-full cursor-pointer group hover:bg-blue-700">
            <ShoppingCart
              width={30}
              height={30}
              className="fill-current text-blue-700 group-hover:text-white"
            />
            {cartItemTotal > 0 && (
              <div className="bg-red-500 rounded-full text-white flex item-center justify-center w-[25px] h-[25px] absolute translate-x-5 -translate-y-[5px]">
                <p>{cartItemTotal}</p>
              </div>
            )}
          </div>
        </SheetTrigger>
        <SheetContent className="w-full max-w-[800px]">
          <SheetHeader>
            <SheetTitle className="text-semibold text-3xl">My Cart</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          {cart.length > 0 ? (
            <div className="mt-5 space-y-5">
              {cart.map((item) => {
                const data = getCartItemInfo(item.id);
                return (
                  <CartItemCard
                    key={item.id}
                    id={item.id}
                    count={item.count}
                    title={data?.title}
                    price={data?.price}
                    image={data?.image}
                  />
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center gap-3 w-full h-4/5 text-3xl text-slate-300">
              <ShoppingBasket color="#cbd5e1" width={200} height={200} />
              <p>Your Cart is Empty</p>
            </div>
          )}
          {cart.length > 0 && (
            <SheetFooter className="mt-10 font-semibold text-3xl">{`Total: $${totalPrice}`}</SheetFooter>
          )}
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
