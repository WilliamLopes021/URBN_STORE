import { Plus } from "lucide-react";
import { CircleBadge } from "./CircleBadge";

export const Card = ({
  text,
  price,
  image,
  ...props
}: {
  text: string;
  price: string;
  image: string;
  props?: React.ComponentProps<"div">;
}) => {
  const upperText = text.toUpperCase();
  return (
    <div
      {...props}
      className="flex items-center justify-center flex-col bg-card-bg border border-dark-gray rounded-lg relative cursor-pointer hover:scale-102 transition-all duration-500 ease-in-out"
    >
      <div className="w-50">
        <img src={image} alt={text} className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center justify-between bg-surface/50 absolute bottom-0 left-0 right-0 rounded-lg py-3 px-4 backdrop-blur-[1px]">
        <div className="flex flex-col">
          <span className="text-text-primary">{upperText}</span>
          <span className="text-accent-blue">{price}</span>
        </div>
        <CircleBadge>
          <Plus />
        </CircleBadge>
      </div>
    </div>
  );
};
