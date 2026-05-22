import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/features/product/components/atoms/ProductCard";
import { Span } from "@/shared/components/atoms/Span";
import type { ProductViewModel } from "@/application/interfaces/view-models/product.viewmodel";
import { Anchor } from "@/interfaces/router/Link";
import { SubTitle } from "@/shared/components/atoms/SubTitle";

export const Drops = ({ drops }: { drops: ProductViewModel[] }) => {
  return (
    <section className="">
      <header className="text-text-primary text-xl flex justify-between px-8 my-5 ">
        <SubTitle>Lançamentos</SubTitle>
        <div>
          <Span>
            VIEW ALL <ArrowRight />
          </Span>
        </div>
      </header>
      <div className="w-full flex overflow-x overflow-y-hidden gap-3 px-8 py-3">
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
              />
            </Anchor>
          );
        })}
      </div>
    </section>
  );
};
