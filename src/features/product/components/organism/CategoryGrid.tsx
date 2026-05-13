import { SubTitle } from "@/shared/components/atoms/SubTitle";
import { CategoryCard } from "../atoms/CategoryCard";
import { categories } from "../../constants/mockCategories";

export const CategoryGrid = () => {
  return (
    <section className="px-8 my-5">
      <header className="text-xl text-text-primary mb-4">
        <SubTitle>Navegue por Categoria</SubTitle>
      </header>
      <div className="flex flex-col gap-3 w-full">
        {categories.map((category) => {
          return (
            <CategoryCard
              key={category.id}
              product={category}
            />
          );
        })}
      </div>
    </section>
  );
};