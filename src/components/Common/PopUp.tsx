import { Dispatch, SetStateAction } from 'react';
import Image from "next/image";
import { saveAs } from 'file-saver';
import { unparse } from 'papaparse';
import { Star, StarHalf } from "lucide-react";

interface reviewsData {
    id: string
    name: string;
    published_at: string;
    text: string | undefined;
    rating: number;
    image_url: string;
}

interface PopUpProps {
    showReviews: boolean;
    setShowReviews: Dispatch<SetStateAction<boolean>>;
    reviews: reviewsData[] | undefined;
    reviewerName: string;
}

function formatTime(dateString: string) {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, '0');
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${day} ${month} ${year} at ${hours}:${minutes}:${seconds}`;
}
const downloadReviewsToCSV = (reviews: reviewsData[] | undefined) => {
    if (!reviews) return;

    const csv = unparse(reviews, {
        header: true,
        skipEmptyLines: true,
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'reviews.csv');
};

const PopUp: React.FC<PopUpProps> = ({ showReviews, setShowReviews, reviews, reviewerName }) => {
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
            <div className={`fixed inset-0 z-[10000] items-center justify-center bg-black/50 backdrop-blur-md ${showReviews ? 'flex' : 'hidden'}`}>
                <div className="rounded-md border border-stroke bg-white p-5 h-fit shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="w-full mb-10 flex flex-row justify-between items-center">
                        <div className="flex flex-row gap-3">
                            <h5 className="font-medium text-black dark:text-white">
                                Repeating Reviews by {reviewerName}
                            </h5>
                            <button className="hover:text-primary" onClick={() => { downloadReviewsToCSV(reviews) }}>
                                <svg
                                    className="fill-current"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.8754 11.6719C16.5379 11.6719 16.2285 11.9531 16.2285 12.3187V14.8219C16.2285 15.075 16.0316 15.2719 15.7785 15.2719H2.22227C1.96914 15.2719 1.77227 15.075 1.77227 14.8219V12.3187C1.77227 11.9812 1.49102 11.6719 1.12539 11.6719C0.759766 11.6719 0.478516 11.9531 0.478516 12.3187V14.8219C0.478516 15.7781 1.23789 16.5375 2.19414 16.5375H15.7785C16.7348 16.5375 17.4941 15.7781 17.4941 14.8219V12.3187C17.5223 11.9531 17.2129 11.6719 16.8754 11.6719Z"
                                        fill=""
                                    />
                                    <path
                                        d="M8.55074 12.3469C8.66324 12.4594 8.83199 12.5156 9.00074 12.5156C9.16949 12.5156 9.31012 12.4594 9.45074 12.3469L13.4726 8.43752C13.7257 8.1844 13.7257 7.79065 13.5007 7.53752C13.2476 7.2844 12.8539 7.2844 12.6007 7.5094L9.64762 10.4063V2.1094C9.64762 1.7719 9.36637 1.46252 9.00074 1.46252C8.66324 1.46252 8.35387 1.74377 8.35387 2.1094V10.4063L5.40074 7.53752C5.14762 7.2844 4.75387 7.31252 4.50074 7.53752C4.24762 7.79065 4.27574 8.1844 4.50074 8.43752L8.55074 12.3469Z"
                                        fill=""
                                    />
                                </svg>
                            </button>
                        </div>

                        <button className="hover:text-primary" onClick={() => { setShowReviews(!showReviews) }}>
                            <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2" y="3" width="1.5" height="18" rx="0.75" transform="rotate(-45 2 3)" fill="" />
                                <rect width="1.5" height="18" rx="0.75" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 16 3)" fill="" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col gap-5 h-100 overflow-y-auto pr-2">
                        {reviews && reviews.map((item) => (
                            <div key={item.id} className="flex items-start gap-4.5">
                                <div className="h-10 w-10 rounded-full flex-shrink-0">
                                    <Image src={item.image_url} alt={item.name} className="rounded-full" width={50} height={50} />
                                </div>

                                <div className="flex flex-1 items-start justify-between">
                                    <div>
                                        <h5 className="font-medium text-black dark:text-white">
                                            {item.name}
                                        </h5>
                                        <p className="mt-1 text-sm max-w-115">{item.text}</p>
                                        <div className="mt-2 flex items-center gap-1">
                                            {renderStars(item.rating)}
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500">{formatTime(item.published_at)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopUp;