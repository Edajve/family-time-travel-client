import {Box, Divider, HStack, Text, useTheme, VStack} from '@chakra-ui/react';
import MobileCalendarTrackerStyles from '../../styles/MobileCalendarTrackerStyles';
import mockEvents from "../globals/mocks/UpcomingEvents.js";

const MobileCalendarTracker = () => {
    const theme = useTheme();
    const styles = MobileCalendarTrackerStyles(theme);

    return (
        <VStack className='calendarMobileTrackerContainer' sx={styles.calendarMobileTrackerContainer}>
            <HStack className='calendarMobileTrackerTitleContainer' sx={styles.calendarMobileTrackerTitleContainer}>
                <Text className='calendarMobileTrackerDateProjector'
                      sx={styles.calendarMobileTrackerDateProjector}>Tomorrow</Text>
                <Text className='calendarMobileTrackerDate' sx={styles.calendarMobileTrackerDate}>April 19</Text>
            </HStack>
            <VStack className='calendarMobileTrackerEventsTodayContainer'
                    sx={styles.calendarMobileTrackerEventsTodayContainer}>
                {mockEvents.map((event, index) => (
                    <Box className='calendarMobileTrackerWrapper' sx={styles.calendarMobileTrackerWrapper} key={index}>
                        <HStack onClick={() => console.log(index)} className='calendarMobileTrackerEventListContainer'
                                sx={styles.calendarMobileTrackerEventListContainer}>
                            <Box className='calendarMobileTrackerEventsTodayTimeContainer'
                                 sx={styles.calendarMobileTrackerEventsTodayTimeContainer}>
                                <Text className='calendarMobileTrackerEventsTodayTime'
                                      sx={styles.calendarMobileTrackerEventsTodayTime}>{event.startTime}</Text>
                            </Box>
                            <Box
                                className='calendarMobileTrackerEventsIconContainer'
                                sx={{
                                    ...styles.calendarMobileTrackerEventsIconContainer,
                                    backgroundColor: event.iconColor
                                }}
                            />
                            <Box className='calendarMobileTrackerEventsDescriptionContainer'
                                 sx={styles.calendarMobileTrackerEventsDescriptionContainer}>
                                <Text className='calendarMobileTrackerEventsDescriptionText'
                                      sx={styles.calendarMobileTrackerEventsDescriptionText}>{event.description}</Text>
                            </Box>
                        </HStack>
                        <Divider/>
                    </Box>
                ))}
            </VStack>
        </VStack>
    );
};

export default MobileCalendarTracker;
