import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

function formatDate(dateStr: string): string {
    const date = new Date(dateStr);

    const monthMap: { [key: number]: string } = {
        0: "Januari", 1: "Februari", 2: "Maret", 3: "April", 4: "Mei", 5: "Juni",
        6: "Juli", 7: "Agustus", 8: "September", 9: "Oktober", 10: "November", 11: "Desember"
    };

    const day = date.getDate();
    const month = monthMap[date.getMonth()];
    const year = date.getFullYear();

    return `${day.toString().padStart(2, '0')} ${month} ${year}`;
}

function formatTime(dateStr: string): string {
    const date = new Date(dateStr);
    const currentDate = new Date();
    const diff = currentDate.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) {
        return `${years} year${years > 1 ? 's' : ''} ago`;
    } else if (months > 0) {
        return `${months} month${months > 1 ? 's' : ''} ago`;
    } else if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (seconds > 0) {
        return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    } else {
        return "Just now";
    }
}

function generateMonthCategories(): string[] {
    const currentMonth = new Date().getMonth();
    const categories: string[] = [];

    for (let i = 0; i < 12; i++) {
        const month = (currentMonth - i + 12) % 12;
        categories.unshift(new Date(2000, month, 1).toLocaleString("en-US", { month: "short" }));
    }

    return categories;
}

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export { formatDate, formatTime, generateMonthCategories };