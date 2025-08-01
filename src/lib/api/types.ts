// src/lib/api/types.ts

export interface ApiResponse<T> {
    data: T | null;
    error: string | null;
}

export interface SetTargetWordResponse {
    message: string;
}

export interface ScoreResponse {
    total_score: number;
}

export interface CountResponse {
    reviews_count: number;
}

export interface OverviewData {
    positive: number;
    negative: number;
    neutral: number;
}

export interface OverviewResponse {
    status: OverviewData;
}

export interface TimeSeriesData {
    name: string;
    data: number[];
}

export interface TimeSeriesResponse {
    time_series: TimeSeriesData[];
}

export interface ReviewData {
    id: string
    name: string;
    published_at: string;
    text: string | undefined;
    rating: number;
    image_url: string;
}

export interface RecentReviewResponse {
    reviews: ReviewData[];
}

export interface WordCloudData {
    x: string;
    y: number;
    color: string | undefined;
}

export interface WordCloudResponse {
    word_cloud: WordCloudData[];
}

export interface RepeatingReviewsData{
    name: string;
    review_count: number;
    latest_review_date: string;
    status: string | undefined;
    reasons: string[];
    image_url: string;
    reviews: ReviewData[];
}

export interface RepeatingReviewsResponse {
    duplicate_reviewers: RepeatingReviewsData[];
}