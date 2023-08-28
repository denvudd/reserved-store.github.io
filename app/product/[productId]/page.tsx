import { getProduct } from "@/actions/get-product";
import { getProducts } from "@/actions/get-products";
import ProductInfo from "@/components/ProductInfo";
import ProductList from "@/components/ProductList";
import Gallery from "@/components/gallery/Gallery";
import Container from "@/components/ui/Container";
import React from "react";

interface PageProps {
  params: {
    productId: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { productId } = params;

  const product = await getProduct(productId);

  if (!product) return null;

  const suggestedProducts = await getProducts({
    categoryId: product.category.id,
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery productName={product.name} images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <ProductInfo product={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" products={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default Page;
