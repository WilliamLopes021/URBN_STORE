import { SquaresUnite } from "lucide-react";
import { Card } from "@/shared/components/atoms/Card";

export const ProductPost = ({
  image,
  alt,
  ...props
}: {
  image: string;
  alt?: string;
} & React.ComponentProps<"div">) => {
  return (
    <Card color="black" {...props}>
      <div className="max-w-[300px] relative rounded-lg overflow-hidden">
        <img src={image} alt={alt} className="w-full h-full object-cover" />
        <SquaresUnite
          className={`text-text-primary absolute top-2 right-2 z-10`}
        />
      </div>
    </Card>
  );
};
