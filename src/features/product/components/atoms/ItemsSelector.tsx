import { ZoomIn } from "lucide-react";
import { CircleBadge } from "@/shared/components/atoms/CircleBadge";

export const ItemsSelector = ({
  length,
  activeIndex,
}: {
  length: number;
  activeIndex: number;
}) => {
  return (
    <div className="flex items-center gap-2 p-3">
      <div className="flex w-1/2 mx-auto items-center gap-2">
        {Array.from({ length }).map((_, index) => {
          return (
            <div
              key={index}
              className={`h-1 w-full ${activeIndex === index ? "bg-accent-blue" : "bg-dark-gray/30"} rounded-2xl`}
            ></div>
          );
        })}
      </div>
      <CircleBadge>
        <ZoomIn />
      </CircleBadge>
    </div>
  );
};
