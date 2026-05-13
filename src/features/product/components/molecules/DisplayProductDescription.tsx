import { Span } from "@/shared/components/atoms/Span";
import { Heart } from "lucide-react";
import { SizeDisplay } from "../atoms/SizeDisplay";

export const DisplayProductDescription = ({
  name,
  price,
  description,
  sizes,
}: {
  name: string;
  price: string;
  description: string;
  sizes: string[];
}) => {
  return (
    <section className="">
      <header className="border p-8 border-dark-gray text-text-primary text-4xl">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold ">{name}</h1>
          <Heart />
        </div>
        <p className="text-lg text-accent-blue">{price}</p>
        <div className="mt-5">
          <Span>{description}</Span>
        </div>
      </header>
      <div className="p-8 border-x border-dark-gray">
      <SizeDisplay sizes={sizes}/>
      </div>
    </section>
  );
};
