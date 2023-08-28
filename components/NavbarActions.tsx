"use client";

import React from "react";
import Button from "./ui/Button";
import { ShoppingBag } from "lucide-react";
import { useIsComponentMounted } from "@/hooks/use-is-component-mounted";

interface NavbarActionsProps {}

const NavbarActions: React.FC<NavbarActionsProps> = ({}) => {
  const { isMounted } = useIsComponentMounted();

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm fond-medium text-white">0</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
