import { Anchor } from "@/interfaces/router/Link";
import type { CategoryViewModel } from "@/application/interfaces/view-models/category.viewmodel";

export const CategoryCard = ({
  product: category,
}: {
  product: CategoryViewModel;
}) => {
  return (
    <Anchor to={`/category/${category.id}`}>
      <div className="w-full flex items-center h-40 border border-dark-gray rounded-lg overflow-hidden relative">
        <div className="w-1/2">
        <div>
          <img src="" alt="" />
        </div>
          <span className="text-text-primary">{category.name}</span>
        </div>

        <div className="h-full  relative right-10">
          <img
            src={category.image}
            alt={category.name}
            className="h-full object-cover"
          />
        </div>
      </div>
    </Anchor>
  );
};
