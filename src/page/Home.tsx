import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import Navbar from "@/components/shared/Navbar";
import axios from "axios";
import PorductCard from "@/components/card/ProductCard";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";

/*interface ProductProps {
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

type AllProductProps = Array<ProductProps>;*/

const Home = () => {
  //const [products, setProducts] = useState<AllProductProps>();
  const { products, setProducts } = useCart();
  const targetRef = useRef() as MutableRefObject<HTMLDivElement>;

  const handleScroll = () => targetRef.current.scrollIntoView();

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axios.get(
          "https://fakestoreapi.com/products/category/electronics"
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllProducts();
  }, [setProducts]);

  return (
    <div className="relative">
      <Navbar />
      <div className="w-full h-[700px] bg-[url('/src/assets/poster.jpg')] bg-cover bg-center">
        <div className="absolute top-[400px] left-[100px] bg-black bg-opacity-50 h-fit text-white px-10 py-8 rounded-lg max-md:left-[50px] max-sm:left-[30px]">
          <p className="text-5xl font-bold max-sm:text-3xl mb-3">
            NEW DEVICE SALE
          </p>
          <p className="text-4xl font-bold max-sm:text-2xl">GET YOURS TODAY</p>
          <Button
            onClick={handleScroll}
            className="text-lg rounded-none bg-blue-700 hover:bg-blue-600 border-none mt-10 px-6 py-4"
          >
            See More
          </Button>
        </div>
      </div>
      <section className="space-y-[40px] mx-[100px] py-[90px]" ref={targetRef}>
        <h1 className="text-3xl font-semibold border-l-4 border-blue-600 px-5 ml-3">
          All Products
        </h1>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 mt-[100px] justify-items-center">
          {products &&
            products.map((item) => (
              <PorductCard
                key={item.id}
                image={item.image}
                title={item.title}
                rate={item.rating.rate}
                count={item.rating.count}
                price={item.price}
                id={item.id}
              />
            ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
