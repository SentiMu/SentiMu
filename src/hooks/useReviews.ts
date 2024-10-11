// src/hooks/useReviews.ts
import { useQuery } from "@tanstack/react-query";
import { ReviewsApi } from "@/lib/api/reviews";

export function useLatestReviews(count: number = 5) {
    return useQuery({
        queryKey: ["latestReviews", count],
        queryFn: () => ReviewsApi.getLatestReviews(count),
    });
}

export function useTotalScore() {
    return useQuery({
        queryKey: ["totalScore"],
        queryFn: ReviewsApi.getTotalScore,
    });
}

export function useReviewsCount() {
    return useQuery({
        queryKey: ["reviewsCount"],
        queryFn: ReviewsApi.getReviewsCount,
    });
}

export function useDuplicateReviewers() {
    return useQuery({
        queryKey: ["duplicateReviewers"],
        queryFn: ReviewsApi.getDuplicateReviewers,
    });
}

export function useWordCloud() {
    return useQuery({
        queryKey: ["wordCloud"],
        queryFn: ReviewsApi.getWordCloud,
    });
}