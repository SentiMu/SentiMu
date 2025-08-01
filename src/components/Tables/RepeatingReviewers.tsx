"use client";
import { useState } from "react";
import Image from "next/image";
import { formatDate } from "@/utils/data";
import { useContext } from "react";
import { DataContext } from "@/app/layout";
import PopUp from "../Common/PopUp";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/Common/Tooltip";

interface reviewData {
    id: string
    name: string;
    published_at: string;
    text: string | undefined;
    rating: number;
    image_url: string;
}

const RepeatingReviewers = () => {

    const [showReviews, setShowReviews] = useState(false);
    const [reviewerName, setreviewerName] = useState("");
    const [reviewsData, setreviewsData] = useState<reviewData[]>();
    const { repeatingReviews } = useContext(DataContext);
    const repeatingReviewsData = repeatingReviews || [];

    const showReviewHandler = (reviewData: reviewData[], reviewerName: string) => {
        setShowReviews(!showReviews)
        setreviewsData(reviewData)
        setreviewerName(reviewerName)
    }

    return (
        <div className="relative overflow-y-hidden">
            <PopUp showReviews={showReviews} setShowReviews={setShowReviews} reviews={reviewsData} reviewerName={reviewerName} />
            <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <div className="max-w-full overflow-x-auto">
                    <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
                        Top Repeating Reviewers
                    </h4>
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="bg-gray-2 text-left dark:bg-meta-4">
                                <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                                    Users
                                </th>
                                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white hidden lg:table-cell">
                                    Total Review
                                </th>
                                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white hidden lg:table-cell">
                                    Last Review Date
                                </th>
                                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white hidden md:table-cell">
                                    Status
                                </th>
                                <th className="px-4 py-4 font-medium text-black dark:text-white text-center">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                repeatingReviewsData.length == 0 ?
                                    <tr>
                                        <td
                                            className="items-center text-center gap-3 border-b border-[#eee] px-4 py-20 pl-9 dark:border-strokedark xl:pl-11 table-cell"
                                            colSpan={5}
                                        >
                                            No users have posted repeated reviews in the past 12 months.
                                        </td>
                                    </tr>
                                    :
                                    repeatingReviewsData.map((packageItem, key) => (
                                        <tr key={key}>
                                            <td className="flex items-center gap-3 border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                                                <div className="flex-shrink-0">
                                                    <Image src={packageItem.image_url} alt="Brand" width={48} height={48} />
                                                </div>
                                                <h5 className="font-medium text-black dark:text-white">
                                                    {packageItem.name}
                                                </h5>
                                            </td>
                                            <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark hidden lg:table-cell">
                                                <p className="text-black dark:text-white">
                                                    {packageItem.review_count}
                                                </p>
                                            </td>
                                            <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark hidden lg:table-cell">
                                                <p className="text-black dark:text-white">
                                                    {formatDate(packageItem.latest_review_date)}
                                                </p>
                                            </td>
                                            <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark hidden md:table-cell">
                                                <TooltipProvider delayDuration={200}>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <p
                                                                className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium 
                                                                ${packageItem.status === "Organic"
                                                                        ? "bg-success text-success"
                                                                        : packageItem.status === "Spam"
                                                                            ? "bg-danger text-danger"
                                                                            : "bg-warning text-warning"
                                                                    }`}
                                                            >
                                                                {packageItem.status}
                                                            </p>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p
                                                                className={`flex flex-col rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium 
                                                                ${packageItem.status === "Organic"
                                                                        ? "text-success"
                                                                        : packageItem.status === "Spam"
                                                                            ? "text-danger"
                                                                            : "text-warning"
                                                                    }`}
                                                            >
                                                                {packageItem.reasons?.map((item, index) => (
                                                                    <p key={index}>
                                                                        {item}
                                                                    </p>
                                                                )) || <p>No reasons available</p>}
                                                            </p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </td>
                                            <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                                                <div className="flex items-center space-x-3.5 justify-center">
                                                    <button className="hover:text-primary" onClick={() => { showReviewHandler(packageItem.reviews, packageItem.name) }}>
                                                        <svg
                                                            className="fill-current"
                                                            width="18"
                                                            height="18"
                                                            viewBox="0 0 18 18"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                                                                fill=""
                                                            />
                                                            <path
                                                                d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                                                                fill=""
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RepeatingReviewers;