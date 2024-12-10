import React from "react";
import { ShoppingCart } from "lucide-react";
import { MonitorSpeaker } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-10 flex justify-between items-center py-3 px-10 border-b shadow-md w-full bg-white max-sm:px-3">
      <div className="flex items-center gap-1 text-blue-700">
        <MonitorSpeaker width={52} height={52} />
        <span className="text-5xl font-bold">TheElectronics</span>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <div className="p-3 border border-blue-600 rounded-full cursor-pointer">
            <ShoppingCart width={30} height={30} stroke="blue" />
            <div className="bg-red-500 rounded-full text-white flex item-center justify-center w-[25px] h-[25px] absolute translate-x-5 -translate-y-[5px]">
              <p>1</p>
            </div>
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>My Cart</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
