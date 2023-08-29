"use client";

import React from "react";
import Button from "./ui/Button";
import { ShoppingBag } from "lucide-react";
import { useIsComponentMounted } from "@/hooks/use-is-component-mounted";
import { useCart } from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

interface NavbarActionsProps {}

const NavbarActions: React.FC<NavbarActionsProps> = ({}) => {
  const { isMounted } = useIsComponentMounted();
  const { products } = useCart();
  const router = useRouter();

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm fond-medium text-white">
          {products.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
