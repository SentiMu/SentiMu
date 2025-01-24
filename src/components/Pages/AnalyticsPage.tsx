"use client";
import React from "react";
import TimeSeriesChart from "../Charts/TimeSeriesChart";
import RepeatingReviewers from "../Tables/RepeatingReviewers";
import CardDataStats from "../CardDataStats";
import RecentReviews from "../Tables/RecentReview";
import WordCloud from "../WordCloud/WordCloud";
import OverviewChart from "../Charts/OverviewChart";
import { UserIcon, StarIcon } from "../../assets/Assets";
import { Star, StarHalf } from 'lucide-react';
import { useTotalScore, useReviewsCount } from '@/hooks/useReviews';

const Dashboard: React.FC = () => {
  const { data: scoreData } = useTotalScore();
  const { data: countData } = useReviewsCount();

  const renderStars = (rating: number | undefined) => {
    const stars = [];
    const fullStars = Math.floor(rating ? rating : 0);
    const hasHalfStar = rating ? rating : 0 % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 text-yellow-400" />);
    }

    return stars;
  };

  return (
    <div className="overflow-y-hidden">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
        <CardDataStats title="Rating" total={scoreData?.data?.total_score} image={renderStars(scoreData?.data?.total_score)} rate="0.95%" levelUp>
          <StarIcon className="fill-primary dark:fill-white" />
        </CardDataStats>
        <CardDataStats title="Total Review" total={countData?.data?.reviews_count} rate="3.78%" levelUp>
          <UserIcon className="fill-primary dark:fill-white" />
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <OverviewChart />
        <TimeSeriesChart />
        <div className="col-span-12 lg:col-span-6">
          <RecentReviews />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <WordCloud />
        </div>
        <div className="col-span-12">
          <RepeatingReviewers />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;