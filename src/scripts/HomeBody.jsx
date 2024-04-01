import React from 'react'
import {
    Box,
    useTheme,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Stack,
    StackDivider
} from '@chakra-ui/react'
import HomeBodyStyle from '../styles/HomeBodyStyle'

export const HomeBody = () => {
    const theme = useTheme();
    const styles = HomeBodyStyle(theme);

    return (
        <Box sx={styles.homeBodyContainer} className='homeBodyContainer'>
            <Box sx={styles.homeBodyYearPickerContainer} className='homeBodyYearPickerContainer'>
                <Accordion allowToggle>
                    <AccordionItem className='bodyYearContainer' sx={styles.bodyYearContainer}>
                        <h2 className='bodyYearTitle' sx={styles.bodyYearTitle}>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    2018
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text as='span' className='bodyYearText' sx={styles.bodyYearText}></Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className='bodyYearContainer' sx={styles.bodyYearContainer}>
                        <h2 className='bodyYearTitle' sx={styles.bodyYearTitle}>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    2019
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text as='span' className='bodyYearText' sx={styles.bodyYearText}></Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className='bodyYearContainer' sx={styles.bodyYearContainer}>
                        <h2 className='bodyYearTitle' sx={styles.bodyYearTitle}>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    2020
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text as='span' className='bodyYearText' sx={styles.bodyYearText}></Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className='bodyYearContainer' sx={styles.bodyYearContainer}>
                        <h2 className='bodyYearTitle' sx={styles.bodyYearTitle}>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    2021
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text as='span' className='bodyYearText' sx={styles.bodyYearText}></Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className='bodyYearContainer' sx={styles.bodyYearContainer}>
                        <h2 className='bodyYearTitle' sx={styles.bodyYearTitle}>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    2022
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text as='span' className='bodyYearText' sx={styles.bodyYearText}></Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className='bodyYearContainer lastYear' sx={styles.bodyYearContainer}>
                        <h2 className='bodyYearTitle' sx={styles.bodyYearTitle}>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    2023
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text as='span' className='bodyYearText' sx={styles.bodyYearText}></Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
            <Box sx={styles.homeBodyNotesContainer} className='homeBodyNotesContainer'>
                <Card sx={styles.homeBodyNotesCardContainer} className='homeBodyNotesCardContainer'>
                    <CardHeader>
                        <Heading size='md'>Client Report</Heading>
                    </CardHeader>

                    <CardBody>
                        <Stack divider={<StackDivider />} spacing='4'>
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                    Summary
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                    View a summary of all your clients over the last month.
                                </Text>
                            </Box>
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                    Overview
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                    Check out the overview of your clients.
                                </Text>
                            </Box>
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                    Analysis
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                    See a detailed analysis of all your business clients.
                                </Text>
                            </Box>
                        </Stack>
                    </CardBody>
                </Card>
            </Box>
        </Box>
    )
}

export default HomeBody