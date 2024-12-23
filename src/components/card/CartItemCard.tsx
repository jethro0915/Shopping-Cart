import { Button } from "../ui/button";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "@/hooks/useCart";

interface CartItemCardProps {
  id: number;
  count: number;
  title: string | undefined;
  price: number | undefined;
  image: string | undefined;
}

const CartItemCard = ({
  id,
  title,
  price,
  image,
  count,
}: CartItemCardProps) => {
  const { removeItem, incrementItemCount, decrementItemCount } = useCart();
  const totalPrice = price !== undefined && (price * count).toFixed(2);

  return (
    <div className="flex gap-3 items-center">
      <img src={image} className="w-[100px] h-[75px] flex-shrink-0" />
      <div className="space-y-2 w-full max-w-[250px]">
        <h3 className="line-clamp-2 font-semibold">{title}</h3>
        <p>
          {`$${price}`}
          <span className="sm:hidden">&#215;{`${count} = $${totalPrice}`}</span>
        </p>
      </div>
      <div className="flex gap-5 items-center mx-auto">
        <Button
          onClick={() => decrementItemCount(id)}
          className="bg-blue-800 hover:bg-blue-500 text-lg w-[30px] h-[30px]"
        >
          <Minus fill="white" />
        </Button>

        <span className="text-lg font-semibold">{count}</span>

        <Button
          onClick={() => incrementItemCount(id)}
          className="bg-blue-800 hover:bg-blue-500 text-lg w-[30px] h-[30px]"
        >
          <Plus fill="white" />
        </Button>
      </div>

      <span className="text-xl mx-auto font-semibold max-sm:hidden">{`$${totalPrice}`}</span>

      <Button
        className="border border-red-500 bg-transparent w-[30px] h-[30px] hover:bg-red-200"
        onClick={() => removeItem(id)}
      >
        <X stroke="red" />
      </Button>
    </div>
  );
};

export default CartItemCard;
