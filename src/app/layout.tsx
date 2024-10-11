"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React from "react";
import Loader from "@/components/Common/Loader";
import { Providers } from './providers';
import { useWordCloud } from '@/hooks/useReviews';
import { WordCloudData } from "@/lib/api/types";

export const WordCloudContext = React.createContext<WordCloudData[] | null>(null);

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
            <WordCloudProvider>
              {children}
            </WordCloudProvider>
          </Providers>
        </div>
      </body>
    </html>
  );
}

function WordCloudProvider({ children }: { children: React.ReactNode }) {
  const { data: wordCloudData, isLoading } = useWordCloud();
  const wordCloud = wordCloudData?.data?.word_cloud || [];

  if (isLoading) {
    return <Loader isLanding={true} />;
  }

  return (
    <WordCloudContext.Provider value={wordCloud}>
      {children}
    </WordCloudContext.Provider>
  );
}