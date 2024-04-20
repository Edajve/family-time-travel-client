import React from 'react';
import {
    Box,
    useTheme,
    VStack,
    HStack,
    Text,
    ButtonGroup,
    Button,
    Grid,
    Divider
} from '@chakra-ui/react';
import CalendarStyles from '../../styles/CalendarStyles';
import { ChevronLeftIcon, ChevronRightIcon, HamburgerIcon } from '@chakra-ui/icons';
import MobileCalendarTracker from './MobileCalendarTracker';

const Calendar = () => {
    const theme = useTheme();
    const styles = CalendarStyles(theme);

    const handleDateChangeClick = (event) => {
        console.log(event);
    }

    const handleDayClick = (day) => {
        console.log("Day clicked:", day);
    };

    return (
        <VStack className='calendarContainer' sx={styles.calendarContainer}>
            <HStack className='calendarHeader' sx={styles.calendarHeader}>
                <Box className='calendarHeaderDate' sx={styles.calendarHeaderDate}>
                    <Text className='calendarHeaderDateElement' sx={styles.calendarHeaderDateElement}>
                        Fri April 19, 2024
                    </Text>
                </Box>
                <HStack className='calendarHeaderButtonsContainer' sx={styles.calendarHeaderButtonsContainer}>
                    <ButtonGroup variant='outline' spacing='6'>
                        <Button size={2} onClick={() => handleDateChangeClick("left")} className='calendarHeaderDateButtons' sx={styles.calendarHeaderDateButtons} variant='ghost'>
                            <ChevronLeftIcon boxSize={6} />
                        </Button>
                        <Button size={2} onClick={() => handleDateChangeClick("right")} className='calendarHeaderDateButtons' sx={styles.calendarHeaderDateButtons} variant='ghost'>
                            <ChevronRightIcon boxSize={6} />
                        </Button>
                    </ButtonGroup>
                    <Box className='calendarHeaderHamburgerIcon' sx={styles.calendarHeaderHamburgerIcon}>
                        <HamburgerIcon boxSize={6} />
                    </Box>
                </HStack>
            </HStack>
            <Grid
                templateColumns="repeat(7, 1fr)"
                gap={6}
                className='calendarCalendarContainer'
                sx={styles.calendarCalendarContainer}
            >
                {
                    Array.from({ length: 35 }).map((_, index) => (
                        <Box key={index} sx={styles.calendarDayBox} onClick={() => handleDayClick(index + 1)}>
                            <Text>{index + 1}</Text>
                        </Box>
                    ))
                }
            </Grid>
            <Divider className='calendarDivider' sx={styles.calendarDivider} />
            <MobileCalendarTracker />
        </VStack>
    );
}

export default Calendar;
