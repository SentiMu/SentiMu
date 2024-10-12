
// src/lib/api/reviews.ts
import axios from "axios";
import { 
    ApiResponse, 
    RecentReviewResponse, 
    ScoreResponse, 
    CountResponse, 
    DuplicateReviewsResponse,
    WordCloudResponse,
    OverviewResponse
} from "./types";

const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

export class ReviewsApi {
    static async getTotalScore(): Promise<ApiResponse<ScoreResponse>> {
        try {
            const response = await apiClient.get<ScoreResponse>("/total-score");
            return { data: response.data, error: null };
        } catch (error) {
            console.error("Error fetching total score:", error);
            return { data: null, error: "Failed to fetch total score" };
        }
    }

    static async getReviewsCount(): Promise<ApiResponse<CountResponse>> {
        try {
            const response = await apiClient.get<CountResponse>("/reviews-count");
            return { data: response.data, error: null };
        } catch (error) {
            console.error("Error fetching reviews count:", error);
            return { data: null, error: "Failed to fetch reviews count" };
        }
    }

    static async getRecentReviews(
        count: number = 5
    ): Promise<ApiResponse<RecentReviewResponse>> {
        try {
            const response = await apiClient.get<RecentReviewResponse>(
                `/latest-reviews/${count}`
            );
            return { data: response.data, error: null };
        } catch (error) {
            console.error("Error fetching latest reviews:", error);
            return { data: null, error: "Failed to fetch latest reviews" };
        }
    }

    static async getDuplicateReviewers(): Promise<ApiResponse<DuplicateReviewsResponse>> {
        try {
            const response = await apiClient.get<DuplicateReviewsResponse>("/duplicate-reviews");
            return { data: response.data, error: null };
        } catch (error) {
            console.error("Error fetching duplicate reviewers:", error);
            return { data: null, error: "Failed to fetch duplicate reviewers" };
        }
    }

    static async getWordCloud(): Promise<ApiResponse<WordCloudResponse>> {
        try {
            const response = await apiClient.get<WordCloudResponse>("/word-cloud");
            return { data: response.data, error: null };
        } catch (error) {
            console.error("Error fetching word cloud:", error);
            return { data: null, error: "Failed to fetch word cloud" };
        }
    }

    static async getOverview(): Promise<ApiResponse<OverviewResponse>> {
        try {
            const response = await apiClient.get<OverviewResponse>("/overview");
            return { data: response.data, error: null };
        } catch (error) {
            console.error("Error fetching overview:", error);
            return { data: null, error: "Failed to fetch overview" };
        }
    }
}