import {Box, HStack, Text, useTheme, VStack} from "@chakra-ui/react";
import DesktopCalendarStyles from "../../styles/DesktopCalendarStyles.js";
// TODO you are trying to import this days object from globals directory
// import {days} from "src/scripts/globals/DaysOfWeeks.js"
const DesktopCalendar = () => {
    const theme = useTheme();
    const styles = DesktopCalendarStyles(theme);

    const days = ['SUN', 'MON', 'TUES', 'WED', 'THU', 'FRI', 'SAT']
    const highlighted = () => true

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
                    {days.map((day, index) => (
                        <Box
                            className='deskCalendarDayElement'
                            sx={styles.deskCalendarDayElement}
                            key={index}>{day}</Box>
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
                {Array.from({length: 35}, (_, index) => (
                    <Box
                        className='deskCalendarGridItems'
                        sx={styles.deskCalendarGridItems}
                        key={index}
                    >
                        {highlighted ? (
                            // TODO for a highlighted day, make sure its centered
                            <Box className='deskCalendarGridHighLightedNumber'
                                 sx={styles.deskCalendarGridHighLightedNumber}>
                                <Text className='deskCalendarGridDayNumberHighLight'
                                      sx={styles.deskCalendarGridDayNumberHighLight}> {index + 1} </Text>
                            </Box>
                        ) : (
                            <Text className='deskCalendarGridDayNumber'
                                  sx={styles.deskCalendarGridDayNumber}>{index + 1}</Text>
                        )}
                    </Box>
                ))}

            </Box>
        </VStack>
    );
};

export default DesktopCalendar;
