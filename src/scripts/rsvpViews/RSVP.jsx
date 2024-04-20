import { Box, useTheme } from '@chakra-ui/react'
import RSVPStyles from '../../styles/RSVPStyles'
import BackHeader from '../navigation/BackHeader'
import Calendar from './Calendar'

const RSVP = () => {
    const theme = useTheme();
    const styles = RSVPStyles(theme);

    return (
        <>
            <BackHeader />
            <Box className='rsvpContainer' sx={styles.rsvpContainer}>
                <Calendar />
            </Box>
        </>
    )
}

export default RSVP