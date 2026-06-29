import { useParams } from "react-router";
import { PresetDisplay } from "../components/templates/PresetDisplay";
import { presets } from "../constants/mockPresets";
import { products } from "../constants/mockProducts";
import type { ProductViewModel } from "@/interfaces/view-models/product.viewmodel";
import { ProductNotFound } from "../components/molecules/ProductNotFound";
import { ProductCTACard } from "../components/atoms/ProductCTACard";
import { ChevronLeft } from "lucide-react";
import { Anchor } from "@/interfaces/router/Link";
import { CategoryTitle } from "../components/atoms/CategoryTitle";
import { PresetActions } from "../components/molecules/PresetActions";

export const Category = () => {
  const id = useParams<string>();
  const preset = presets.find((p) => p.id === id.id);
  const categoryProducts: ProductViewModel[] = [];

  if (preset) {
    const productIds = preset.productId;
    productIds.forEach((id) => {
      const product = products.find((p) => p.id === id);
      if (product) categoryProducts.push(product);
    });
  }

  return (
    <>
      {preset ? (
        <PresetDisplay image={preset.background}>
          {/* Back Button */}
          <Anchor
            to="/"
            className="absolute left-4 top-4 lg:left-6 lg:top-6 z-20 text-white bg-black/30 backdrop-blur-md p-2 lg:p-3 rounded-full hover:bg-dark-gray hover:text-white transition-all duration-300 shadow-xl hover:scale-105 border border-white/10"
          >
            <ChevronLeft size={28} className="w-6 h-6 lg:w-7 lg:h-7" />
          </Anchor>

          {/* Left Side: Title & Description */}
          <div className="hidden md:flex flex-col gap-y-3 lg:gap-y-6 w-full lg:w-[40%] text-text-primary animate-in slide-in-from-left duration-1000 mt-16 lg:mt-0">
            <div className="p-5 lg:p-8 rounded-2xl lg:rounded-3xl bg-black/20 backdrop-blur-md border border-white/10 shadow-2xl text-center lg:text-left">
              <CategoryTitle titleColor={preset.titleColor}>{preset.name}</CategoryTitle>
              <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-gray-200 mt-2 lg:mt-4 leading-relaxed font-light line-clamp-3 lg:line-clamp-none">
                {preset.description}
              </p>
            </div>
          </div>

          {/* Right Side: Products List */}
          <div className="flex flex-col gap-y-4 w-full lg:w-[45%] lg:p-15">
            {categoryProducts.map((prod) => {
              return (
                <ProductCTACard
                  key={prod.id}
                  id={prod.id}
                  name={prod.name}
                  img={prod.images[0]}
                  description={prod.description}
                  price={prod.price}
                />
              );
            })}
          </div>

          {/* Action Bar */}
          <PresetActions />
        </PresetDisplay>
      ) : (
        <ProductNotFound />
      )}
    </>
  );
};
