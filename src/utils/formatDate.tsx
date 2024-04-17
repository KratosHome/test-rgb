export const formatDate = (date: Date | string): string => {
    const validDate = new Date(date);

    const day = validDate.getDate().toString().padStart(2, '0');
    const month = (validDate.getMonth() + 1).toString().padStart(2, '0');
    const year = validDate.getFullYear().toString();
    let timePart = '';


    return `${day}.${month}.${year}${timePart}`;
};
