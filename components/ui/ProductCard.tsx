"use client";

import { Product } from "@/types";
import React from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
  return <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"></div>;
};

export default ProductCard;
