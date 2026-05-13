import { NavBar } from "@/shared/components/molecules/NavBar";
import { HeroBanner } from "../components/organism/HeroBanner";
import { Drops } from "../components/molecules/Drops";
import { Footer } from "@/shared/components/molecules/Footer";
import { products } from "../constants/mockProducts";
import { CategoryGrid } from "../components/organism/CategoryGrid";

export const Home = () => {
  return (
    <>
      <NavBar />
      <main>
        <HeroBanner />
        <Drops drops={products} />
        <CategoryGrid />
      </main>
      <Footer />
    </>
  );
};
