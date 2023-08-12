const formatDateDiff = (dateString) => {
    const currentDate = new Date();
    const targetDate = new Date(dateString);
    const yearDiff = currentDate.getUTCFullYear() - targetDate.getUTCFullYear();
    const monthDiff = currentDate.getUTCMonth() - targetDate.getUTCMonth();
    const dayDiff = currentDate.getUTCDate() - targetDate.getUTCDate();

    if (yearDiff >= 1) {
        return yearDiff + " years ago";
    } else if (yearDiff === 0 && monthDiff > 0) {
        return monthDiff + " months ago";
    } else if ( monthDiff === 0 && dayDiff >= 7) {
        const weeks = Math.floor(dayDiff / 7);
        return weeks === 1 ? "1 week ago" : weeks + " weeks ago";
    } else if ( monthDiff === 0 && dayDiff > 0) {
        return dayDiff === 1 ? "1 day ago" : dayDiff + " days ago";
    } else {
        const hourDiff =  currentDate.getUTCHours() - targetDate.getUTCHours();
        if (hourDiff > 0) {
            return hourDiff === 1 ? "1 hour ago" : hourDiff + " hours ago";
        } else {
            const minuteDiff =  currentDate.getUTCMinutes() - targetDate.getUTCMinutes();
            console.log("1:"+dateString)
            console.log("2:"+targetDate)
            console.log("3:"+currentDate)
            console.log("4:"+ minuteDiff)
            console.log("5:"+ yearDiff)
            console.log("6:"+ monthDiff)
            return minuteDiff === 1 ? "1 minute ago" : minuteDiff + " minutes ago";
        }
    }
}
export default formatDateDiff;
