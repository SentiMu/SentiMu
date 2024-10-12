import React from 'react';

interface ReviewChartItemProps {
    label: string;
    percentage: number;
    color: string;
}

const ReviewChartItem: React.FC<ReviewChartItemProps> = ({ label, percentage, color }) => {
    return (
        <div className="w-full sm:w-1/3 flex items-center justify-center">
            <div className="flex w-full max-w-xs items-center justify-center">
                <span className="mr-2 block h-3 w-full max-w-3 rounded-full" style={{ backgroundColor: color }}></span>
                <p className="flex w-fit gap-2 text-sm font-medium text-black dark:text-white">
                    <span>{label}</span>
                    <span>{percentage}%</span>
                </p>
            </div>
        </div>
    );
};

export default ReviewChartItem;
