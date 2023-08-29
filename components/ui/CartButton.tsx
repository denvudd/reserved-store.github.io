"use client";

import { useCart } from "@/hooks/use-cart";
import React from "react";
import Button from "./Button";
import { ShoppingCart } from "lucide-react";
import { type Product } from "@/types";
import { useIsComponentMounted } from "@/hooks/use-is-component-mounted";

interface CartButtonProps {
  product: Product;
}

const CartButton: React.FC<CartButtonProps> = ({ product }) => {
  const { addProduct } = useCart();
  const { isMounted } = useIsComponentMounted();

  if (!isMounted) return null;

  return (
    <Button
      onClick={() => addProduct(product)}
      className="flex items-center gap-x-2"
    >
      Add to cart <ShoppingCart />
    </Button>
  );
};

export default CartButton;
