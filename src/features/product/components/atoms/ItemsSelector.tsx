import { ZoomIn } from "lucide-react";
import { CircleBadge } from "@/shared/components/atoms/CircleBadge";

export const ItemsSelector = ({
  length,
  activeIndex,
  onChange,
}: {
  length: number;
  activeIndex: number;
  onChange: (index: number) => void;
}) => {
  return (
    <div className="flex items-center gap-2 p-3">
      <div className="flex w-1/2 mx-auto items-center gap-2">
        {Array.from({ length }).map((_, i) => {
          return (
            <div
              key={`${i}`}
              onClick={() => onChange(i)}
              className={`h-1 w-full cursor-pointer hover:bg-accent-blue/20 transition-colors duration-200 ${activeIndex === i ? "bg-accent-blue" : "bg-light-gray/30"} rounded-2xl`}
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
