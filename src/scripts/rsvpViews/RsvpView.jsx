import {HStack, useTheme} from '@chakra-ui/react';
import CalendarStyles from '../../styles/CalendarStyles';
import {useEffect, useState} from "react";
import DesktopRsvpView from "./DesktopRsvpView.jsx";
import MobileRsvpView from "./MobileRsvpView.jsx";
import CalendarUtils from "../globals/Time.js";

const RsvpView = () => {
    const theme = useTheme();
    const styles = CalendarStyles(theme);
    const [isWindowOver768px, setIsWindowOver768px] = useState(window.innerWidth > 768);
    const timeUtils = new CalendarUtils();
    const [currentTime, setCurrentTime] = useState({
        date: new Date().getDate(),
        day: new Date().getDay(),
        currentMonth: new Date().getMonth(),
        year: new Date().getFullYear(),
        firstDayOfWeek: new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay()
    });

    useEffect(() => {
        const handleResize = () => {
            setIsWindowOver768px(window.innerWidth > 768);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const handleDateChangeClick = (actionType) => {
        const newTime = timeUtils.getUpdatedTime(actionType, currentTime);
        setCurrentTime(newTime);
    }

    return (
        <HStack className='calendarDesktopAndMobileContainer' gap={0} sx={styles.calendarDesktopAndMobileContainer}>
            {isWindowOver768px ? (
                <DesktopRsvpView
                    currentTime={currentTime}
                    handleDateChangeClick={handleDateChangeClick}
                />
            ) : (
                <MobileRsvpView
                    currentTime={currentTime}
                    handleDateChangeClick={handleDateChangeClick}
                />
            )}
        </HStack>
    );
}

export default RsvpView;
