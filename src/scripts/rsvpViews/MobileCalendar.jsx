import {Box, Grid, Text, useTheme,} from '@chakra-ui/react';
import CalendarStyles from "../../styles/CalendarStyles.js";

const MobileCalendar = () => {
    const theme = useTheme();
    const styles = CalendarStyles(theme);

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
                Array.from({length: 35}).map((_, index) => (
                    <Box key={index} sx={styles.calendarDayBoxEmpty}/>
                ))
            }
            {
                Array.from({length: 35}).map((_, index) => (
                    <Box key={index} sx={styles.calendarDayBox} onClick={() => handleDayClick(index + 1)}>
                        <Text>{index + 1}</Text>
                    </Box>
                ))
            }
        </Grid>
    )
}

export default MobileCalendar;