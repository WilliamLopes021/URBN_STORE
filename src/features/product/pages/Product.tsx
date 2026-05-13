import { Footer } from "@/shared/components/molecules/Footer";
import { NavBar } from "@/shared/components/molecules/NavBar";
import { DisplayProductImage } from "../components/molecules/DisplayProductImage";
import { DisplayProductDescription } from "../components/molecules/DisplayProductDescription";
import { useRouterParams } from "@/interfaces/router/useParams";
import { products } from "../constants/mockProducts";

export const Product = () => {
  const { id } = useRouterParams();
  const product = products.find((product) => product.id === id);

  return (
    <>
      <NavBar />
      <DisplayProductImage images={product.images} />
      <DisplayProductDescription
        name={product.name}
        price={product.price}
        description={product.description}
        sizes={product.sizes}
      />
      <Footer />
    </>
  );
};
