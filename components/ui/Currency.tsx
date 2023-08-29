"use client";

import React from "react";
import { priceFormatter } from "../../lib/utils";
import { useIsComponentMounted } from "@/hooks/use-is-component-mounted";

interface CurrencyProps {
  price: number;
}

const Currency: React.FC<CurrencyProps> = ({ price }) => {
  const { isMounted } = useIsComponentMounted();

  if (!isMounted) return null;

  return <div className="font-semibold">{priceFormatter(price)}</div>;
};

export default Currency;
