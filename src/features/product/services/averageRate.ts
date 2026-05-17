import type { Review } from "@/application/interfaces/view-models/review.model";

export const averageRate = (reviews: Review[], productId: string) => {
  const filteredReviews = reviews.filter(
    (review) => review.productId === productId,
  );
  const sum = filteredReviews.reduce((acc, review) => acc + review.rating, 0);
  return {
    averageRating: Math.floor(sum / filteredReviews.length),
    totalCount: filteredReviews.length,
  };
};
