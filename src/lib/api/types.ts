// src/lib/api/types.ts

export interface Review {
    id: string
    name: string;
    published_at: string;
    text: string | undefined;
    rating: number;
    image_url: string;
}

export interface DuplicateReview{
    name: string;
    review_count: number;
    latest_review_date: string;
    status: string | undefined;
    image_url: string;
    reviews: Review[];
}

export interface WordCloudData {
    x: string;
    y: number;
    color: string | undefined;
}

export interface ApiResponse<T> {
    data: T | null;
    error: string | null;
}

export interface ReviewsResponse {
    reviews: Review[];
}

export interface ScoreResponse {
    total_score: number;
}

export interface CountResponse {
    reviews_count: number;
}

export interface DuplicateReviewsResponse {
    duplicate_reviewers: DuplicateReview[];
}

export interface WordCloudResponse {
    word_cloud: WordCloudData[];
}