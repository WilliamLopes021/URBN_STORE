import { Plus } from "lucide-react";

export const Card = ({
  text,
  price,
  image,
}: {
  text: string;
  price: string;
  image: string;
}) => {
  const upperText = text.toUpperCase();
  return (
    <div className="flex items-center justify-center flex-col bg-primary border border-dark-gray rounded-lg relative">
      <div className="w-50">
        <img src={image} alt={text} className="w-full h-full" />
      </div>
      <div className="flex items-center justify-between bg-surface/50 absolute bottom-0 left-0 right-0 rounded-lg py-3 px-4 backdrop-blur-[1px]">
        <div className="flex flex-col">
          <span className="text-text-primary">{upperText}</span>
          <span className="text-accent-blue">{price}</span>
        </div>
        <button className="border rounded-full p-1 border-dark-gray text-white">
          <Plus />
        </button>
      </div>
    </div>
  );
};
