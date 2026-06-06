import { Footer } from "@/shared/components/molecules/Footer";
import { NavBar } from "@/shared/components/molecules/NavBar";
import { products } from "../constants/mockProducts";
import { GridProductTemplate } from "../components/templates/GridProductsTemplate";

export const Favorite = () => {
  return (
    <>
      <NavBar />
      <GridProductTemplate products={products} label={'Seus Favoritos'}/>
      <Footer />
    </>
  );
};
