import type { ProductViewModel } from "@/interfaces/view-models/product.viewmodel";
import { SortSelector } from "../molecules/SortSelector";
import { ProductCard } from "../molecules/ProductCard";

export const GridProductTemplate = ({
  products,
  label,
}: {
  products: ProductViewModel[];
  label: string;
}) => {
  return (
    <>
      <div className="text-text-primary flex lg:flex-row md:justify-between flex-col gap-5 px-10 py-4">
        <h2 className="md:text-3xl text-xl uppercase tracking-wider font-bold">
          {label}{" "}
          <span className="text-accent-blue text-xl">
            ({products.length} Itens)
          </span>
        </h2>
        <SortSelector />
      </div>
      <main className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 px-6 sm:px-10 py-4 bg-surface">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </>
  );
};
