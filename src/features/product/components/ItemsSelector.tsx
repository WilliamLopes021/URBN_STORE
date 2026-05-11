import { ZoomIn } from "lucide-react";
import { CircleBadge } from "@/shared/components/atoms/CircleBadge";

export const ItemsSelector = () => {
  return (
    <div className="flex items-center mx-1">
      <div className="flex w-1/2 mx-auto items-center gap-2">
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <div
              key={index}
              className="h-1 w-full bg-accent-blue rounded-2xl"
            ></div>
          );
        })}
      </div>
      <CircleBadge >
        <ZoomIn />
      </CircleBadge>
    </div>
  );
};
