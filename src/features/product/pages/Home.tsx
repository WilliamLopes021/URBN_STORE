import { NavBar } from "@/shared/components/molecules/NavBar";
import { HeroBanner } from "../components/organism/HeroBanner";
import { Drops } from "../components/molecules/Drops";
import { Footer } from "@/shared/components/molecules/Footer";
import { products } from "../constants/mockProducts";
import { CategoryGrid } from "../components/organism/CategoryGrid";
import { SubTitle } from "@/shared/components/atoms/SubTitle";
import { Span } from "@/shared/components/atoms/Span";
import { mockMedia } from "../constants/mockMedia";
import { ProductPost } from "../components/molecules/ProductPost";
import { PostModal } from "../components/modals/PostModal";
import { useEffect, useState } from "react";

export const Home = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const toggleModal = (id: string) =>
    setOpenModal((prev) => (prev === id ? null : id));

  useEffect(() => {
    const handleScroll = () => {
      setOpenModal(null);
    };

    if (openModal) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [openModal]);

  return (
    <>
      <NavBar />
      <main>
        <HeroBanner />

        <Drops drops={products} />
        <CategoryGrid />
        <section className="px-8 ">
          <header className="text-xl mb-4 text-text-primary">
            <SubTitle>Comunidade URBN</SubTitle>
            <Span>#URBNCOMMUNITY</Span>
          </header>

          <div className="flex flex-wrap justify-center gap-5">
            {mockMedia.map((media) => {
              return (
                <div key={`${media.id}-post-container`}>
                  <ProductPost
                    image={media.thumb}
                    alt={media.alt}
                    onClick={() => toggleModal(media.id)}
                  />
                  <PostModal
                    onClose={() => toggleModal(media.id)}
                    isOpen={openModal === media.id}
                    productId={media.id}
                    media={media}
                    description={media.alt}
                    price={100}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
