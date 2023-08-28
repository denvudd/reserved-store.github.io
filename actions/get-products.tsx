import { type Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

export const getProducts = async (query: Query): Promise<Product[]> => {
  const { categoryId, colorId, isFeatured, sizeId } = query;
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId,
      sizeId,
      categoryId,
      isFeatured,
    },
  });

  const res = await fetch(url);

  return res.json();
};
