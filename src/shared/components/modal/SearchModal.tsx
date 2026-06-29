import { Search, X, ArrowRight } from "lucide-react";
import type { ProductViewModel } from "@/interfaces/view-models/product.viewmodel";
import { Anchor } from "@/interfaces/router/Link";
import { useRef, useState } from "react";
import { products } from "@/features/product/constants/mockProducts";

interface SearchModalProps {
  onClose: () => void;
}

export const SearchModal = ({ onClose }: SearchModalProps) => {
  const [results, setResults] = useState<ProductViewModel[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    const inputValue = inputRef.current?.value || "";
    if (inputValue.length >= 2) {
      setResults(
        products.filter((product) =>
          product.name.toLowerCase().includes(inputValue.toLowerCase()),
        ),
      );
    }
  };

  const hasResults = results.length > 0;

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Panel — clique interno não fecha */}
      <div
        className="relative w-full bg-primary border-b border-border shadow-[0_8px_40px_rgba(0,0,0,0.5)] animate-[slideDown_0.2s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input row */}
        <div className="flex items-center gap-4 px-6 sm:px-10 py-5 border-b border-border">
          <Search className="w-5 h-5 text-text-secondary shrink-0" />

          <input
            ref={inputRef}
            onChange={handleChange}
            autoFocus
            type="text"
            placeholder="O que você está procurando?"
            className="
              flex-1 bg-transparent text-text-primary text-lg
              placeholder:text-text-secondary/50
              focus:outline-none
              caret-accent-blue
            "
          />

          <button
            onClick={onClose}
            className="text-text-secondary hover:text-text-primary transition-colors duration-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Corpo do modal */}
        <div className="px-6 sm:px-10 py-6 max-h-[70vh] overflow-y-auto">
          {hasResults && (
            <div className="flex flex-col gap-3">
              <p className="text-xs text-text-secondary uppercase tracking-widest font-medium">
                {results.length} resultado{results.length !== 1 ? "s" : ""}
              </p>

              <ul className="flex flex-col divide-y divide-border">
                {results.map((product) => (
                  <li key={product.id}>
                    <Anchor
                      to={`/product/${product.id}`}
                      className="flex items-center gap-4 py-3 group"
                      onClick={onClose}
                    >
                      {/* Thumbnail */}
                      <div className="w-14 h-14 rounded-sm overflow-hidden bg-card-bg shrink-0">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                        <p className="text-text-primary text-sm uppercase tracking-wider font-medium truncate group-hover:text-accent-blue transition-colors duration-200">
                          {product.name}
                        </p>
                        <p className="text-text-secondary text-xs">
                          {product.category.name}
                        </p>
                        <p className="text-accent-blue text-sm font-semibold">
                          {product.price}
                        </p>
                      </div>

                      <ArrowRight className="w-4 h-4 text-text-secondary group-hover:text-accent-blue group-hover:translate-x-1 transition-all duration-200 shrink-0" />
                    </Anchor>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
