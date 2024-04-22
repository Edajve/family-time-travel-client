import {
    Box,
    Button,
    ButtonGroup,
    HStack,
    Input,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    useTheme
} from "@chakra-ui/react";
import CalendarStyles from "../../styles/CalendarStyles.js";
import {ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";
import {Link} from "react-router-dom";
import DesktopCalendarGrid from "./DesktopCalendarGrid.jsx";
import {useState} from "react";
import CalendarUtils from "../globals/Time.js";

// eslint-disable-next-line react/prop-types
const DesktopRsvpView = ({currentTime, handleDateChangeClick}) => {
    const theme = useTheme();
    const styles = CalendarStyles(theme);
    const [filterSearch, setFilterSearch] = useState("");
    const timeUtils = new CalendarUtils();

    function handleFilterSearch(input) {
        setFilterSearch(input.target.value);
    }

    return (
        <>
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
                        </HStack>
                    </HStack>
                    <DesktopCalendarGrid
                        currentTime={currentTime}
                    />
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
            <Box><Text>Main Styles for Desktop View</Text></Box>
        </>
    )
}
export default DesktopRsvpView;