import {Box} from '@chakra-ui/react'
import RSVPStyles from '../../styles/RSVPStyles'
import BackHeader from '../navigation/BackHeader'
import Calendar from './Calendar'

const RSVP = () => {
    const styles = RSVPStyles();

    return (
        <>
            <BackHeader />
            <Box className='rsvpContainer' sx={styles.rsvpContainer}>
                <Calendar />
            </Box>
        </>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default RSVP