import { ChevronDown } from "lucide-react";

export type SortOption = "name" | "price-asc" | "price-desc" | "date";

interface SortSelectorProps {
  value?: SortOption;
  onChange?: (value: SortOption) => void;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "name", label: "Nome" },
  { value: "price-asc", label: "Menor Preço" },
  { value: "price-desc", label: "Maior Preço" },
  { value: "date", label: "Mais Recentes" },
];

export const SortSelector = ({ value, onChange }: SortSelectorProps) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-text-secondary text-xs uppercase tracking-widest font-medium whitespace-nowrap">
        Ordenar por
      </span>

      <div className="relative group">
        <select
          id="sort-selector"
          value={value}
          onChange={(e) => onChange?.(e.target.value as SortOption)}
          className="
            appearance-none cursor-pointer
            bg-surface border border-border
            text-text-primary text-xs uppercase tracking-widest font-medium
            pl-3 pr-8 py-2 rounded-sm
            transition-all duration-200
            hover:border-accent-blue/60 hover:shadow-[0_0_8px_rgba(var(--color-accent-blue),0.15)]
            focus:outline-none focus:border-accent-blue focus:shadow-[0_0_12px_rgba(var(--color-accent-blue),0.25)]
          "
        >
          {SORT_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value} className="bg-surface text-text-primary font-light normal-case">
              {label}
            </option>
          ))}
        </select>

        {/* Ícone customizado sobreposto */}
        <ChevronDown
          className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-accent-blue pointer-events-none transition-transform duration-200 group-focus-within:rotate-180"
        />
      </div>
    </div>
  );
};
