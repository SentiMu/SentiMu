import React, { useState } from 'react';

interface TimelineSwitcherProps {
    onTimelineChange?: (timeline: string) => void;
}

interface TimelineOption {
    id: string;
    label: string;
}

const TimelineSwitcher: React.FC<TimelineSwitcherProps> = ({ onTimelineChange }) => {
    const [activeTimeline, setActiveTimeline] = useState<string>('day');

    const timelineOptions: TimelineOption[] = [
        { id: 'day', label: 'Day' },
        { id: 'month', label: 'Month' },
        { id: 'year', label: 'Year' },
    ];

    const handleTimelineChange = (timeline: string) => {
        setActiveTimeline(timeline);
        if (onTimelineChange) {
            onTimelineChange(timeline);
        }
    };

    return (
        <div className="flex w-full max-w-45 justify-end">
            <div className="inline-flex items-center rounded-md bg-gray-100 p-1.5 dark:bg-gray-800">
                {timelineOptions.map((option: TimelineOption) => (
                    <button
                        key={option.id}
                        onClick={() => handleTimelineChange(option.id)}
                        className={`rounded px-3 py-1 text-xs font-medium transition-all ${activeTimeline === option.id
                            ? 'bg-white text-black shadow-md dark:bg-gray-700 dark:text-white'
                            : 'text-black hover:bg-white hover:shadow-md dark:text-white dark:hover:bg-gray-700'
                            }`}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TimelineSwitcher;
