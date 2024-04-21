import {Box, HStack, Text, useTheme, VStack} from "@chakra-ui/react";
import DesktopCalendarStyles from "../../styles/DesktopCalendarStyles.js";
import CalendarUtils from "../globals/Time.js"
import {useEffect, useState} from "react";

const timeUtils = new CalendarUtils();

const DesktopCalendarGrid = () => {
    const theme = useTheme()
    const styles = DesktopCalendarStyles(theme)
    const [firstDayOfMonth, setFirstDayOfMonth] = useState(0)
    const [currentTime] = useState(timeUtils.currentTimeObj)

    useEffect(() => {
        setFirstDayOfMonth(currentTime.firstDayOfWeek);
    }, [currentTime]);

    function handleDateClicked(event) {
        console.log(event.target.innerText)
    }

    return (
        <VStack
            className='deskCalendarGridContainerContainer'
            sx={styles.deskCalendarGridContainerContainer}
        >
            <Box
                className='deskCalendarDayBox'
                sx={styles.deskCalendarDayBox}
            >
                <HStack
                    className='deskCalendarDayBoxContainer'
                    sx={styles.deskCalendarDayBoxContainer}
                    gap={0}
                >
                    {timeUtils.days.map((day, index) => (
                        <Box
                            className='deskCalendarDayElement'
                            sx={styles.deskCalendarDayElement}
                            key={index}
                        >
                            <Text className='deskCalendarNumberElement' sx={styles.deskCalendarNumberElement}>
                                {day}
                            </Text>
                        </Box>
                    ))}
                </HStack>
            </Box>
            <Box
                className='deskCalendarGridContainer'
                sx={styles.deskCalendarGridContainer}
                display="grid"
                gridTemplateColumns="repeat(7, 1fr)"
                gridTemplateRows="repeat(5, 1fr)"
            >
                {Array.from({length: firstDayOfMonth}, (_, index) => (
                    <Box
                        className='deskCalendarGridItems empty'
                        sx={styles.deskCalendarGridItems}
                        key={'empty_' + index}
                    >
                        {/* Leaving the empty spot blank */}
                    </Box>
                ))}
                {Array.from({length: timeUtils.getNumberOfDaysInMonth(currentTime.currentMonth)}, (_, index) => (
                    <Box
                        className='deskCalendarGridItems'
                        sx={styles.deskCalendarGridItems}
                        key={index}
                        onClick={(event) => handleDateClicked(event)}
                    >
                        <Text className='deskCalendarGridDayNumber' sx={styles.deskCalendarGridDayNumber}>
                            {index + 1}
                        </Text>
                    </Box>
                ))}
            </Box>
        </VStack>
    );
};

export default DesktopCalendarGrid;
