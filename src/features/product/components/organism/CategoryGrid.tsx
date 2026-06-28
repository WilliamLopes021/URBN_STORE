import { SubTitle } from "@/shared/components/atoms/SubTitle";
import { CategoryCard } from "../atoms/CategoryCard";
import { categories } from "../../constants/mockCategories";

export const CategoryGrid = () => {
  return (
    <section className="px-8 py-5 my-5 border border-dark-gray ">
      <header className="text-xl text-text-primary mb-4">
        <SubTitle>Selecione Conjuntos</SubTitle>
      </header>
      <div className="flex flex-col gap-3 w-full">
        {categories.map((category) => {
          return <CategoryCard key={category.id} product={category} />;
        })}
      </div>
    </section>
  );
};
