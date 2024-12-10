import React from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  rate: number;
  count: number;
}

const PorductCard = ({
  title,
  price,
  image,
  rate,
  count,
}: ProductCardProps) => {
  return (
    <div className="flex flex-col gap-3 w-[300px] h-fit  border rounded-md p-2 shadow-md">
      <h1 className="text-2xl font-bold line-clamp-3 p-1">{title}</h1>
      <img src={image} className="w-[250px] h-[200px] self-center my-5" />
      <div className="flex justify-between items-center py-1 px-2">
        <div className="flex items-center gap-1 w-fit text-slate-400">
          <Star width={20} height={20} fill="yellow" stroke="yellow" />
          <span className="">{rate}</span>
          <span>{`(${count})`}</span>
        </div>
        <p className="text-xl font-semibold">{`$${price}`}</p>
      </div>
      <Button className="bg-blue-800 hover:bg-blue-500 text-base">
        <ShoppingCart width={40} height={40} fill="white" />
        Add to Cart
      </Button>
    </div>
  );
};

export default PorductCard;
