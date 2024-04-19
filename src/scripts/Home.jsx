import React from 'react';
import { useTheme, Box, Text } from '@chakra-ui/react';
import Navigation from './navigation/Navigation';
import { homeStyles } from "../styles/HomeStyles";
import NoteCard from './homeCards/NoteCard';
import UpcomingEvents from './homeCards/UpcomingEvents';
import { Link } from 'react-router-dom';

export const Home = () => {
    const theme = useTheme();
    const styles = homeStyles(theme);

    return (
        <Box sx={styles.homeContainer} className='homeContainer'>
            <Navigation />
            <Box sx={styles.homeBodyContainer} className='homeBodyContainer'>
                <Box sx={styles.homeBodyInformationGrid} className='homeBodyInformationGrid'>
                    <Text sx={styles.homeBodyInformationTemporaryTitle} className='homeBodyInformationTemporaryTitle'>
                        Picture of Family or a Carousel of Pictures
                    </Text>
                </Box>
                <Box sx={styles.homeBodyCardGrid} className='homeBodyCardGrid'>
                    <Link to='/note' style={{ textDecoration: 'none', flex: '1 1 150px' }}>
                        <Box id='note-card' sx={styles.homeBodyLargeCard} className='homeBodyLargeCard'>
                            <NoteCard />
                        </Box>
                    </Link>
                    <Link to='/rsvp' style={{ textDecoration: 'none', flex: '1 1 150px' }}>
                        <Box sx={styles.homeBodyMediumCard} className='homeBodyMediumCard'><UpcomingEvents /> </Box>
                    </Link>
                    <Box sx={styles.homeBodySmallCard} className='homeBodySmallCard'>small</Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Home;
