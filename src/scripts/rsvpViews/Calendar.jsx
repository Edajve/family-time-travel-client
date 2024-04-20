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

import DesktopCalendar from "./DesktopCalendarGrid.jsx";

const Calendar = () => {
    const theme = useTheme();
    const styles = CalendarStyles(theme);
    const [isWindowOver768px, setIsWindowOver768px] = useState(window.innerWidth > 768)

    const handleDateChangeClick = (event) => {
        console.log(event);
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
            {/* VStack Header for both mobile and desktop calendars*/}
            <VStack className='calendarMobileContainer' sx={styles.calendarMobileContainer}>
                <HStack className='calendarHeader' sx={styles.calendarHeader}>
                    <Box className='calendarHeaderDate' sx={styles.calendarHeaderDate}>
                        <Text className='calendarHeaderDateElement' sx={styles.calendarHeaderDateElement}>
                            Fri April 19, 2024
                        </Text>
                    </Box>
                    <HStack className='calendarHeaderButtonsContainer' sx={styles.calendarHeaderButtonsContainer}>
                        <ButtonGroup className='calendarHeaderButtonGroup' sx={styles.calendarHeaderButtonGroup}
                                     variant='outline' spacing='6'>
                            <Button size={2} onClick={() => handleDateChangeClick("left")}
                                    className='calendarHeaderDateButtons' sx={styles.calendarHeaderDateButtons}
                                    variant='ghost'>
                                <ChevronLeftIcon boxSize={6}/>
                            </Button>
                            <Button size={2} onClick={() => handleDateChangeClick("right")}
                                    className='calendarHeaderDateButtons' sx={styles.calendarHeaderDateButtons}
                                    variant='ghost'>
                                <ChevronRightIcon boxSize={6}/>
                            </Button>
                        </ButtonGroup>
                        {!isWindowOver768px &&
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
                            </Box>}
                    </HStack>
                </HStack>
                {/*This renders on UI when the vw is under 600px*/}
                <MobileCalendar/>
                <Divider className='calendarDivider' sx={styles.calendarDivider}/>
                {isWindowOver768px ? (<DesktopCalendar/>) : (<MobileCalendarTracker/>)}
            </VStack>
        </HStack>
    );
}

export default Calendar;
