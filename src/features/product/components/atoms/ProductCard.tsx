import { Heart } from "lucide-react";
import { CircleBadge } from "@/shared/components/atoms/CircleBadge";
import { Card } from "@/shared/components/atoms/Card";

export const ProductCard = ({
  isFavorite,
  handleAddFavorite,
  text,
  price,
  image,
}: {
  id: string;
  text: string;
  price: string;
  image: string;
  isFavorite: boolean;
  handleAddFavorite: () => void;
}) => {
  const handleFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    handleAddFavorite();
  };

  return (
    <Card>
      <div className="w-50 h-full overflow-hidden p-5">
        <img src={image} alt={text} className="w-full h-full object-center object-cover" />
      </div>
      <div className="flex items-center justify-between bg-surface/50 absolute bottom-0 left-0 right-0 rounded-lg py-3 px-4 backdrop-blur-[1px]">
        <div className="flex flex-col">
          <span className="text-text-primary uppercase">{text}</span>
          <span className="text-accent-blue">{price}</span>
        </div>
        <CircleBadge onClick={handleFavorite}>
          {isFavorite ? <Heart className="fill-accent" /> : <Heart />}
        </CircleBadge>
      </div>
    </Card>
  );
};
