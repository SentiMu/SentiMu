"use client";
import React from "react";
import ReviewChart from "../Charts/ReviewChart";
import TopYearlyRepeatReviewers from "../Tables/TopYearlyRepeatReviewers";
import CardDataStats from "../CardDataStats";
import RecentReviews from "../Tables/RecentReview";
import WordCloud from "../WordCloud/WordCloud";
import DetailedReviewChart from "../Charts/DetailedReviewChart";
import { UserIcon, StarIcon, EyeIcon, TrendIcon } from "../../assets/Assets";
import { Star, StarHalf } from 'lucide-react';

const Dashboard: React.FC = () => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

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
        <CardDataStats title="Rating" total="4.83" image={renderStars(4.83)} rate="0.95%" levelUp>
          <StarIcon />
        </CardDataStats>
        <CardDataStats title="Total Review" total="3.456" rate="3.78%" levelUp>
          <UserIcon />
        </CardDataStats>
        <CardDataStats title="Total Visitor" total="1.221" rate="1.31%" levelUp>
          <EyeIcon />
        </CardDataStats>
        <CardDataStats title="Quarter Trend" total="60% Negative" levelDown>
          <TrendIcon />
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
          <TopYearlyRepeatReviewers />
        </div>
      </div>
    </>
  );
};

export default Dashboard;