import { Footer } from "@/shared/components/molecules/Footer";
import { NavBar } from "@/shared/components/molecules/NavBar";
import { GridProductTemplate } from "../components/templates/GridProductsTemplate";
import { products } from "../constants/mockProducts";

export const NewProducts = () => {
  return (
    <>
      <NavBar />
      <GridProductTemplate products={products} label={"Lançamentos"} />
      <Footer />
    </>
  );
};
