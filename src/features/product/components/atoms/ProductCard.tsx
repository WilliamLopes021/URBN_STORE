import { Plus } from "lucide-react";
import { CircleBadge } from "@/shared/components/atoms/CircleBadge";
import { Card } from "@/shared/components/atoms/Card";

export const ProductCard = ({
  text,
  price,
  image,
}: {
  text: string;
  price: string;
  image: string;
}) => {
  return (
    <Card>
      <div className="w-50 h-full overflow-hidden">
        <img src={image} alt={text} className="w-full h-full object-center" />
      </div>
      <div className="flex items-center justify-between bg-surface/50 absolute bottom-0 left-0 right-0 rounded-lg py-3 px-4 backdrop-blur-[1px]">
        <div className="flex flex-col">
          <span className="text-text-primary uppercase">{text}</span>
          <span className="text-accent-blue">{price}</span>
        </div>
        <CircleBadge>
          <Plus />
        </CircleBadge>
      </div>
    </Card>
  );
};
