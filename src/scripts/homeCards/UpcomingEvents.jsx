import React from 'react'
import UpcomingEventsStyles from '../../styles/UpcomingEventsStyles'
import { useTheme, Box, Image, Text } from '@chakra-ui/react'
import { CalendarIcon } from '@chakra-ui/icons'

// Ue -> Upcoming Events
const UpcomingEvents = () => {
    const theme = useTheme();
    const styles = UpcomingEventsStyles(theme);

    return (
        <Box className='UeMainContainer' sx={styles.UeMainContainer}>
            <Box className='UeTitleContainer' sx={styles.UeTitleContainer}>
                <Text className='UeTitle' sx={styles.UeTitle}>Upcoming events</Text>
                <Text className='UeDescription' sx={styles.UeDescription}>
                    Easily organize and share family gatherings with our intuitive Events
                    Planner. Schedule, invite, and track RSVPs all in one place—ensuring
                    no one misses out on the fun. Make every occasion unforgettable!
                </Text>
            </Box>
            <Box className='UeRightSideContainer' sx={styles.UeRightSideContainer}>
                <Box className='UeIconContainer' sx={styles.UeIconContainer}>
                    <CalendarIcon boxSize={16} className='UeIcon' sx={styles.UeIcon} color="c0ccc897" />
                </Box>
            </Box>
        </Box>
    )
}

export default UpcomingEvents