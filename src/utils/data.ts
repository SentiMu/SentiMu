function formatDate(dateStr: string): string {
    // Parse the input string to a Date object
    const date = new Date(dateStr);

    // Map month numbers to Indonesian month names
    const monthMap: { [key: number]: string } = {
        0: "Januari", 1: "Februari", 2: "Maret", 3: "April", 4: "Mei", 5: "Juni",
        6: "Juli", 7: "Agustus", 8: "September", 9: "Oktober", 10: "November", 11: "Desember"
    };

    // Get day, month, and year
    const day = date.getDate();
    const month = monthMap[date.getMonth()];
    const year = date.getFullYear();

    // Format the date as "DD Month YYYY"
    return `${day.toString().padStart(2, '0')} ${month} ${year}`;
}

export { formatDate };