import React from 'react';
import { Text, useTheme, Box, Button } from '@chakra-ui/react';
import { Link } from "react-router-dom"


const notFoundStyles = (theme) => ({
    notFoundContainer: {
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'center',
        paddingLeft: theme.space.lg,
        paddingRight: theme.space.lg,
        '@media screen and (min-width: 600px)': {
            marginTop: '25vh',
            color: 'white',
        },
        '@media screen and (min-width: 768px)': {
            marginTop: '20vh',
        },
        '@media screen and (min-width: 1024px)': {
            justifyContent: 'center',
            marginTop: '0',
        },
    },
    titleContainer: {
        textAlign: 'center',
        paddingLeft: theme.space.lg,
        paddingRight: theme.space.lg,
    },
    notFoundTitleFont: {
        fontFamily: theme.fonts.notFoundBold,
        fontWeight: '400',
        fontStyle: 'normal',
        color: 'purple.300',
        fontSize: '150px',
    },
    subheaderContainer: {
        textAlign: 'center',
    },
    fourOhFourText: {
        color: theme.colors.primary,
        fontFamily: "'Roboto', sans-serif",
        fontWeight: '700',
        fontStyle: 'normal',
    },
    errorDescriptionContainer: {
        textAlign: 'center',
        width: '80vw',
        height: '130px',
    },
    errorDescription: {
        maxWidth: '600px',
        color: theme.colors.primary,
    },
    goToHomeButton: {
        color: theme.colors.background
        , backgroundColor: theme.colors.secondary
    }
});

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
