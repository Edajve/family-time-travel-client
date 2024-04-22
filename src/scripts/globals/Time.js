class CalendarUtils {
    days = ['SUN', 'MON', 'TUES', 'WED', 'THU', 'FRI', 'SAT'];

    getNumberOfDaysInMonth(month) {
        return new Date(new Date().getFullYear(), month + 1, 0).getDate();
    }

    fromIntToStringDate(day) {
        switch (day) {
            case 0:
                return "Sun"
            case 1:
                return "Mon"
            case 2:
                return "Tue"
            case 3:
                return "Wed"
            case 4:
                return "Thu"
            case 5:
                return "Fri"
            case 6:
                return "Sat"
        }
        return undefined;
    }

    getUIReadyDate(obj) {
        const day = this.fromIntToStringDate(obj.day)
        const month = this.fromIntToStringMonth(obj.currentMonth)
        const date = this.appendOrdinalSuffix(obj.date)
        const year = obj.year
        return `${day} ${month} ${date}, ${year}`
    }

    appendOrdinalSuffix(number) {
        // Check if the number is within the range of 11 to 13 (special cases)
        if (number % 100 >= 11 && number % 100 <= 13) {
            return number + 'th';
        }

        // Determine the suffix based on the last digit of the number
        switch (number % 10) {
            case 1:
                return number + 'st';
            case 2:
                return number + 'nd';
            case 3:
                return number + 'rd';
            default:
                return number + 'th';
        }
    }

    fromIntToStringMonth(month) {
        switch (month) {
            case 0:
                return "January"
            case 1:
                return "February"
            case 2:
                return "March"
            case 3:
                return "April"
            case 4:
                return "May"
            case 5:
                return "June"
            case 6:
                return "July"
            case 7:
                return "August"
            case 8:
                return "September"
            case 9:
                return "October"
            case 10:
                return "November"
            case 11:
                return "December"
        }
        return undefined;
    }

    getUpdatedTime(actionType, currentTime) {
        let newTime;

        switch (actionType) {
            case "previous year":
                newTime = {...currentTime, year: currentTime.year - 1};
                break;
            case "previous month":
                newTime = {...currentTime, currentMonth: (currentTime.currentMonth - 1 + 12) % 12};
                break;
            case "next year":
                newTime = {...currentTime, year: currentTime.year + 1};
                break;
            case "next month":
                newTime = {...currentTime, currentMonth: (currentTime.currentMonth + 1) % 12};
                break;
            default:
                newTime = {...currentTime};
                break;
        }

        if (actionType.includes("month") || actionType.includes("year")) {
            const newEmptySpacesBeforeMonth = this.getFirstDayOfMonth(newTime.year, newTime.currentMonth);
            newTime = {...newTime, emptySpacesBeforeMonth: newEmptySpacesBeforeMonth};
        }

        return newTime;
    }

    getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay()
    };
}

export default CalendarUtils;
