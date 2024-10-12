"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React from "react";
import Loader from "@/components/Common/Loader";
import { Providers } from './providers';
import { useWordCloud, useOverview } from '@/hooks/useReviews';
import { WordCloudData, OverviewData } from "@/lib/api/types";

export const DataContext = React.createContext<{
  wordCloud: WordCloudData[] | null;
  overview: OverviewData | null;
}>({
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
  const { data: wordCloudData, isLoading: isLoadingWordCloud } = useWordCloud();
  const { data: overviewData, isLoading: isLoadingOverview } = useOverview();

  const isLoading = isLoadingWordCloud || isLoadingOverview;

  if (isLoading) {
    return <Loader isLanding={true} />;
  }

  const contextValue = {
    wordCloud: wordCloudData?.data?.word_cloud || [],
    overview: overviewData?.data?.status || null,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
}