"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React from "react";
import Loader from "@/components/Common/Loader";
import { Providers } from './providers';
import { useRecentReviews , useWordCloud, useOverview } from '@/hooks/useReviews';
import { ReviewData, WordCloudData, OverviewData } from "@/lib/api/types";

export const DataContext = React.createContext<{
  recentReviews: ReviewData[] | null;
  wordCloud: WordCloudData[] | null;
  overview: OverviewData | null;
}>({
  recentReviews: null,
  wordCloud: null,
  overview: null,
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
  const { data: reviewsData, isLoading: isLoadingReviews } = useRecentReviews(5);
  const { data: wordCloudData, isLoading: isLoadingWordCloud } = useWordCloud();
  const { data: overviewData, isLoading: isLoadingOverview } = useOverview();

  const isLoading = isLoadingReviews || isLoadingWordCloud || isLoadingOverview;

  if (isLoading) {
    return <Loader isLanding={true} />;
  }

  const contextValue = {
    recentReviews: reviewsData?.data?.reviews || [],
    wordCloud: wordCloudData?.data?.word_cloud || [],
    overview: overviewData?.data?.status || null,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
}