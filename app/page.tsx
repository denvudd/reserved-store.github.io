import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";

export const revalidate = 0;
const Home = async () => {
  const billboard = await getBillboard("7c3ee1f1-a8e6-451e-b433-77581536539f");
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard billboard={billboard} labelRequired={false} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" products={products} />
        </div>
      </div>
    </Container>
  );
};

export default Home;
