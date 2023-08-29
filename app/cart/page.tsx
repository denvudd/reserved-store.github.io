"use client";

import CartProduct from "@/components/cart/CartProduct";
import Container from "@/components/ui/Container";
import { useCart } from "@/hooks/use-cart";
import { useIsComponentMounted } from "@/hooks/use-is-component-mounted";
import React from "react";

interface PageProps {}

const Page: React.FC<PageProps> = ({}) => {
  const { isMounted } = useIsComponentMounted();
  const { products } = useCart();

  if (!isMounted) return null;

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {!products.length && (
                <p className="text-neutral-500">No products added to cart</p>
              )}
              <ul>
                {products.map((product) => (
                  <CartProduct key={product.id} product={product} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
