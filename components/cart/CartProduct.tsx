"use client";

import Image from "next/image";
import { toast } from "sonner";
import Button from "../ui/Button";
import Currency from "../ui/Currency";
import { useCart } from "@/hooks/use-cart";
import { type Product } from "@/types";

import React from "react";
import IconButton from "../ui/IconButton";
import { X } from "lucide-react";

interface CartProductProps {
  product: Product;
}

const CartProduct: React.FC<CartProductProps> = ({ product }) => {
  const { id, images, name, color, size, price } = product;
  const { removeItem } = useCart();

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={images[0].url}
          alt={`${name} product in cart`}
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={() => removeItem(id)} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 flex flex-col gap-y-3 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{color.name}</p>
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
              {size.name}
            </p>
          </div>
          <Currency price={Number(price)} />
        </div>
      </div>
    </li>
  );
};

export default CartProduct;
