"use client";

import { type Product } from "@/types";
import Image from "next/image";
import React from "react";
import IconButton from "./IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./Currency";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { category, color, id, images, isFeatured, name, price, size } =
    product;
    
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt={`${name} image`}
          src={images?.[0]?.url}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="transition absolute w-full px-6 bottom-5 opacity-0 group-hover:opacity-100">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              icon={<Expand size={20} className="text-gray-600" />}
              onClick={() => {}}
            />
            <IconButton
              icon={<ShoppingCart size={20} className="text-gray-600" />}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
      <div className="">
        <p className="font-semibold text-lg">{name}</p>
        <p className="font-semibold text-gray-500">{category.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency price={Number(price)} />
      </div>
    </div>
  );
};

export default ProductCard;
