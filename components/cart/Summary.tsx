"use client";

import axios from "axios";
import Button from "@/components/ui/Button";

import React from "react";
import Currency from "../ui/Currency";
import { useCart } from "@/hooks/use-cart";
import { useSearchParams } from "next/navigation";

const Summary: React.FC = ({}) => {
  const {} = useSearchParams();

  const products = useCart((state) => state.products);
  const removeAll = useCart((state) => state.removeAll);

  const totalPrice = products.reduce((total, product) => {
    return total + Number(product.price);
  }, 0);

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency price={totalPrice} />
        </div>
      </div>
      <Button className="w-full mt-6">Checkout</Button>
    </div>
  );
};

export default Summary;
