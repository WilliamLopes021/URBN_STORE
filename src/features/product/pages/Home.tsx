import { NavBar } from "@/shared/components/molecules/NavBar";
import { HeroBanner } from "../components/organism/HeroBanner";
import { Drops } from "../components/molecules/Drops";
import { Footer } from "@/shared/components/molecules/Footer";
import { products } from "../constants/mockProducts";
import { CategoryGrid } from "../components/organism/CategoryGrid";
import { SubTitle } from "@/shared/components/atoms/SubTitle";
import { Span } from "@/shared/components/atoms/Span";
import { mockMedia } from "../constants/mockMedia";
import { ProductModal } from "../components/organism/ProductModal";

export const Home = () => {
  return (
    <>
      <NavBar />
      <main className="border border-dark-gray">
        <HeroBanner />
        <Drops drops={products} />
        <CategoryGrid />
        <section className="px-8">
          <header className="text-xl mb-4 text-text-primary">
            <SubTitle>Comunidade URBN</SubTitle>
            <Span>#URBNCOMMUNITY</Span>
          </header>

          <div className="flex flex-wrap gap-2 justify-center ">
            {mockMedia.map((media) => {
              return (
                <ProductModal
                  productId={media.id}
                  price={100}
                  description={media.alt}
                  medias={mockMedia}
                  modalController={{ isOpen: false, onClose: () => {} }}
                  key={media.id}
                />
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
