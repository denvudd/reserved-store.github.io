import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

export const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url);
  const res1 = await fetch(
    "https://reserved-dashboard.vercel.app/api/store/271539f5-7706-4784-ba79-f4ed06cfe138/products?categoryId=4fbd8eeb-65f2-45be-8948-e7e4eeb93cd6"
  )
    .then((data) => data.url)
    .then((data) => console.log(data));

  return res.json();
};
