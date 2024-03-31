import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useTheme, Box, Button } from '@chakra-ui/react'
import { mobileNavStyles } from '../styles/MobileNavStyle'


export const MobileNav = () => {
    const theme = useTheme();
    const styles = mobileNavStyles(theme);

    return (
        <Box className='mobileNavContainer' sx={styles.mobileNavContainer}>
            <Box sx={styles.hamburgerIconContainer} className='hamburgerIconContainer'>
                <Button className='hamburgerButton' sx={styles.hamburgerButton} variant='link'>
                    <HamburgerIcon boxSize={9} sx={styles.hamburgerButton}/>
                </Button >
            </Box>
        </Box>
    )
}

export default MobileNav