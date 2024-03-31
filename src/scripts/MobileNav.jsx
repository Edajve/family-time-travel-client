import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useTheme, Box, Button, useDisclosure } from '@chakra-ui/react'
import { mobileNavStyles } from '../styles/MobileNavStyle'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'


export const MobileNav = () => {
    const theme = useTheme();
    const styles = mobileNavStyles(theme);
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box className='mobileNavContainer' sx={styles.mobileNavContainer}>
                <Box sx={styles.hamburgerIconContainer} className='hamburgerIconContainer'>
                    <Button className='hamburgerButton' sx={styles.hamburgerButton} variant='link' onClick={onOpen}>
                        <HamburgerIcon boxSize={9} sx={styles.hamburgerButton} />
                    </Button >
                </Box>
            </Box>

            <Drawer onClose={onClose} isOpen={isOpen} size='md'>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>{`drawer contents`}</DrawerHeader>
                    <DrawerBody>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Consequat nisl vel pretium lectus quam id. Semper quis lectus
                            nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
                            quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
                            magna eget est lorem. Erat imperdiet sed euismod nisi porta.
                            Lectus vestibulum mattis ullamcorper velit.
                        </p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MobileNav