import React from 'react';
import {
    Box,
    useTheme,
    VStack,
    HStack,
    Text,
    ButtonGroup,
    Button,
    Grid,
    Divider
} from '@chakra-ui/react';
import MobileCalendarTrackerStyles from '../../styles/MobileCalendarTrackerStyles';

const MobileCalendarTracker = () => {
    const theme = useTheme();
    const styles = MobileCalendarTrackerStyles(theme);
    

  return (
    <Box className='calendarMobileTrackerContainer' sx={styles.calendarMobileTrackerContainer}>MobileCalendarTracker</Box>
  )
}

export default MobileCalendarTracker