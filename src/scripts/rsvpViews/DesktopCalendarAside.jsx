import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box, Button, ButtonGroup, HStack, IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    useTheme
} from "@chakra-ui/react";
import CalendarStyles from "../../styles/CalendarStyles.js";
import {AddIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, HamburgerIcon} from "@chakra-ui/icons";
import {Link} from "react-router-dom";
import DesktopCalendarGrid from "./DesktopCalendarGrid.jsx";
import {useEffect, useState} from "react";

const DesktopCalendarAside = () => {
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
                        Create <ChevronDownIcon/>
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
                <DesktopCalendarGrid/>
            </Box>
            <Box className='calendarAsideAccordianContainer' sx={styles.calendarAsideAccordionContainer}>
                <Accordion className='calendarAsideAccordion' sx={styles.calendarAsideAccordion} allowToggle>
                    <AccordionItem className='calendarAsideAccordionItem' sx={styles.calendarAsideAccordionItem}>
                        <Text className='calendarAsideAccordionTitle'
                              sx={styles.calendarAsideAccordionTitle}>
                            <AccordionButton className='calendarAsideAccordionButton'
                                             sx={styles.calendarAsideAccordionButton}>
                                <Box as='span' flex='1' textAlign='left'>
                                    <Text className='calendarAsideAccordionTitle'
                                          sx={styles.calendarAsideAccordionTitle}>
                                        My Events
                                    </Text>
                                </Box>
                                <AccordionIcon/>
                            </AccordionButton>
                        </Text>
                        <AccordionPanel className='calendarAsideAccordionPanel'
                                        sx={styles.calendarAsideAccordionPanel} pb={4}>
                            <Text
                                className='calendarAsideNoDataText'
                                sx={styles.calendarHeaderHamburgerMenuItem}
                            >
                                No Current Upcoming Events
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className='calendarAsideAccordionItem' sx={styles.calendarAsideAccordionItem}>
                        <Text className='calendarAsideAccordionTitle'
                              sx={styles.calendarAsideAccordionTitle}>
                            <AccordionButton className='calendarAsideAccordionButton'
                                             sx={styles.calendarAsideAccordionButton}>
                                <Box as='span' flex='1' textAlign='left'>
                                    <Text className='calendarAsideAccordionTitle'
                                          sx={styles.calendarAsideAccordionTitle}>
                                        Upcoming Events
                                    </Text>
                                </Box>
                                <AccordionIcon/>
                            </AccordionButton>
                        </Text>
                        <AccordionPanel className='calendarAsideAccordionPanel'
                                        sx={styles.calendarAsideAccordionPanel} pb={4}>
                            <Text
                                className='calendarAsideNoDataText'
                                sx={styles.calendarHeaderHamburgerMenuItem}
                            >
                                No Current Events
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </Box>
    )
}
export default DesktopCalendarAside;