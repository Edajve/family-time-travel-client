import {
    Box,
    Button,
    ButtonGroup,
    Divider,
    HStack, IconButton,
    Menu,
    MenuButton, MenuItem,
    MenuList,
    Text,
    useTheme,
    VStack
} from "@chakra-ui/react";
import {
    AddIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    HamburgerIcon
} from "@chakra-ui/icons";
import MobileCalendar from "./MobileCalendar.jsx";
import MobileCalendarTracker from "./MobileCalendarTracker.jsx";
import CalendarUtils from "../globals/Time.js";
import CalendarStyles from "../../styles/CalendarStyles.js";
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MobileRsvpView = ({currentTime, handleDateChangeClick}) => {
    const theme = useTheme();
    const styles = CalendarStyles(theme);
    const timeUtils = new CalendarUtils();

    return (
        <VStack className='calendarMobileContainer' sx={styles.calendarMobileContainer}>
            <HStack className='calendarHeader' sx={styles.calendarHeader}>
                <Box className='calendarHeaderDate' sx={styles.calendarHeaderDate}>
                    <Text className='calendarHeaderDateElement' sx={styles.calendarHeaderDateElement}>
                        {timeUtils.getUIReadyDate(currentTime)}
                    </Text>
                </Box>

                <HStack className='calendarHeaderButtonsContainer' sx={styles.calendarHeaderButtonsContainer}>
                    <ButtonGroup className='calendarHeaderButtonGroup' sx={styles.calendarHeaderButtonGroup}
                                 variant='outline' spacing='6'>
                        <Button size={2} onClick={() => handleDateChangeClick("previous year")}
                                className='calendarHeaderDateButtons' sx={styles.calendarHeaderDateButtons}
                                variant='ghost'>
                            <ArrowLeftIcon boxSize={3}/>
                        </Button>
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
                        <Button size={2} onClick={() => handleDateChangeClick("next year")}
                                className='calendarHeaderDateButtons' sx={styles.calendarHeaderDateButtons}
                                variant='ghost'>
                            <ArrowRightIcon boxSize={3}/>
                        </Button>
                    </ButtonGroup>
                    <Box className='calendarHeaderHamburgerIcon' sx={styles.calendarHeaderHamburgerIcon}>
                            {/* Other JSX components */}
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
                </HStack>
            </HStack>
            <MobileCalendar/>
            <Divider className='calendarDivider' sx={styles.calendarDivider}/>
            <MobileCalendarTracker/>
        </VStack>
    )
}

export default MobileRsvpView;