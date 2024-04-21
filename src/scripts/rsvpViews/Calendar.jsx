import {
    Box,
    Button,
    ButtonGroup,
    Divider,
    HStack,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    useTheme,
    VStack,
} from '@chakra-ui/react';
import CalendarStyles from '../../styles/CalendarStyles';
import {AddIcon, ChevronLeftIcon, ChevronRightIcon, HamburgerIcon} from '@chakra-ui/icons';
import MobileCalendarTracker from './MobileCalendarTracker';
import {Link} from "react-router-dom";
import MobileCalendar from "./MobileCalendar.jsx";
import {useEffect, useState} from "react";
import DesktopCalendarAside from "./DesktopCalendarAside.jsx";
import CalendarUtils from "../globals/Time.js";

const Calendar = () => {
    const theme = useTheme();
    const styles = CalendarStyles(theme);
    const [isWindowOver768px, setIsWindowOver768px] = useState(window.innerWidth > 768)
    const timeUtils = new CalendarUtils();
    const [currentTime, setCurrentTime] = useState({
        date: new Date().getDate(),
        day: new Date().getDay(),
        currentMonth: new Date().getMonth(),
        year: new Date().getFullYear(),
        firstDayOfWeek: new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay()
    })

    const handleDateChangeClick = (actionType) => {
        const newTime = timeUtils.getUpdatedTime(actionType, currentTime);
        setCurrentTime(newTime);
    }

    useEffect(() => {
        const handleResize = () => {
            setIsWindowOver768px(window.innerWidth > 768)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <HStack className='calendarDesktopAndMobileContainer' gap={0} sx={styles.calendarDesktopAndMobileContainer}>
            {isWindowOver768px && <DesktopCalendarAside/>}
            {!isWindowOver768px && (
                <VStack className='calendarMobileContainer' sx={styles.calendarMobileContainer}>
                    <HStack className='calendarHeader' sx={styles.calendarHeader}>
                        <Box className='calendarHeaderDate' sx={styles.calendarHeaderDate}>
                            <Text className='calendarHeaderDateElement' sx={styles.calendarHeaderDateElement}>
                                {/*Mobile UI View*/}
                                {timeUtils.getUIReadyDate(currentTime)}
                            </Text>
                        </Box>
                        <HStack className='calendarHeaderButtonsContainer' sx={styles.calendarHeaderButtonsContainer}>
                            <ButtonGroup className='calendarHeaderButtonGroup' sx={styles.calendarHeaderButtonGroup}
                                         variant='outline' spacing='6'>
                                <Button size={2} onClick={() => handleDateChangeClick("previous month")}
                                        className='calendarHeaderDateButtons' sx={styles.calendarHeaderDateButtons}
                                        variant='ghost'>
                                    <ChevronLeftIcon boxSize={6}/>
                                </Button>
                                <Button size={2} onClick={() => handleDateChangeClick("next month")}
                                        className='calendarHeaderDateButtons' sx={styles.calendarHeaderDateButtons}
                                        variant='ghost'>
                                    <ChevronRightIcon boxSize={6}/>
                                </Button>
                            </ButtonGroup>
                            {!isWindowOver768px && (
                                <Box className='calendarHeaderHamburgerIcon' sx={styles.calendarHeaderHamburgerIcon}>
                                    <Menu>
                                        <MenuButton
                                            className='calendarHeaderHamburger'
                                            sx={styles.calendarHeaderHamburger}
                                            as={IconButton}
                                            aria-label='Options'
                                            icon={<HamburgerIcon/>}
                                            variant='ghost'
                                        />
                                        <MenuList className='calendarHeaderHamburgerMenuList'
                                                  sx={styles.calendarHeaderHamburgerMenuList}>
                                            <Link to="/rsvp/create">
                                                <MenuItem className='calendarHeaderHamburgerMenuItem'
                                                          sx={styles.calendarHeaderHamburgerMenuItem} icon={<AddIcon/>}
                                                          command='⌘T'>
                                                    Add Event
                                                </MenuItem>
                                            </Link>
                                        </MenuList>
                                    </Menu>
                                </Box>
                            )}
                        </HStack>
                    </HStack>
                    {/*This renders on UI when the vw is under 600px*/}
                    <MobileCalendar/>
                    <Divider className='calendarDivider' sx={styles.calendarDivider}/>
                    {!isWindowOver768px ? <MobileCalendarTracker/> : <Text>Something here</Text>}
                </VStack>
            )}
        </HStack>
    );
}

export default Calendar;
