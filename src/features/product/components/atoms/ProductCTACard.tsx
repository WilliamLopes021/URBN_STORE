import { Button } from "@/shared/components/atoms/Button";
import { ShoppingBag } from "lucide-react";
import {useRouter} from "@/interfaces/router/useRouter"

export const ProductCTACard = ({
  id,
  name,
  img,
  description,
  price,
}: {
  id: string,
  img: string;
  name: string;
  description: string;
  price: string;
}) => {
  const navigate = useRouter();

  return (
    <div className="flex items-center border border-dark-gray rounded-lg relative bg-radial from-surface via-surface/50 to-surface/40">
      <div className="w-76 lg:w-60 h-full p-4 border-2 border-dark-gray/20 m-3">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-y-3 lg:gap-y-1.5 w-full">
        <h1 className="text-2xl font-bold text-text-primary tracking-wide">
          {name}
        </h1>
        <p className="text-gray-400 text-sm">{description}</p>
        <p className="text-lg text-accent font-semibold">R${price}</p>
        <div className="w-min">
          <Button onClick={() => navigate(`/product/${id}`)}>
            <ShoppingBag />
            Comprar
          </Button>
        </div>
      </div>
    </div>
  );
};
