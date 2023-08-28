import { type Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

console.log(URL)

export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);

  return res.json();
};
