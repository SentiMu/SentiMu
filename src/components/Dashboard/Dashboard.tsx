"use client";
import React from "react";
import ReviewChart from "../Charts/ReviewChart";
import TopRepeatingReviewers from "../Tables/TopRepeatingReviewers";
import CardDataStats from "../CardDataStats";
import RecentReviews from "../Tables/RecentReview";
import WordCloud from "../WordCloud/WordCloud";
import DetailedReviewChart from "../Charts/DetailedReviewChart";
import { UserIcon, StarIcon, EyeIcon, TrendIcon } from "../../assets/Assets";
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
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Rating" total={scoreData?.data?.total_score} image={renderStars(scoreData?.data?.total_score)} rate="0.95%" levelUp>
          <StarIcon className="fill-primary dark:fill-white" />
        </CardDataStats>
        <CardDataStats title="Total Review" total={countData?.data?.reviews_count} rate="3.78%" levelUp>
          <UserIcon className="fill-primary dark:fill-white" />
        </CardDataStats>
        <CardDataStats title="Total Visitor" total={countData?.data?.reviews_count} rate="1.31%" levelUp>
          <EyeIcon className="fill-primary dark:fill-white" />
        </CardDataStats>
        <CardDataStats title="Quarter Trend" total={countData?.data?.reviews_count} levelDown>
          <TrendIcon className="fill-primary dark:fill-white" />
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <DetailedReviewChart />
        <ReviewChart />
        <div className="col-span-12 lg:col-span-6">
          <RecentReviews />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <WordCloud />
        </div>
        <div className="col-span-12">
          <TopRepeatingReviewers />
        </div>
      </div>
    </>
  );
};

export default Dashboard;