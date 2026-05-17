import { Anchor } from "@/interfaces/router/Link";
import type { CategoryViewModel } from "@/application/interfaces/view-models/category.viewmodel";
import { ArrowRight } from "lucide-react";

export const CategoryCard = ({
  product: category,
}: {
  product: CategoryViewModel;
}) => {
  return (
    <Anchor to={`/category/${category.id}`}>
      <div className="w-full flex h-36 bg-bg border border-dark-gray rounded-xl overflow-hidden relative transition-all duration-300 hover:border-accent-pink">
        <div className="absolute inset-0 bg-linear-to-r from-surface to-transparent z-10 pointer-events-none" />

        <div className="relative z-20 flex flex-col justify-between p-5 w-1/2">
          <div className="flex flex-col gap-1">
            {category.icon && (
              <img
                src={category.icon}
                alt=""
                className="w-6 h-6 object-contain mb-1"
              />
            )}

            <span className="text-text-primary font-black text-2xl uppercase leading-none tracking-wide">
              {category.name}
            </span>

            {category.description && (
              <span className="text-text-primary text-xs mt-0.5">
                {category.description}
              </span>
            )}
          </div>

          <ArrowRight
            size={18}
            className="text-accent transition-all"
          />
        </div>

        <div className="absolute right-0 top-0 h-full w-3/5">
          <img
            src={category.image}
            alt={category.name}
            className="h-full w-full object-cover object-center scale-105 transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>
    </Anchor>
  );
};
