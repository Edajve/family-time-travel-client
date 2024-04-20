import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    useTheme
} from "@chakra-ui/react";
import CalendarStyles from "../../styles/CalendarStyles.js";
import {ChevronDownIcon} from "@chakra-ui/icons";

const DesktopCalendarAside = () => {
    const theme = useTheme();
    const styles = CalendarStyles(theme);

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
                        <MenuItem className='calendarAsideNewEventButtonMenuItem'
                                  sx={styles.calendarAsideNewEventButtonMenuItem}>New Event</MenuItem>
                    </MenuList>
                </Menu>
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