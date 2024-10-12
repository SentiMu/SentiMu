"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React from "react";
import Loader from "@/components/Common/Loader";
import { Providers } from './providers';
import { useOverview, useTimeSeries, useRecentReviews , useWordCloud, useRepeatingReviews } from '@/hooks/useReviews';
import { OverviewData, TimeSeriesData, ReviewData, WordCloudData, RepeatingReviewsData } from "@/lib/api/types";

export const DataContext = React.createContext<{
  overview: OverviewData | null;
  timeSeries: TimeSeriesData[] | null;
  recentReviews: ReviewData[] | null;
  wordCloud: WordCloudData[] | null;
  repeatingReviews: RepeatingReviewsData[] | null;
}>({
  overview: null,
  timeSeries: null,
  recentReviews: null,
  wordCloud: null,
  repeatingReviews: null,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          <Providers>
            <DataProvider>
                {children}
            </DataProvider>
          </Providers>
        </div>
      </body>
    </html>
  );
}

function DataProvider({ children }: { children: React.ReactNode }) {
  const { data: overviewData, isLoading: isLoadingOverview } = useOverview();
  const { data: timeSeriesData, isLoading: isLoadingTimeSeries } = useTimeSeries();
  const { data: reviewsData, isLoading: isLoadingReviews } = useRecentReviews(5);
  const { data: wordCloudData, isLoading: isLoadingWordCloud } = useWordCloud();
  const { data: repeatingReviewsData, isLoading: isLoadingRepeatingReviews } = useRepeatingReviews();

  const isLoading = isLoadingOverview || isLoadingTimeSeries || isLoadingReviews || isLoadingWordCloud || isLoadingRepeatingReviews;

  if (isLoading) {
    return <Loader isLanding={true} />;
  }

  const contextValue = {
    overview: overviewData?.data?.status || null,
    timeSeries: timeSeriesData?.data?.time_series || [],
    recentReviews: reviewsData?.data?.reviews || [],
    wordCloud: wordCloudData?.data?.word_cloud || [],
    repeatingReviews: repeatingReviewsData?.data?.duplicate_reviewers || [],
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
}