import React from 'react';
import Image from 'next/image';
import { Star, StarHalf } from 'lucide-react';

interface Review {
    id: number;
    name: string;
    time: string;
    text: string;
    rating: number;
    imageUrl: string;
}

const recentReviews: Review[] = [
    {
        id: 1,
        name: "Devid Heilo",
        time: "12 min ago",
        text: "Hello, great product! Just what I needed.",
        rating: 4.5,
        imageUrl: "/images/logo/logo-icon.svg"
    },
    {
        id: 2,
        name: "Henry Fisher",
        time: "1 hour ago",
        text: "Excellent service and quality.",
        rating: 5,
        imageUrl: "/images/logo/logo-icon.svg"
    },
    {
        id: 3,
        name: "William Smith",
        time: "2 hours ago",
        text: "Good experience overall.",
        rating: 4,
        imageUrl: "/images/logo/logo-icon.svg"
    },
    {
        id: 3,
        name: "William Smith",
        time: "2 hours ago",
        text: "Good experience overall.",
        rating: 4,
        imageUrl: "/images/logo/logo-icon.svg"
    }
];

const RecentReviews: React.FC = () => {
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
        <div className="col-span-12 rounded-sm border border-stroke bg-white p-5 h-full shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
            <div className="mb-6 flex items-start justify-between">
                <div>
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                        Recent Reviews
                    </h4>
                </div>
            </div>

            <div className="flex flex-col gap-5">
                {recentReviews.map((review) => (
                    <div key={review.id} className="flex items-start gap-4.5">
                        <div className="h-10 w-10 rounded-full">
                            <Image src={review.imageUrl} alt={review.name} className="rounded-full" width={50} height={50} />
                        </div>

                        <div className="flex flex-1 items-start justify-between">
                            <div>
                                <h5 className="font-medium text-black dark:text-white">
                                    {review.name}
                                </h5>
                                <p className="mt-1 text-sm">{review.text}</p>
                                <div className="mt-2 flex items-center gap-1">
                                    {renderStars(review.rating)}
                                </div>
                            </div>
                            <p className="text-sm text-gray-500">{review.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentReviews;