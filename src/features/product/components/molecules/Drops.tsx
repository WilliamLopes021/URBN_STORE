import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/features/product/components/atoms/ProductCard";
import { Span } from "@/shared/components/atoms/Span";
import type { ProductViewModel } from "@/interfaces/view-models/product.viewmodel";
import { Anchor } from "@/interfaces/router/Link";
import { SubTitle } from "@/shared/components/atoms/SubTitle";
import { useFavoriteItens } from "../../hooks/useFavoriteItens";

export const Drops = ({ drops }: { drops: ProductViewModel[] }) => {
  const { handleFavoriteProduct, favorites } = useFavoriteItens();

  return (
    <section className="scrollbar-thumb-dark-gray scrollbar-track-transparent ">
      <header className="text-text-primary text-xl flex justify-between px-8 my-5 ">
        <SubTitle>Lançamentos</SubTitle>
        <div>
          <Span>
            VIEW ALL <ArrowRight />
          </Span>
        </div>
      </header>
      <div className="w-full flex overflow-hidden gap-3 px-8 py-3">
        {drops.map((product) => {
          return (
            <Anchor
              to={`/product/${product.id}`}
              key={`${product.name}-${product.id}`}
            >
              <ProductCard
                text={product.name}
                price={product.price}
                image={product.images[0]}
                id={product.id}
                isFavorite={favorites.includes(product.id)}
                handleAddFavorite={() => handleFavoriteProduct(product.id)}
              />
            </Anchor>
          );
        })}
      </div>
    </section>
  );
};
