function logMyError(error) {
    console.error("An error occurred: ", error);
}

function getMonthName(monthNumber) {
    monthNumber--;
    const months = ["January", "February", "March", "April", "May", "June", "July", 
                    "August", "September", "October", "November", "December"];

    if (!months[monthNumber]) {
        throw new Error("Invalid month number: " + (monthNumber + 1));
    }

    return months[monthNumber];
}

try {
    monthName = getMonthName(17);

} catch(console) {
    monthName = "Unknown";
    logMyError(console);
}
