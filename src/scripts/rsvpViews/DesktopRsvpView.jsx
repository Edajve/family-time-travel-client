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
    useTheme,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from "@chakra-ui/react";
import CalendarStyles from "../../styles/CalendarStyles.js";
import {ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";
import {Link} from "react-router-dom";
import DesktopCalendarGrid from "./DesktopCalendarGrid.jsx";
import {useState} from "react";
import CalendarUtils from "../globals/Time.js";

// eslint-disable-next-line react/prop-types
const DesktopRsvpView = ({currentTime, handleDateChangeClick, eventsForTheDay}) => {
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
            <Box className='deskRsvpEventsContainer' sx={styles.deskRsvpEventsContainer}>
                <TableContainer className='tableContainer' sx={styles.tableContainer}>
                    <Table overflowX='scroll' className='tableContainer' variant='simple' sx={styles.tableContainer}>
                        <TableCaption className='tableCaption' sx={styles.tableCaption}>
                            All Events for Today
                        </TableCaption>
                        <Thead className='thead' sx={styles.thead}>
                            <Tr className='tr'>
                                <Th className='th'>Name</Th>
                                <Th className='th'>Date</Th>
                                <Th className='th'>Description</Th>
                                <Th className='th'>Notes</Th>
                                <Th className='th'>Location</Th>
                                <Th className='th'>Organizer</Th>
                                <Th className='th'>Category</Th>
                                <Th className='th'>Tags</Th>
                                <Th className='th'>Link</Th>
                            </Tr>
                        </Thead>
                        <Tbody className='tbody' sx={styles.tbody}>
                            <Tr className='tr'>
                                <Td className='td'>inches</Td>
                                <Td className='td'>millimetres (mm)</Td>
                                <Td className='td' isNumeric>25.4</Td>
                                <Td className='td'>inches</Td>
                                <Td className='td'>millimetres (mm)</Td>
                                <Td className='td' isNumeric>25.4</Td>
                                <Td className='td'>inches</Td>
                                <Td className='td'>millimetres (mm)</Td>
                                <Td className='td' isNumeric>25.4</Td>
                            </Tr>
                            <Tr className='tr'>
                                <Td className='td'>feet</Td>
                                <Td className='td'>centimetres (cm)</Td>
                                <Td className='td' isNumeric>30.48</Td>
                                <Td className='td'>inches</Td>
                                <Td className='td'>millimetres (mm)</Td>
                                <Td className='td' isNumeric>25.4</Td>
                                <Td className='td'>inches</Td>
                                <Td className='td'>millimetres (mm)</Td>
                                <Td className='td' isNumeric>25.4</Td>
                            </Tr>
                            <Tr className='tr'>
                                <Td className='td'>yards</Td>
                                <Td className='td'>metres (m)</Td>
                                <Td className='td' isNumeric>0.91444</Td>
                                <Td className='td'>inches</Td>
                                <Td className='td'>millimetres (mm)</Td>
                                <Td className='td' isNumeric>25.4</Td>
                                <Td className='td'>inches</Td>
                                <Td className='td'>millimetres (mm)</Td>
                                <Td className='td' isNumeric>25.4</Td>
                            </Tr>
                        </Tbody>
                        <Tfoot className='tfoot'>
                            <Tr className='tr'>
                                <Th className='th'>To convert</Th>
                                <Th className='th'>into</Th>
                                <Th className='th' isNumeric>multiply by</Th>
                                <Th className='th'>To convert</Th>
                                <Th className='th'>into</Th>
                                <Th className='th' isNumeric>multiply by</Th>
                                <Th className='th'>To convert</Th>
                                <Th className='th'>into</Th>
                                <Th className='th' isNumeric>multiply by</Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}
export default DesktopRsvpView;