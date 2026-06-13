import { ItemsSelector } from "../atoms/ItemsSelector";
import { useState } from "react";
import fallbackImg from "@/assets/generic/imagefallback.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const DisplayProductImage = ({ images }: { images: string[] }) => {
  const [visibleIndex, setVisibleIndex] = useState<number>(0);
  const onChangeImage = (index: number) => {
    setVisibleIndex(index);
  };

  const nextImage = () => {
    setVisibleIndex((prev) => {
      return (prev + 1) % images.length;
    });
  };
  const previousImage = () => {
    setVisibleIndex((prev) => {
      return (prev - 1 + images.length) % images.length;
    });
  };

  return (
    <section className="px-8 bg-radial-[at_25%_25%] from-primary to-accent-blue/20 to-45% relative overflow-hidden w-full">
      <div className="max-w-[700px] max-h-[600px] mx-auto">
        <img
          src={images[visibleIndex]}
          alt={fallbackImg}
          className="w-full max-h-screen object-cover"
        />
      </div>
      <div className="absolute top-1/2 right-0 w-full flex justify-between items-center px-4">
        {images.length > 1 ? (
          <>
            <ChevronLeft
              className="text-text-primary/30 hover:text-text-primary/50 cursor-pointer"
              size={30}
              strokeWidth={1}
              onClick={previousImage}
            />
            <ChevronRight
              className="text-text-primary/30 hover:text-text-primary/50 cursor-pointer"
              size={30}
              strokeWidth={1}
              onClick={nextImage}
            />
          </>
        ) : null}
      </div>
      <div className="absolute bottom-0 right-0 w-full overflow-hidden">
        <ItemsSelector
          length={images.length}
          activeIndex={visibleIndex}
          onChange={onChangeImage}
        />
      </div>
    </section>
  );
};
