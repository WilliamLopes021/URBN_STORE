import { StarRating } from "../atoms/StarRating";
import type { Review } from "@/interfaces/view-models/review.model";

type ReviewCardProps = {
  review: Review;
};

export const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <article className="py-4 border-b border-border last:border-none">
      {/* Linha superior: estrelas + nota + data */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <StarRating rating={review.rating} />
          <span className="text-light-gray text-xs font-semibold">
            {review.rating}/{review.max ?? 5}
          </span>
        </div>
        <span className="text-light-gray text-xs">{review.createdAt}</span>
      </div>

      {/* Nome + badge verificado */}
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-text-primary text-sm font-bold">
          {review.author}
        </span>
        {review.verified && (
          <span className="text-[0.6rem] font-bold uppercase tracking-wider text-accent-blue border border-accent-blue px-1.5 py-0.5 leading-none rounded-sm">
            Verified
          </span>
        )}
      </div>

      {/* Texto */}
      <p className="text-light-gray text-sm leading-relaxed">{review.body}</p>
    </article>
  );
};
