import {Box, Divider, HStack, Text, useTheme, VStack} from '@chakra-ui/react';
import MobileCalendarTrackerStyles from '../../styles/MobileCalendarTrackerStyles';
import mockEvents from "../globals/mocks/UpcomingEvents.js";
import CalendarUtils from "../globals/Time.js";

const MobileCalendarTracker = ({currentTime, eventsForTheDay}) => {
    const theme = useTheme();
    const styles = MobileCalendarTrackerStyles(theme);
    var timeUtils = new CalendarUtils()

    return (
        <VStack className='calendarMobileTrackerContainer' sx={styles.calendarMobileTrackerContainer}>
            <HStack className='calendarMobileTrackerTitleContainer' sx={styles.calendarMobileTrackerTitleContainer}>
                <Text className='calendarMobileTrackerDateProjector'
                      sx={styles.calendarMobileTrackerDateProjector}>Tomorrow</Text>
                <Text
                    className='calendarMobileTrackerDate'
                    sx={styles.calendarMobileTrackerDate}>
                    {`${timeUtils.fromIntToStringMonth(currentTime.currentMonth)} 
                    ${currentTime.date}. ${eventsForTheDay.totalEvents} Events`}
                </Text>
            </HStack>
            <VStack className='calendarMobileTrackerEventsTodayContainer'
                    sx={styles.calendarMobileTrackerEventsTodayContainer}>
                {mockEvents.events ? (
                    mockEvents.events.map((event, index) => (
                        <Box className='calendarMobileTrackerWrapper' sx={styles.calendarMobileTrackerWrapper}
                             key={event.eventId}>
                            <HStack onClick={() => console.log(index)}
                                    className='calendarMobileTrackerEventListContainer'
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
                    ))
                ) : null}
            </VStack>
        </VStack>
    );
};

export default MobileCalendarTracker;
