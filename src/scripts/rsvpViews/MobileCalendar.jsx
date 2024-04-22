import {Box, Grid, Text, useTheme,} from '@chakra-ui/react';
import CalendarStyles from "../../styles/CalendarStyles.js";
import {useEffect, useState} from "react";
import CalendarUtils from "../globals/Time.js";

const MobileCalendar = ({currentTime}) => {
    const theme = useTheme();
    const styles = CalendarStyles(theme);
    const timeUtils = new CalendarUtils()
    const [spacesTillFirstDay, setSpacesTillFirstDay] = useState();

    useEffect(() => {
        setSpacesTillFirstDay(currentTime.emptySpacesBeforeMonth)
    }, [currentTime]);

    const handleDayClick = (day) => {
        console.log("Day clicked:", day);
    };

    return (
        <Grid
            templateColumns="repeat(7, 1fr)"
            gap={6}
            className='calendarMobileCalendarContainer'
            sx={styles.calendarMobileCalendarContainer}
        >
            {
                Array.from(timeUtils.days).map((_day, index) => (
                    <Box key={index} sx={styles.calendarDayBoxEmpty}><Text textAlign='center'>{_day}</Text></Box>
                ))
            }
            {
                Array.from({length: spacesTillFirstDay}).map((_, index) => (
                    <Box key={index} sx={styles.calendarDayBoxEmpty}/>
                ))
            }
            {
                Array.from({length: timeUtils.getNumberOfDaysInMonth(currentTime.currentMonth)}).map((_, index) => (
                    <Box key={index} sx={styles.calendarDayBox} onClick={() => handleDayClick(index + 1)}>
                        <Text>{index + 1}</Text>
                    </Box>
                ))
            }
        </Grid>
    )
}

export default MobileCalendar;