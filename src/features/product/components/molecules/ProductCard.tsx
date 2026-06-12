import { Anchor } from "@/interfaces/router/Link";
import type { ProductViewModel } from "@/interfaces/view-models/product.viewmodel";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  product: ProductViewModel;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const outOfStock = product.stock === "Esgotado";

  return (
    <Anchor to={`/product/${product.id}`} className="group block w-full">
      <div className="relative overflow-hidden rounded-lg border border-border bg-surface transition-all duration-300 hover:border-accent-blue/40 hover:shadow-[0_4px_24px_rgba(0,0,0,0.35)]">

        {/* Imagem */}
        <div className="relative w-full aspect-3/4 overflow-hidden bg-card-bg">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-105"
          />

          {/* Overlay no hover */}
          <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="flex items-center gap-2 bg-accent text-text-primary text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded-sm translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <ShoppingBag className="w-4 h-4" />
              Ver Produto
            </span>
          </div>

          {/* Badge de estoque */}
          {outOfStock && (
            <span className="absolute top-2 left-2 bg-background/80 text-text-secondary text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm border border-border">
              Esgotado
            </span>
          )}
        </div>

        <div className="px-3 py-3 flex flex-col gap-1">
          <p className="text-text-primary text-sm uppercase tracking-wider font-medium truncate">
            {product.name}
          </p>
          <p className="text-accent-blue text-sm font-semibold">
            {product.price}
          </p>

          {product.sizes?.length > 0 && (
            <div className="flex gap-1 mt-1 flex-wrap">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className="text-[10px] text-text-primary border border-border px-1.5 py-0.5 rounded-sm uppercase tracking-wider"
                >
                  {size}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Anchor>
  );
};
