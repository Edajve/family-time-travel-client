import {
    Box, Button, ButtonGroup, HStack, IconButton, Input,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    useTheme
} from "@chakra-ui/react";
import CalendarStyles from "../../styles/CalendarStyles.js";
import {
    AddIcon,
    ArrowLeftIcon, ArrowRightIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    HamburgerIcon
} from "@chakra-ui/icons";
import {Link} from "react-router-dom";
import DesktopCalendarGrid from "./DesktopCalendarGrid.jsx";
import {useEffect, useState} from "react";
import CalendarUtils from "../globals/Time.js";


const DesktopCalendarAside = () => {
    const theme = useTheme();
    const styles = CalendarStyles(theme);
    const [isWindowOver768px, setIsWindowOver768px] = useState(window.innerWidth > 768)
    const [filterSearch, setFilterSearch] = useState("");
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

    function handleFilterSearch(input) {
        setFilterSearch(input.target.value)
    }

    return (
        <Box className='calendarDesktopAsideContainer' sx={styles.calendarDesktopAsideContainer}>
            <Box className='calendarAsideNewEventButton' sx={styles.calendarAsideNewEventButton}>
                <Menu>
                    <MenuButton
                        className='calendarAsideNewEventButtonMenuButton'
                        sx={styles.calendarAsideNewEventButtonMenuButton}
                        px={4}
                        py={2}
                        variant='ghost'
                        transition='all 0.2s'
                        borderRadius='md'
                        borderWidth='1px'
                        _hover={{bg: 'gray.400'}}
                        _expanded={{bg: 'blue.400'}}
                        _focus={{boxShadow: 'outline'}}
                    >
                        <Text className='calendarAsideNewEventText' sx={styles.calendarAsideNewEventText}>
                        Create <ChevronDownIcon/>
                        </Text>
                    </MenuButton>
                    <MenuList className='calendarAsideNewEventButtonMenuList'
                              sx={styles.calendarAsideNewEventButtonMenuList}>
                        <Link to={'/rsvp/create'}>
                            <MenuItem className='calendarAsideNewEventButtonMenuItem'
                                      sx={styles.calendarAsideNewEventButtonMenuItem}>New RSVP</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Box>
            <Box>
                <HStack className='calendarHeader' sx={styles.calendarHeader}>

                    <HStack className='calendarHeaderButtonsContainer' sx={styles.calendarHeaderButtonsContainer}>
                        <ButtonGroup className='calendarHeaderButtonGroup' sx={styles.calendarHeaderButtonGroup}
                                     variant='outline' spacing='6'>
                            <Button size={1} onClick={() => handleDateChangeClick("previous year")}
                                    className='calendarHeaderDateButtons' sx={styles.calendarHeaderDateButtons}
                                    variant='ghost'>
                                <ArrowLeftIcon boxSize={2}/>
                            </Button>
                            <Button size={1} onClick={() => handleDateChangeClick("previous month")}
                                    className='calendarHeaderDateButtons' sx={styles.calendarHeaderDateButtons}
                                    variant='ghost'>
                                <ChevronLeftIcon boxSize={3}/>
                            </Button>
                            <Box className='calendarHeaderDate' sx={styles.calendarHeaderDate}>
                                <Text className='calendarHeaderDateElement' sx={styles.calendarHeaderDateElement}>
                                    {/*Desktop UI View*/}
                                    {timeUtils.getUIReadyDate(currentTime)}
                                </Text>
                            </Box>
                            <Button size={1} onClick={() => handleDateChangeClick("next month")}
                                    className='calendarHeaderDateButtons' sx={styles.calendarHeaderDateButtons}
                                    variant='ghost'>
                                <ChevronRightIcon boxSize={3}/>
                            </Button>
                            <Button size={1} onClick={() => handleDateChangeClick("next year")}
                                    className='calendarHeaderDateButtons' sx={styles.calendarHeaderDateButtons}
                                    variant='ghost'>
                                <ArrowRightIcon boxSize={2}/>
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
                {/*this is where you need to pass down info on the current time so it can update itself*/}
                <DesktopCalendarGrid/>
            </Box>
            <Box className='calendarAsideFilterContainer' sx={styles.calendarAsideFilterContainer}>
                <Input
                    className='calendarAsideFilterInput'
                    sx={styles.calendarAsideFilterInput}
                    size='sm'
                    variant='outline'
                    placeholder='Filter Events'
                    value={filterSearch}
                    onChange={handleFilterSearch}
                />
            </Box>
        </Box>
    )
}
export default DesktopCalendarAside;