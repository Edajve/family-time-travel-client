import React from 'react';
import { Text, useTheme, Box, Button } from '@chakra-ui/react';
import { Link } from "react-router-dom"
import { notFoundStyles } from '../styles/NotFoundStyle'


export const NotFound = () => {
    const theme = useTheme();
    const styles = notFoundStyles(theme);

    return (
        <Box sx={styles.notFoundContainer}>
            <Box sx={styles.titleContainer}>
                <Text as='span' sx={styles.notFoundTitleFont}>OOPS!</Text>
            </Box>
            <Box sx={styles.subheaderContainer}>
                <Text as='span' sx={styles.fourOhFourText}>
                    404 - PAGE NOT FOUND
                </Text>
            </Box>
            <Box sx={styles.errorDescriptionContainer}>
                <Text as='span' sx={styles.errorDescription}>
                    The page you are looking for might have been removed,
                    had its name changed, or is temporarily unavailable.
                </Text>
            </Box>
            <Box sx={styles.goToHomeButtonContainer}>
                <Button sx={styles.goToHomeButton}>
                    <Link to="/splash">GO TO HOMEPAGE</Link>
                </Button>
            </Box>
        </Box>
    );
};

export default NotFound;
