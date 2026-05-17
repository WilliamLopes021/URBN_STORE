import { Star } from "lucide-react";

type StarRatingProps = {
  rating: number;
  max?: number;
  size?: number;
};

export const StarRating = ({ rating, max = 5, size = 16 }: StarRatingProps) => {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} de ${max} estrelas`}
    >
      {Array.from({ length: max }, (_, i) => {
        const filled = i < Math.floor(rating);
        const partial = !filled && i < rating;

        return (
          <span key={i} className="relative inline-flex">
            <Star size={size} className="text-dark-gray" fill="currentColor" />
            {(filled || partial) && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: filled ? "100%" : `${(rating % 1) * 100}%` }}
              >
                <Star
                  size={size}
                  className="text-accent-pink"
                  fill="currentColor"
                />
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
};
