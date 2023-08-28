import { getBillboard } from "@/actions/get-billboard";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";

export const revalidate = 0;
const Home = async () => {
  const billboard = await getBillboard("db7b4abf-3ca4-461b-8563-11e9e3f89eca");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard billboard={billboard} labelRequired={false} />
      </div>
    </Container>
  );
};

export default Home;
