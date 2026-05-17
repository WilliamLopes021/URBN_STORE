import { Anchor } from "@/interfaces/router/Link";
import { StarRating } from "../atoms/StarRating";
import { ReviewCard } from "../molecules/ReviewCard";
import type { Review } from "@/application/interfaces/view-models/review.model";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type CustomerReviewsProps = {
  reviews: Review[];
  averageRating: number;
  totalCount: number;
  seeAllHref?: string;
};

export const CustomerReviews = ({
  reviews,
  averageRating,
  totalCount,
  seeAllHref = "/reviews",
}: CustomerReviewsProps) => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const pages: Review[][] = [];
  const items = [];

  for (const review of reviews) {
    items.push(review);
    if (items.length === 3 || review.id === reviews[reviews.length - 1].id) {
      pages.push([...items]);
      items.length = 0;
    }
  }

  const next = () => {
    console.log(pages)
    setCurrentReviewIndex((prev) => {
      if (prev === pages.length - 1) return prev;
      return prev + 1;
    });
  };

  const prev = () => {
    setCurrentReviewIndex((prev) => {
      if (prev === 0) return prev;
      return prev - 1;
    });
  };

  return (
    <section className="bg-surface w-full px-5 py-6 font-sans">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-text-primary font-black text-base uppercase tracking-widest">
          Customer Reviews
        </h2>
        <Anchor
          to={seeAllHref}
          className="text-accent-blue text-xs font-semibold hover:underline transition-all"
        >
          See all reviews
        </Anchor>
      </div>

      {/* Média geral */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-text-primary font-black text-4xl leading-none">
          {averageRating.toFixed(1)}
        </span>
        <div className="flex flex-col gap-1">
          <StarRating rating={averageRating} size={18} />
          <span className="text-light-gray text-xs">({totalCount})</span>
        </div>
      </div>

      {/* Lista de reviews */}
      <div>
        {pages[currentReviewIndex].map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
        <div className="flex items-center gap-10 mt-5 w-full justify-end text-text-primary">
          <ChevronLeft onClick={() => prev()} />
          <ChevronRight onClick={() => next()} />
        </div>
      </div>
    </section>
  );
};
