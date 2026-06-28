import { Footer } from "@/shared/components/molecules/Footer";
import { NavBar } from "@/shared/components/molecules/NavBar";
import { GridProductTemplate } from "../components/templates/GridProductsTemplate";
import { products } from "../constants/mockProducts";

export const Shop = () => {
  return (
    <>
      <NavBar />
      <GridProductTemplate products={products} label={"Todos os Produtos"} />
      <Footer />
    </>
  );
};
