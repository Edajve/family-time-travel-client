import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
    useTheme,
    Box,
    Button,
    useDisclosure,
    Text,
    Stack,
    Heading,
    Divider,
    ButtonGroup,
    Image,
    VStack,
    StackDivider,
} from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { navigationStyles } from '../../styles/NavigationStyles'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { Card, CardBody, CardFooter } from '@chakra-ui/react'

export const Navigation = () => {
    const theme = useTheme();
    const styles = navigationStyles(theme);
    const { isOpen: isMobileOpen, onOpen: onMobileOpen, onClose: onMobileClose } = useDisclosure();

    const drawerStyle = {
        navigationHeader: {
            color: theme.colors.secondary
            , backgroundColor: theme.colors.background
        }
        , navigationDrawerBody: {
            backgroundColor: theme.colors.background
        }
        , navigationDrawerCloseButton: {
            color: theme.colors.textMain
        }
        , navigationCardContainer: {
            color: theme.colors.textMain,
            backgroundColor: theme.colors.textMainDeemphasize
        }
        , navigationCardBody: {
            color: theme.colors.textMain
            , height: '200px'
        }
        , navigationCardTextOne: {
            color: theme.colors.background
        }
        , navigationCardInformationContainer: {
            width: '100%'
            , height: 'auto'
        }
        , navigationCardHeading: {
            color: theme.colors.secondary
            , fontSize: theme.fontSizes.md
        }
        , navigationInfoText: {
            color: theme.colors.background,
            fontWeight: '500',
            fontSize: theme.fontSizes.sm
        }
        , navigationCardButtonTwo: {
            color: theme.colors.background
        }
        , navigationCardInfoSectionOne: {
            display: 'flex'
            , flexDirection: 'row'
            , justifyContent: 'space-between'
            , width: '100%'
            , paddingTop: theme.space.sm
        }
        , navigationCardInfoSectionTwo: {
            display: 'flex'
            , flexDirection: 'row'
            , justifyContent: 'space-between'
            , width: '100%'
            , paddingTop: theme.space.sm
        }
        , navigationCardInfoSectionThree: {
            display: 'flex'
            , flexDirection: 'row'
            , justifyContent: 'space-between'
            , width: '100%'
            , paddingTop: theme.space.sm
        }
        , navigationCardInfoTemplate: {
            fontSize: theme.fontSizes.sm
            , color: theme.colors.textMainDeemphasize
        }
        , navigationCardInfoSectionValue: {
            fontSize: theme.fontSizes.sm
            , color: theme.colors.background
        }
        , navigationCardButtoneOne: {
            color: theme.colors.background
            , backgroundColor: theme.colors.secondary
            , marginRight: theme.space.lg
        }
    }

    return (
        <>
            <Box className='mobileNavContainer' sx={styles.mobileNavContainer}>
                {/* Mobile Hamburger Icon */}
                <Box sx={styles.hamburgerIconContainer} className='hamburgerIconContainer'>
                    <Button className='hamburgerButton' sx={styles.hamburgerButton} variant='link' onClick={onMobileOpen}>
                        <HamburgerIcon boxSize={9} sx={styles.hamburgerButton} />
                        <Drawer onClose={onMobileClose} isOpen={isMobileOpen} size='xs'>
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerCloseButton className='navigationDrawerCloseButton' sx={drawerStyle.navigationDrawerCloseButton} />
                                <DrawerHeader as='span' className='navigationHeader' sx={drawerStyle.navigationHeader}> {`Account`}</DrawerHeader>
                                <DrawerBody className='navigationDrawerBody' sx={drawerStyle.navigationDrawerBody}>
                                    <Card className='navigationCardContainer' sx={drawerStyle.navigationCardContainer} maxW='sm'>
                                        <CardBody className='navigationCardBody' sx={drawerStyle.navigationCardBody}>
                                            <Image
                                                className='navigationCardImage'
                                                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                                alt='Green double couch with wooden legs'
                                                borderRadius='lg'
                                            />
                                            <Stack className='navigationCardStace' sx={drawerStyle.navigationCardStace} mt='6' spacing='3'>
                                                <Heading className='navigationCardHeading' sx={drawerStyle.navigationCardHeading} size='md'>Member</Heading>
                                                <Text className='navigationInfoText' sx={drawerStyle.navigationInfoText}>
                                                    Information
                                                </Text>
                                                <VStack
                                                    className='navigationCardInformationContainer'
                                                    sx={drawerStyle.navigationCardInformationContainer}
                                                    color='blue.600' fontSize='2xl'
                                                    divider={<StackDivider borderColor='gray.200' />}
                                                    spacing={1}
                                                    align='stretch'
                                                >
                                                    <Box className='navigationCardInfoSectionOne' sx={drawerStyle.navigationCardInfoSectionOne} h='40px'>
                                                        <Box className='navigationCardInfoTemplate' sx={drawerStyle.navigationCardInfoTemplate} h='40px'>
                                                            Name
                                                        </Box>
                                                        <Box className='navigationCardInfoSectionValue' sx={drawerStyle.navigationCardInfoSectionValue} h='40px'>
                                                            James Bond
                                                        </Box>
                                                    </Box>
                                                    <Box className='navigationCardInfoSectionTwo' sx={drawerStyle.navigationCardInfoSectionTwo} h='40px' >
                                                        <Box className='navigationCardInfoTemplate' sx={drawerStyle.navigationCardInfoTemplate} h='40px'>
                                                            Email
                                                        </Box>
                                                        <Box className='navigationCardInfoSectionValue' sx={drawerStyle.navigationCardInfoSectionValue} h='40px'>
                                                            TestEmail.gmail-test.com
                                                        </Box>
                                                    </Box>
                                                    <Box className='navigationCardInfoSectionThree' sx={drawerStyle.navigationCardInfoSectionThree} h='40px' >
                                                        <Box className='navigationCardInfoTemplate' sx={drawerStyle.navigationCardInfoTemplate} h='40px'>
                                                            Phone
                                                        </Box>
                                                        <Box className='navigationCardInfoSectionValue' sx={drawerStyle.navigationCardInfoSectionValue} h='40px'>
                                                            777-777-7777
                                                        </Box>
                                                    </Box>
                                                    <Box className='navigationCardInfoSectionThree' sx={drawerStyle.navigationCardInfoSectionThree} h='40px' >
                                                        <Box className='navigationCardInfoTemplate' sx={drawerStyle.navigationCardInfoTemplate} h='40px'>
                                                            Joined
                                                        </Box>
                                                        <Box className='navigationCardInfoSectionValue' sx={drawerStyle.navigationCardInfoSectionValue} h='40px'>
                                                            March 25th, 2021
                                                        </Box>
                                                    </Box>

                                                </VStack>
                                            </Stack>
                                        </CardBody>
                                        <Divider />
                                        <CardFooter className='navigationCardFooter' sx={drawerStyle.navigationCardFooter}>
                                            <ButtonGroup className='navigationCardButtonGroup' sx={drawerStyle.navigationCardButtonGroup} spacing='2'>
                                                <Button size={4} className='navigationCardButtoneOne' sx={drawerStyle.navigationCardButtoneOne} variant='solid' colorScheme='blue'>
                                                    <Link to='/settings'>Settings</Link>
                                                </Button>
                                                <Button size='20px' className='navigationCardButtonTwo' sx={drawerStyle.navigationCardButtonTwo} variant='ghost' colorScheme='blue'>
                                                    Add Time Capsule
                                                </Button>
                                            </ButtonGroup>
                                        </CardFooter>
                                    </Card>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                    </Button >
                </Box >
                {/* Laptup and up navigation elements */}
                <Box sx={styles.desktopAccountDropDown} className='desktopAccountDropwodn'>
                    <Link to='/settings'>
                        <Button className='desktopAccountButton' sx={styles.desktopAccountButton}>Account</Button>
                    </Link>
                </Box>
            </Box>
        </>
    )
}

export default Navigation