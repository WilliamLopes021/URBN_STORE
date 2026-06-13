import type { Review } from "@/interfaces/view-models/review.model";

export const averageRate = (reviews: Review[], productId: string) => {
  const filteredReviews = reviews.filter((review) => {
    console.log(productId, review.productId);
    return review.productId === productId;
  });
  const sum = filteredReviews.reduce((acc, review) => acc + review.rating, 0);
  console.log(filteredReviews, productId);
  return {
    averageRating: Math.floor(sum / filteredReviews.length),
    totalCount: filteredReviews.length,
  };
};
