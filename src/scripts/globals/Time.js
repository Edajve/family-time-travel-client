const days = ['SUN', 'MON', 'TUES', 'WED', 'THU', 'FRI', 'SAT'];

const currentTimeObj = {
    date: new Date().getDate()
    , day: new Date().getDay()
    , monthPlusOne: new Date().getMonth() + 1
    , currentMonth: new Date().getMonth()
    , year: new Date().getFullYear()
    , firstDayOfWeek: new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay()
}

const getNumberOfDaysInMonth = (month) => {
    return new Date(new Date().getFullYear(), month + 1, 0).getDate();
};

export {days, currentTimeObj, getNumberOfDaysInMonth};
