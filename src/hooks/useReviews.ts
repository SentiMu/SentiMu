// src/hooks/useReviews.ts
import { useQuery } from "@tanstack/react-query";
import { ReviewsApi } from "@/lib/api/reviews";

export function useSetTargetWord(word: string) {
    return useQuery({
        queryKey: ["setTargetWord"],
        queryFn: () => ReviewsApi.setTargetWord(word),
    })
}

export function useRecentReviews() {
    return useQuery({
        queryKey: ["latestReviews"],
        queryFn: () => ReviewsApi.getRecentReviews(),
    });
}

export function useTotalScore() {
    return useQuery({
        queryKey: ["totalScore"],
        queryFn: ReviewsApi.getTotalScore,
    });
}

export function useOverview() {
    return useQuery({
        queryKey: ["overview"],
        queryFn: ReviewsApi.getOverview,
    });
}

export function useTimeSeries() {
    return useQuery({
        queryKey: ["timeSeries"],
        queryFn: ReviewsApi.getTimeSeries,
    });
}

export function useReviewsCount() {
    return useQuery({
        queryKey: ["reviewsCount"],
        queryFn: ReviewsApi.getReviewsCount,
    });
}

export function useWordCloud() {
    return useQuery({
        queryKey: ["wordCloud"],
        queryFn: ReviewsApi.getWordCloud,
    });
}

export function useRepeatingReviews() {
    return useQuery({
        queryKey: ["duplicateReviewers"],
        queryFn: ReviewsApi.getRepeatingReviews,
    });
}