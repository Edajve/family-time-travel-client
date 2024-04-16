import React from 'react'
import { useTheme, Box } from '@chakra-ui/react'
import Navigation from './navigation/Navigation'
import { homeStyles } from "../styles/HomeStyles"

export const Home = () => {
    const theme = useTheme();
    const styles = homeStyles(theme);

    return (
        <Box sx={styles.homeContainer} className='homeContainer'>
            <Navigation />
            <Box sx={styles.homeBodyContainer} className='homeBodyContainer'>
                <Box sx={styles.homeBodyInformationGrid} className='homeBodyInformationGrid'></Box>
                <Box sx={styles.homeBodyCardGrid} className='homeBodyCardGrid'>
                    <Box sx={styles.homeBodyLargeCard} className='homeBodyLargeCard'>large</Box>
                    <Box sx={styles.homeBodyMediumCard} className='homeBodyMediumCard'>medium</Box>
                    <Box sx={styles.homeBodySmallCard} className='homeBodySmallCard'>small</Box>
                    <Box sx={styles.homeBodyLargeCard} className='homeBodyLargeCard'>large</Box>
                    <Box sx={styles.homeBodyMediumCard} className='homeBodyMediumCard'>medium</Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Home;