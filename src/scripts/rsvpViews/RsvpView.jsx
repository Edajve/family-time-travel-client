import {HStack, useTheme} from '@chakra-ui/react';
import CalendarStyles from '../../styles/CalendarStyles';
import {useEffect, useState} from 'react';
import DesktopRsvpView from './DesktopRsvpView.jsx';
import MobileRsvpView from './MobileRsvpView.jsx';
import CalendarUtils from '../globals/Time.js';
import UpcomingEvents from "../globals/mocks/UpcomingEvents.js";

const RsvpView = () => {
    const theme = useTheme();
    const styles = CalendarStyles(theme);
    const [isWindowOver768px, setIsWindowOver768px] = useState(window.innerWidth > 768);
    const timeUtils = new CalendarUtils();
    const [eventsForTheDay] = useState(UpcomingEvents)
    const [currentTime, setCurrentTime] = useState(() => {
        const currentDate = new Date();
        return {
            date: currentDate.getDate(),
            day: currentDate.getDay(),
            currentMonth: currentDate.getMonth(),
            year: currentDate.getFullYear(),
            emptySpacesBeforeMonth: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()
        };
    });

    useEffect(() => {
        // Check width of view port
        const handleResize = () => setIsWindowOver768px(window.innerWidth > 768)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [currentTime]);

    const handleDateChangeClick = (actionType) => {
        const newTime = timeUtils.getUpdatedTime(actionType, currentTime);
        setCurrentTime(newTime);
    };

    return (
        <HStack className='calendarDesktopAndMobileContainer' gap={0} sx={styles.calendarDesktopAndMobileContainer}>
            {isWindowOver768px ? (
                <DesktopRsvpView
                    currentTime={currentTime}
                    eventsForTheDay={eventsForTheDay}
                    handleDateChangeClick={handleDateChangeClick}
                />
            ) : (
                <MobileRsvpView
                    currentTime={currentTime}
                    eventsForTheDay={eventsForTheDay}
                    handleDateChangeClick={handleDateChangeClick}
                />
            )}
        </HStack>
    );
};

export default RsvpView;
